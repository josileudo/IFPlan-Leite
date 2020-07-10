import React, {Component} from 'react';
import {StyleSheet, View } from 'react-native';
import {Background,  ClimaValues, AnimalValues, ValueTitle, CardValues,
  CardTextValues,ScrollView, CardTextVar, TextVar, ValuesVar,
  BackgroundValues, CardValuesVar} from '../styles/styleModelo'

export default class Modelo extends Component{
  constructor(props){
    super(props)
    this.state = {
      dataClima: {},
      dataArea: {},
      dataAnimal: {},
      dataEconomia: {}
    }
    this.refresh = {
      refreshing: true
    }
  }
  
  async componentDidMount() {
    const Area= await AsyncStorage.getItem('Agua')
    if (Area){
      let value= JSON.parse(Area)
      this.setState({dataArea: value})
      console.log ( 'Area', value )
    }

    const Economia = await AsyncStorage.getItem('Economia')
    if(Economia){
      let value = JSON.parse(Economia)
      this.setState({dataEconomia:value})
      console.log( 'Economia', value )
    }
    
    const Clima = await AsyncStorage.getItem('Clima')
    if(Clima){
      let value = JSON.parse(Clima)
      this.setState({dataClima: value})
      console.log( 'Clima', value )
    }

    const Animal = await AsyncStorage.getItem('Animal')
    if(Animal){
      let value =JSON.parse(Animal)
      this.setState({dataAnimal: value})
      console.log('Animal', value)
    }
  }

  _onRefresh = () => {
    this.setState({refreshing: true})
    this.componentDidMount().then(() => {
      this.setState({refreshing: false})
    })
  }

  render(){
    const {dataClima} = this.state;
    const {dataArea} = this.state;
    const {dataAnimal} = this.state;
    const {dataEconomia} = this.state;

    //VARIÁVEIS
    // Clima
    const precipitacao= Number (dataClima.prec)
    const temperaturaMaxima= Number (dataClima.tempMax)
    const temperaturaMinima= Number (dataClima.tempMin)
    const umidadeRelativa= Number (dataClima.umidRel)
    const velocidadeVento= Number (dataClima.velVen)
    const doseN= Number (dataClima.doseN)
    const aguaUsos= Number (dataClima.aguaUso)

    // Água
    const area= Number (dataArea.area)
    const numeroPiquetes= Number (dataArea.numPiq)

    // Animal
    const pesoCorporal= Number (dataAnimal.pesoCorp)
    const producaoLeite= Number (dataAnimal.prodLei)
    const teorGordura= Number (dataAnimal.teorGord)
    const teorPB= Number (dataAnimal.teorPB)
    const desloHorizontal= Number (dataAnimal.deslHor)
    const desloVertical= Number (dataAnimal.deslVer)
    const vacasLactação= Number (dataAnimal.vacLact)

    // Economia
    const investimento= Number (dataEconomia.invest)
    const rendaFamiliar= Number (dataEconomia.renFam)
    const taxaDepreciacao= Number (dataEconomia.taxDep)    
    
    //CÁLCULOS
    //ETo
    const ETo = ((((24.211 * temperaturaMaxima )- 635.46)/30.4)
    + ((53.984 * velocidadeVento + 10.898)/30.4))/2

    //irrigação
    const irrigacao= ETo - precipitacao
    
    // Água aplicada
    const aguaAplicada= precipitacao + ((irrigacao )*1.2) 

    // COE Total
    const COETotal = (COE * prodDiaria) * 365

    // Consumo (Kg MS/dia)
    const consumo = -4.69 + (0.0142 * pesoCorporal) + (0.356 * producaoLeite) 
     + (1.72 * teorGordura)

    // Consumo de NDT
    const consumoNDT = ((((48.6-(0.0183 * pesoCorporal)) + (0.435 * producaoLeite) 
     + (0.728 * teorGordura) + (3.46 * teorPB)) * 1.04) / 100) * consumo

     //NDT DV
    const NDTdv = () =>{
    if (desloVertical > 0){
      let res = 0.03 * pesoCorporal * (desloVertical/1000)*0.43
      return res
    } else {
      let res = 0
      return res
      } 
    }
    
    //NDT DH=
    const NDTdh = (0.00045 * pesoCorporal * (desloHorizontal /1000))*0.43
    
     //NDT deslocamento
    const NDTdeslocamento = NDTdh + NDTdv()

    // Consumo total (Kg MS/dia)
    const consTotal = consumo + ((NDTdeslocamento / consumoNDT) * consumo)

    // Tensão da água no solo
    const tenAguaSolo = 0.0368068 + (-1.06252 / aguaAplicada)
    const tenAguaSol = Number (tenAguaSolo.toFixed(3))

    // Depreciação
    const depreciacao = (investimento * (taxaDepreciacao / 365))

    //ITU
    const ITU = (0.8*(temperaturaMaxima + temperaturaMinima)/2 
     + (umidadeRelativa/100)*((temperaturaMaxima + temperaturaMinima)/2 - 14.4)
     + 46.4)
     var itu= Number(ITU.toFixed(3))

    // DPL
    const DPL = -1.075 - (1.736 * producaoLeite) + (0.02474 * producaoLeite * ITU)
    var dpl = Number(DPL.toFixed(3))

    //produção de forragem
    const prodForragem = (1.36722 + (-0.284546 * tenAguaSolo) 
     + (-2.13514 * (Math.pow(tenAguaSolo, 2))))*doseN
    var prodForr = Number(prodForragem.toFixed(3))

    //forragem Disponivel
    const forrDispnivel = ((prodForragem * 10000) * (area/numeroPiquetes)) * 0.2
    
    //Suplementação (kg MS/dia)
    const suplementacao = producaoLeite/2.5
    
    // Capacida de suporte
    const capaSuporte= (forrDispnivel * 0.95) / (consTotal - suplementacao)
    var capaSup = Number(capaSuporte.toFixed(3))

    // DPL anual
    const DPLAnual = (DPL * capaSuporte) * 365
    
    //produção diária
    var prodDiaria= ((producaoLeite) * (capaSuporte * (vacasLactação/100)))
    var prodDia = Number(prodDiaria.toFixed(3))

    // COE
    var COE= 4.52816 + (-0.000142 * prodDiaria) + (0.00000000767199) * (Math.pow(prodDiaria, 2)) 
      + (-0.24042 * producaoLeite) + (0.004937 * (Math.pow(producaoLeite, 2))) 
    var coe = Number(COE.toFixed(3))

    //Produção de leite (L/ha/ano)
    var prodLeiteAno = (prodDiaria * 365) / area
    var prodLeiAno = Number (prodLeiteAno.toFixed(3))

    //produção de leite (L/ha/dia)
    var prodLeiteDia = (prodLeiteAno/365)
    var prodLeiDia = Number(prodLeiteDia.toFixed(3))
    
    //MDO familiar 
    const mdoFamiliar = rendaFamiliar / (prodDiaria * 30.4)

    
    //pegada hídrica
    const pegadaHidrica = (((aguaAplicada * 10000) * area)
    +(aguaUsos/30.4))/prodDiaria
    var pegadaHid = Number(pegadaHidrica.toFixed(3))

    //Receita total (R$/ano)
    const receitaTotalAno = receitaTotalMes * 12
    
    // Investimento total
    const investimentoTotal = investimento * prodDiaria
    
    //COT
    var COT = COE + mdoFamiliar + depreciacao
    var cot = Number(COT.toFixed(2) )

    //ML por área
    const MLArea = MLAnual/area   
   
    // Participação da irrigação na água
    const partIrrAgua = (irrigacao / aguaAplicada) * 100
    
    //preço do leite
    const precoLeite = (0.631922 * (Math.pow(prodDiaria, 0.102383)) 
    + (-0.0132 * (Math.pow(teorGordura,2)) + (0.1384 * teorGordura) - 0.3089))

    //Receita total (R$/mês)
    const receitaTotalMes = (prodDiaria * precoLeite) * 30.4
  
    //ML
    var ML = precoLeite - COT
    var ml = Number(ML.toFixed(2))
    console.log('preco do leite', precoLeite)
    //ML Anual
    const MLAnual = ML * prodDiaria * 365

    //Payback (Anos)
    var payback = investimentoTotal/MLAnual
    var payb= Number(payback.toFixed(3))

    // Perda de receita com estresse
    var perdaReceitaEstresse = DPLAnual * precoLeite
    var perdaRecEstresse= Number(perdaReceitaEstresse.toFixed(2))

    // Taxa de lotação 
    const taxaLotacao = capaSuporte/area
    var taxaLot = Number(taxaLotacao.toFixed(3))

    // TRCI
    var TRCI = (ML * 365) / investimento * 100
    var trci = Number(TRCI.toFixed(3))

    //Receita por área
    var recArea = (receitaTotalMes * 12)/area
    var receitaArea = Number(recArea.toFixed(2))
    console.log(prodDia)
    return (
      <Background>
        <BackgroundValues >
          <ScrollView
           alwaysBounceVertical = {false}
          >
            <ClimaValues>
              <ValueTitle>
                Solo-Água-Planta-Animal
              </ValueTitle>
              <CardValues>
                <CardTextValues>
                  <CardTextVar>
                    <TextVar>
                      Tensão da água no solo (bar)
                    </TextVar>
                  </CardTextVar>
                  <CardValuesVar>
                    <ValuesVar>
                      50
                    </ValuesVar>
                  </CardValuesVar>
                </CardTextValues>
                <CardTextValues>
                  <CardTextVar>
                    <TextVar>
                      Produção de forragem (kg MV/m2)
                    </TextVar>
                  </CardTextVar>
                  <CardValuesVar>
                    <ValuesVar>
                      50
                    </ValuesVar>
                  </CardValuesVar>
                </CardTextValues>
                <CardTextValues>
                  <CardTextVar>
                    <TextVar>
                      Capacidade de suporte (animais)
                    </TextVar>
                  </CardTextVar>
                  <CardValuesVar>
                    <ValuesVar>
                      50
                    </ValuesVar>
                  </CardValuesVar>
                </CardTextValues>
                <CardTextValues>
                  <CardTextVar>
                    <TextVar>
                      Taxa de lotação (vacas/ha)
                    </TextVar>
                  </CardTextVar>
                  <CardValuesVar>
                    <ValuesVar>
                      50
                    </ValuesVar>
                  </CardValuesVar>
                </CardTextValues>
                <CardTextValues>
                  <CardTextVar>
                    <TextVar>
                      ITU
                    </TextVar>
                  </CardTextVar>
                  <CardValuesVar>
                    <ValuesVar>
                      50
                    </ValuesVar>
                  </CardValuesVar>
                </CardTextValues>
                <CardTextValues>
                  <CardTextVar>
                    <TextVar>
                      DPL (L/vaca/dia)
                    </TextVar>
                  </CardTextVar>
                  <CardValuesVar>
                    <ValuesVar>
                      50
                    </ValuesVar>
                  </CardValuesVar>
                </CardTextValues>
                <CardTextValues>
                  <CardTextVar>
                    <TextVar>
                      Pegada hídrica (L H2O/L leite)
                    </TextVar>
                  </CardTextVar>
                  <CardValuesVar>
                    <ValuesVar>
                      50
                    </ValuesVar>
                  </CardValuesVar>
                </CardTextValues>
              </CardValues>
            </ClimaValues>
            <AnimalValues>
              <ValueTitle>
                Sistema-Custos-Resultado econômico
              </ValueTitle>
              <CardValues>
                <CardTextValues>
                  <CardTextVar>
                    <TextVar>
                      Produção diária (L/dia)
                    </TextVar>
                  </CardTextVar>
                  <CardValuesVar>
                    <ValuesVar>
                      50
                    </ValuesVar>
                  </CardValuesVar>
                </CardTextValues>
                <CardTextValues>
                  <CardTextVar>
                    <TextVar>
                      Produção de leite (L/ha/dia)  
                    </TextVar>
                  </CardTextVar>
                  <CardValuesVar>
                    <ValuesVar>
                      50
                    </ValuesVar>
                  </CardValuesVar>
                </CardTextValues>
                <CardTextValues>
                  <CardTextVar>
                    <TextVar>
                      Produção de leite (L/ha/ano)  
                    </TextVar>
                  </CardTextVar>
                  <CardValuesVar>
                    <ValuesVar>
                      50
                    </ValuesVar>
                  </CardValuesVar>
                </CardTextValues>
                <CardTextValues>
                  <CardTextVar>
                    <TextVar>
                      Perda receita estresse (R$/ano)
                    </TextVar>
                  </CardTextVar>
                  <CardValuesVar>
                    <ValuesVar>
                      50
                    </ValuesVar>
                  </CardValuesVar>
                </CardTextValues>
                <CardTextValues>
                  <CardTextVar>
                    <TextVar>
                      COE (R$/L)
                    </TextVar>
                  </CardTextVar>
                  <CardValuesVar>
                    <ValuesVar>
                      50
                    </ValuesVar>
                  </CardValuesVar>
                </CardTextValues>
                <CardTextValues>
                  <CardTextVar>
                    <TextVar>
                      COT (R$/L)
                    </TextVar>
                  </CardTextVar>
                  <CardValuesVar>
                    <ValuesVar>
                      50
                    </ValuesVar>
                  </CardValuesVar>
                </CardTextValues>
                <CardTextValues>
                  <CardTextVar>
                    <TextVar>
                      ML (R$/L)
                    </TextVar>
                  </CardTextVar>
                  <CardValuesVar>
                    <ValuesVar>
                      50
                    </ValuesVar>
                  </CardValuesVar>
                </CardTextValues>
                <CardTextValues>
                  <CardTextVar>
                    <TextVar>
                      Receita por área (R$/ha/ano)
                    </TextVar>
                  </CardTextVar>
                  <CardValuesVar>
                    <ValuesVar>
                      50
                    </ValuesVar>
                  </CardValuesVar>
                </CardTextValues>
                <CardTextValues>
                  <CardTextVar>
                    <TextVar>
                      TRCI (%a.a.)  
                    </TextVar>
                  </CardTextVar>
                  <CardValuesVar>
                    <ValuesVar>
                      50
                    </ValuesVar>
                  </CardValuesVar>
                </CardTextValues>
                <CardTextValues>
                  <CardTextVar>
                    <TextVar>
                      Payback (anos)
                    </TextVar>
                  </CardTextVar>
                  <CardValuesVar>
                    <ValuesVar>
                      50
                    </ValuesVar>
                  </CardValuesVar>
                </CardTextValues>
                <View style = {{height:30}}/>
              </CardValues>
            </AnimalValues>
          </ScrollView>
        </BackgroundValues>
      </Background>
    )
  }
}

const styles = StyleSheet.create({
  btnSimular:{
    shadowColor: "#000",
    shadowOffset: {
    width: 2,
    height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  }
})