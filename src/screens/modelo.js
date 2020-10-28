import React, { Component } from 'react';
import normalize from 'react-native-normalize'
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import AsyncStorage from '@react-native-community/async-storage';

import {
  View,
  StyleSheet,
} from 'react-native';
import {
  Background,
  ClimaValues,
  AnimalValues,
  ValueTitle,
  CardValues,
  CardTextValues,
  ScrollView,
  CardTextVar,
  TextVar,
  ValuesVar,
  BackgroundValues,
  CardValuesVar,
} from '../styles/styleModelo';

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataClima: {},
      dataArea: {},
      dataAnimal: {},
      dataEconomia: {},
      refreshing: true,
    };
  }

  async parametros() {
    const areaData = await AsyncStorage.getItem('Agua');
    this.setState({ refreshing: true });

    if (areaData) {
      const value = JSON.parse(areaData);
      this.setState({
        ...this.state,
        dataArea: value,
        refreshing: false,
      });
    } else {
      this.setState({ refreshing: false });
    }

    const economiaData = await AsyncStorage.getItem('Economia');
    if (economiaData) {
      const value = JSON.parse(economiaData);
      this.setState({
        ...this.state,
        dataEconomia: value,
        refreshing: false,
      });
    } else {
      this.setState({ refreshing: false });
    }

    const climaData = await AsyncStorage.getItem('Clima');
    if (climaData) {
      const value = JSON.parse(climaData);
      this.setState({
        ...this.state,
        dataClima: value,
        refreshing: false,
      });
    } else {
      this.setState({ refreshing: false });
    }

    const animalData = await AsyncStorage.getItem('Animal');
    if (animalData) {
      const value = JSON.parse(animalData);
      this.setState({
        ...this.state,
        dataAnimal: value,
        refreshing: false,
      });
    } else {
      this.setState({ refreshing: false });
    }
  }

  async componentDidMount() {
    this.parametros();
  }

  onRefresh = () => {
    this.setState({ ...this.state, refreshing: true });
    this.parametros().then(() => {
      this.setState({ refreshing: false });
    });
  };

  convertValues(Values) {
    let convString = String(Values);
    let convPont = convString.replace('.', '');
    let convVirg = convPont.replace(',', '.');
    const resultado = Number(convVirg);
    return resultado;
  }

  currencyFormat(number, decimals = 3, dec_point = ',', thousands_sep = '.') {
    var n = !isFinite(+number) ? 0 : +number,
      prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
      sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
      dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
      toFixedFix = function (n, prec) {
        // Fix for IE parseFloat(0.55).toFixed(0) = 0;
        var k = Math.pow(10, prec);
        return Math.round(n * k) / k;
      },
      s = (prec ? toFixedFix(n, prec) : Math.round(n)).toString().split('.');
    if (s[0].length > 3) {
      s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
    }
    if ((s[1] || '').length < prec) {
      s[1] = s[1] || '';
      s[1] += new Array(prec - s[1].length + 1).join('0');
    }
    return s.join(dec);
  }

  render() {
    const { navigate } = this.props.navigation;
    const { dataArea } = this.state;
    const { dataEconomia } = this.state;
    const { dataClima } = this.state;
    const { dataAnimal } = this.state;
    const btnEditar = 'Editar Dados';

    //VARIÁVEIS
    // Clima
    const precipitacao = this.convertValues(dataClima.prec);
    const temperaturaMaxima = this.convertValues(dataClima.tempMax);
    const temperaturaMinima = this.convertValues(dataClima.tempMin);
    const umidadeRelativa = this.convertValues(dataClima.umidRel);
    const velocidadeVento = this.convertValues(dataClima.velVen);
    const doseN = this.convertValues(dataClima.doseN);
    const aguaUsos = this.convertValues(dataClima.aguaUso);

    // Água
    const area = this.convertValues(dataArea.area);
    const numeroPiquetes = this.convertValues(dataArea.numPiq);

    // Animal
    const pesoCorporal = this.convertValues(dataAnimal.pesoCorp);
    const producaoLeite = this.convertValues(dataAnimal.prodLei);
    const teorGordura = this.convertValues(dataAnimal.teorGord);
    const teorPB = this.convertValues(dataAnimal.teorPB);
    const desloHorizontal = this.convertValues(dataAnimal.deslHor);
    const desloVertical = this.convertValues(dataAnimal.deslVer);
    const vacasLactação = this.convertValues(dataAnimal.vacLact);

    // Economia
    const investimento = this.convertValues(dataEconomia.invest);
    const rendaFamiliar = this.convertValues(dataEconomia.renFam);
    const taxaDepreciacao = this.convertValues(dataEconomia.taxDep) / 100;

    //CÁLCULOS
    //ETo
    const ETo =
      ((24.211 * temperaturaMaxima - 635.46) / 30.4 +
        (53.984 * velocidadeVento + 10.898) / 30.4) /
      2;

    //irrigação
    const irrigacao = ETo - precipitacao;

    // Água aplicada
    const aguaAplicada = precipitacao + irrigacao * 1.2;

    // COE Total
    const COETotal = COE * prodDiaria * 365;

    // Consumo (Kg MS/dia)
    const consumo = -4.69 + (0.0142 * pesoCorporal) + (0.356 * producaoLeite)
      + (1.72 * teorGordura);

    // Consumo de NDT
    const consumoNDT =
      ((((48.6 - (0.0183 * pesoCorporal)) + (0.435 * producaoLeite)
        + (0.728 * teorGordura) + (3.46 * teorPB)) * 1.04) / 100) * consumo;


    const NDTdv = (0.00669 * pesoCorporal * (desloVertical / 1000)) * 0.43;


    //NDT DH=
    const NDTdh = (0.00048 * pesoCorporal * (desloHorizontal / 1000)) * 0.43;

    //NDT deslocamento
    const NDTdeslocamento = NDTdh + NDTdv

    // Consumo total (Kg MS/dia)
    const consTotal = consumo + (NDTdeslocamento / consumoNDT) * consumo;

    // Tensão da água no solo
    const tenAguaSolo = 0.0368068 + -1.06252 / aguaAplicada;
    const tenAguaSol = this.currencyFormat(tenAguaSolo.toFixed(3))
    console.log('Tensão na água e no solo: ', tenAguaSol);

    // Depreciação
    const depreciacao = investimento * (taxaDepreciacao / 365);

    //ITU
    const ITU =
      (0.8 * (temperaturaMaxima + temperaturaMinima)) / 2 +
      (umidadeRelativa / 100) *
      ((temperaturaMaxima + temperaturaMinima) / 2 - 14.4) +
      46.4;
    var itu = this.currencyFormat(ITU, 1);

    // DPL
    const DPL = -1.075 - 1.736 * producaoLeite + 0.02474 * producaoLeite * ITU;
    var dpl = this.currencyFormat(DPL, 1);

    //produção de forragem
    const prodForragem =
      (1.36722 +
        -0.284546 * tenAguaSolo +
        -2.13514 * Math.pow(tenAguaSolo, 2)) *
      doseN;
    var prodForr = this.currencyFormat(prodForragem.toFixed(3));

    //forragem Disponivel
    const forrDispnivel = ((prodForragem * 10000) * (area / numeroPiquetes)) * 0.2;

    //Suplementação (kg MS/dia)
    const suplementacao = producaoLeite / 2.5;

    // Capacida de suporte
    const capaSuporte = (forrDispnivel * 0.95) / (consTotal - suplementacao);
    var capaSup = this.currencyFormat(capaSuporte, 1);
    console.log('Forragem disponivel: ', forrDispnivel)
    console.log('Consumo tota: ', consTotal)
    console.log('Suplementacao: ', suplementacao)
    console.log('Capacidade de suporte = ', capaSuporte)
    // DPL anual
    const DPLAnual = DPL * capaSuporte * 365;

    //produção diária
    var prodDiaria = producaoLeite * (capaSuporte * (vacasLactação / 100));
    var prodDia = this.currencyFormat(prodDiaria, 0);

    // COE
    var COE =
      4.52816 +
      -0.000142 * prodDiaria +
      0.00000000767199 * Math.pow(prodDiaria, 2) +
      -0.24042 * producaoLeite +
      0.004937 * Math.pow(producaoLeite, 2);
    console.log('=============', COE);
    var coe = Number(this.currencyFormat(COE.toFixed(2)));
    //Produção de leite (L/ha/ano)
    var prodLeiteAno = (prodDiaria * 365) / area;
    var prodLeiAno = this.currencyFormat(prodLeiteAno, 0);

    //produção de leite (L/ha/dia)
    var prodLeiteDia = prodLeiteAno / 365;
    var prodLeiDia = this.currencyFormat(prodLeiteDia, 0);

    //MDO familiar
    const mdoFamiliar = rendaFamiliar / (prodDiaria * 30.4);

    //pegada hídrica
    const pegadaHidrica =
      (aguaAplicada * 10000 * area + aguaUsos / 30.4) / prodDiaria;
    var pegadaHid = this.currencyFormat(pegadaHidrica, 0);

    //Receita total (R$/ano)
    const receitaTotalAno = receitaTotalMes * 12;

    // Investimento total
    const investimentoTotal = investimento * prodDiaria;

    //COT
    var COT = COE + mdoFamiliar + depreciacao;
    var cot = this.currencyFormat(COT, 2);

    //ML por área
    const MLArea = MLAnual / area;

    // Participação da irrigação na água
    const partIrrAgua = (irrigacao / aguaAplicada) * 100;

    //preço do leite
    const precoLeite =
      0.631922 * Math.pow(prodDiaria, 0.102383) +
      (-0.0132 * Math.pow(teorGordura, 2) + 0.1384 * teorGordura - 0.3089);

    //Receita total (R$/mês)
    const receitaTotalMes = prodDiaria * precoLeite * 30.4;

    //ML
    var ML = precoLeite - COT;
    var ml = this.currencyFormat(ML, 2);
    console.log('preco do leite', precoLeite);
    //ML Anual
    const MLAnual = ML * prodDiaria * 365;

    //Payback (Anos)
    var payback = investimentoTotal / MLAnual;
    var payb = this.currencyFormat(payback, 1);

    // Perda de receita com estresse
    var perdaReceitaEstresse = DPLAnual * precoLeite;
    var perdaRecEstresse = this.currencyFormat(perdaReceitaEstresse, 2);

    // Taxa de lotação
    const taxaLotacao = capaSuporte / area;
    var taxaLot = this.currencyFormat(taxaLotacao, 1);

    // TRCI
    var TRCI = ((ML * 365) / investimento) * 100;
    var trci = this.currencyFormat(TRCI, 1);

    //Receita por área
    var recArea = (receitaTotalMes * 12) / area;
    var receitaArea = this.currencyFormat(recArea, 2);

    console.log(typeof tenAguaSol);
    console.log('NDTdh, ', NDTdh)
    console.log('NDTv', NDTdv)
    console.log('NDTdeslocamento ', NDTdeslocamento)
    console.log('Consumo, ', consumo)
    console.log('consumo NDT', consumoNDT)

    return (
      <Background>
        <BackgroundValues>
          <ScrollView alwaysBounceVertical={false}>
            <ClimaValues>
              {this.state.refreshing ? (
                <ShimmerPlaceHolder style={styles.txtTitle} autoRun={true} />
              ) : (
                  <ValueTitle>Solo-Água-Planta-Animal</ValueTitle>
                )}
              <CardValues>
                <CardTextValues>
                  <CardTextVar>
                    {this.state.refreshing ? (
                      <ShimmerPlaceHolder
                        style={styles.txtValues}
                        autoRun={true}
                      />
                    ) : (
                        <TextVar>Tensão da água no solo (bar)</TextVar>)}
                  </CardTextVar>
                  <CardValuesVar>
                    {this.state.refreshing ? (
                      <ShimmerPlaceHolder
                        style={styles.txtValues}
                        autoRun={true}
                      />
                    ) : (
                        <ValuesVar>{!Number.isNaN(tenAguaSol) ? tenAguaSol : '0'}</ValuesVar>
                      )}
                  </CardValuesVar>
                </CardTextValues>
                <CardTextValues>
                  <CardTextVar>
                    {this.state.refreshing ? (
                      <ShimmerPlaceHolder
                        style={styles.txtValues}
                        autoRun={true}
                      />
                    ) : (
                        <TextVar>Produção de forragem (kg MV/m2)</TextVar>
                      )}
                  </CardTextVar>
                  <CardValuesVar>
                    {this.state.refreshing ? (
                      <ShimmerPlaceHolder
                        style={styles.txtValues}
                        autoRun={true}
                      />
                    ) : (
                        <ValuesVar>{prodForr || '0'}</ValuesVar>
                      )}
                  </CardValuesVar>
                </CardTextValues>
                <CardTextValues>
                  <CardTextVar>
                    {this.state.refreshing ? (
                      <ShimmerPlaceHolder
                        style={styles.txtValues}
                        autoRun={true}
                      />
                    ) : (
                        <TextVar>Capacidade de suporte (animais)</TextVar>
                      )}
                  </CardTextVar>
                  <CardValuesVar>
                    {this.state.refreshing ? (
                      <ShimmerPlaceHolder
                        style={styles.txtValues}
                        autoRun={true}
                      />
                    ) : (
                        <ValuesVar>{capaSup || '0'}</ValuesVar>
                      )}
                  </CardValuesVar>
                </CardTextValues>
                <CardTextValues>
                  <CardTextVar>
                    {this.state.refreshing ? (
                      <ShimmerPlaceHolder
                        style={styles.txtValues}
                        autoRun={true}
                      />
                    ) : (
                        <TextVar>Taxa de lotação (vacas/ha)</TextVar>
                      )}
                  </CardTextVar>
                  <CardValuesVar>
                    {this.state.refreshing ? (
                      <ShimmerPlaceHolder
                        style={styles.txtValues}
                        autoRun={true}
                      />
                    ) : (
                        <ValuesVar>{taxaLot || '0'}</ValuesVar>
                      )}
                  </CardValuesVar>
                </CardTextValues>
                <CardTextValues>
                  <CardTextVar>
                    {this.state.refreshing ? (
                      <ShimmerPlaceHolder
                        style={styles.txtValues}
                        autoRun={true}
                      />
                    ) : (
                        <TextVar>ITU</TextVar>
                      )}
                  </CardTextVar>
                  <CardValuesVar>
                    {this.state.refreshing ? (
                      <ShimmerPlaceHolder
                        style={styles.txtValues}
                        autoRun={true}
                      />
                    ) : (
                        <ValuesVar>{itu || '0'}</ValuesVar>
                      )}
                  </CardValuesVar>
                </CardTextValues>
                <CardTextValues>
                  <CardTextVar>
                    {this.state.refreshing ? (
                      <ShimmerPlaceHolder
                        style={styles.txtValues}
                        autoRun={true}
                      />
                    ) : (
                        <TextVar>DPL (L/vaca/dia)</TextVar>
                      )}
                  </CardTextVar>
                  <CardValuesVar>
                    {this.state.refreshing ? (
                      <ShimmerPlaceHolder
                        style={styles.txtValues}
                        autoRun={true}
                      />
                    ) : (
                        <ValuesVar>{dpl || '0'}</ValuesVar>
                      )}
                  </CardValuesVar>
                </CardTextValues>
                <CardTextValues>
                  <CardTextVar>
                    {this.state.refreshing ? (
                      <ShimmerPlaceHolder
                        style={styles.txtValues}
                        autoRun={true}
                      />
                    ) : (
                        <TextVar>Pegada hídrica (L H2O/L leite)</TextVar>
                      )}
                  </CardTextVar>
                  <CardValuesVar>
                    {this.state.refreshing ? (
                      <ShimmerPlaceHolder
                        style={styles.txtValues}
                        autoRun={true}
                      />
                    ) : (
                        <ValuesVar>{pegadaHid || '0'}</ValuesVar>
                      )}
                  </CardValuesVar>
                </CardTextValues>
              </CardValues>
            </ClimaValues>
            <AnimalValues>
              {this.state.refreshing ? (
                <ShimmerPlaceHolder style={styles.txtTitle} autoRun={true} />
              ) : (
                  <ValueTitle>Sistema-Custos-Resultado econômico</ValueTitle>
                )}
              <CardValues>
                <CardTextValues>
                  <CardTextVar>
                    {this.state.refreshing ? (
                      <ShimmerPlaceHolder
                        style={styles.txtValues}
                        autoRun={true}
                      />
                    ) : (
                        <TextVar>Produção diária (L/dia)</TextVar>
                      )}
                  </CardTextVar>
                  <CardValuesVar>
                    {this.state.refreshing ? (
                      <ShimmerPlaceHolder
                        style={styles.txtValues}
                        autoRun={true}
                      />
                    ) : (
                        <ValuesVar>{prodDia || '0'}</ValuesVar>
                      )}
                  </CardValuesVar>
                </CardTextValues>
                <CardTextValues>
                  <CardTextVar>
                    {this.state.refreshing ? (
                      <ShimmerPlaceHolder
                        style={styles.txtValues}
                        autoRun={true}
                      />
                    ) : (
                        <TextVar>Produção de leite (L/ha/dia)</TextVar>
                      )}
                  </CardTextVar>
                  <CardValuesVar>
                    {this.state.refreshing ? (
                      <ShimmerPlaceHolder
                        style={styles.txtValues}
                        autoRun={true}
                      />
                    ) : (
                        <ValuesVar>{prodLeiDia || '0'}</ValuesVar>
                      )}
                  </CardValuesVar>
                </CardTextValues>
                <CardTextValues>
                  <CardTextVar>
                    {this.state.refreshing ? (
                      <ShimmerPlaceHolder
                        style={styles.txtValues}
                        autoRun={true}
                      />
                    ) : (
                        <TextVar>Produção de leite (L/ha/ano) </TextVar>
                      )}
                  </CardTextVar>
                  <CardValuesVar>
                    {this.state.refreshing ? (
                      <ShimmerPlaceHolder
                        style={styles.txtValues}
                        autoRun={true}
                      />
                    ) : (
                        <ValuesVar> {prodLeiAno || '0'}</ValuesVar>
                      )}
                  </CardValuesVar>
                </CardTextValues>
                <CardTextValues>
                  <CardTextVar>
                    {this.state.refreshing ? (
                      <ShimmerPlaceHolder
                        style={styles.txtValues}
                        autoRun={true}
                      />
                    ) : (
                        <TextVar>Perda receita estresse (R$/ano)</TextVar>
                      )}
                  </CardTextVar>
                  <CardValuesVar>
                    {this.state.refreshing ? (
                      <ShimmerPlaceHolder
                        style={styles.txtValues}
                        autoRun={true}
                      />
                    ) : (
                        <ValuesVar>{perdaRecEstresse || '0'}</ValuesVar>
                      )}
                  </CardValuesVar>
                </CardTextValues>
                <CardTextValues>
                  <CardTextVar>
                    {this.state.refreshing ? (
                      <ShimmerPlaceHolder
                        style={styles.txtValues}
                        autoRun={true}
                      />
                    ) : (
                        <TextVar>COE (R$/L)</TextVar>
                      )}
                  </CardTextVar>
                  <CardValuesVar>
                    {this.state.refreshing ? (
                      <ShimmerPlaceHolder
                        style={styles.txtValues}
                        autoRun={true}
                      />
                    ) : (
                        <ValuesVar>{coe.toFixed(2) || '0'}</ValuesVar>
                      )}
                  </CardValuesVar>
                </CardTextValues>
                <CardTextValues>
                  <CardTextVar>
                    {this.state.refreshing ? (
                      <ShimmerPlaceHolder
                        style={styles.txtValues}
                        autoRun={true}
                      />
                    ) : (
                        <TextVar>COT (R$/L)</TextVar>
                      )}
                  </CardTextVar>
                  <CardValuesVar>
                    {this.state.refreshing ? (
                      <ShimmerPlaceHolder
                        style={styles.txtValues}
                        autoRun={true}
                      />
                    ) : (
                        <ValuesVar>{cot || '0'}</ValuesVar>
                      )}
                  </CardValuesVar>
                </CardTextValues>
                <CardTextValues>
                  <CardTextVar>
                    {this.state.refreshing ? (
                      <ShimmerPlaceHolder
                        style={styles.txtValues}
                        autoRun={true}
                      />
                    ) : (
                        <TextVar>ML (R$/L)</TextVar>
                      )}
                  </CardTextVar>
                  <CardValuesVar>
                    {this.state.refreshing ? (
                      <ShimmerPlaceHolder
                        style={styles.txtValues}
                        autoRun={true}
                      />
                    ) : (
                        <ValuesVar>{ml || '0'}</ValuesVar>
                      )}
                  </CardValuesVar>
                </CardTextValues>
                <CardTextValues>
                  <CardTextVar>
                    {this.state.refreshing ? (
                      <ShimmerPlaceHolder
                        style={styles.txtValues}
                        autoRun={true}
                      />
                    ) : (
                        <TextVar>Receita por área (R$/ha/ano)</TextVar>
                      )}
                  </CardTextVar>
                  <CardValuesVar>
                    {this.state.refreshing ? (
                      <ShimmerPlaceHolder
                        style={styles.txtValues}
                        autoRun={true}
                      />
                    ) : (
                        <ValuesVar>{receitaArea || '0'}</ValuesVar>
                      )}
                  </CardValuesVar>
                </CardTextValues>
                <CardTextValues>
                  <CardTextVar>
                    {this.state.refreshing ? (
                      <ShimmerPlaceHolder
                        style={styles.txtValues}
                        autoRun={true}
                      />
                    ) : (
                        <TextVar>TRCI (%a.a.) </TextVar>
                      )}
                  </CardTextVar>
                  <CardValuesVar>
                    {this.state.refreshing ? (
                      <ShimmerPlaceHolder
                        style={styles.txtValues}
                        autoRun={true}
                      />
                    ) : (
                        <ValuesVar>{trci || '0'}</ValuesVar>
                      )}
                  </CardValuesVar>
                </CardTextValues>
                <CardTextValues>
                  <CardTextVar>
                    {this.state.refreshing ? (
                      <ShimmerPlaceHolder
                        style={styles.txtValues}
                        autoRun={true}
                      />
                    ) : (
                        <TextVar>Payback (anos)</TextVar>
                      )}
                  </CardTextVar>
                  <CardValuesVar>
                    {this.state.refreshing ? (
                      <ShimmerPlaceHolder
                        style={styles.txtValues}
                        autoRun={true}
                      />
                    ) : (
                        <ValuesVar>{payb || '0'}</ValuesVar>
                      )}
                  </CardValuesVar>
                </CardTextValues>
                <View style={{ height: 30 }} />
              </CardValues>
            </AnimalValues>
          </ScrollView>
        </BackgroundValues>
      </Background>
    );
  }
}

const styles = StyleSheet.create({
  btnSimular: {
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  txtTitle: {
    borderRadius: normalize(8),
    height: normalize(20),
    top: normalize(10),
  },
  txtValues: {
    borderRadius: normalize(8),
    height: normalize(15),
  },
});
