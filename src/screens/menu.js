import React, {Component} from 'react';
import normalize from 'react-native-normalize'
import {StackActions} from '@react-navigation/native';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import {
  Text,
  View,
  StyleSheet,
  AsyncStorage,
  BackHandler,
  ActivityIndicator,
} from 'react-native';
import {
  Background,
  TextTouchable,
  AreaValues,
  EconomiaValues,
  ClimaValues,
  AnimalValues,
  BtnSimular,
  ValueTitle,
  CardValues,
  CardTextValues,
  ScrollView,
  BtnEditar,
  TextBtnEditar,
  CardTextVar,
  TextVar,
  ValuesVar,
  BackgroundValues,
  CardValuesVar,
  CardBtnEditar,
} from '../styles/styleMenu';

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataClima: {},
      dataArea: {},
      dataAnimal: {},
      dataEconomia: {},
      refreshing: true,
      visible: false,
      userImageVisible: false,
      postImageVisible: false
    };
  }

  async parametros() {
    const areaData = await AsyncStorage.getItem('Agua');
    this.setState({refreshing: true});

    if (areaData) {
      const value = JSON.parse(areaData);
      this.setState({
        ...this.state,
        dataArea: value,
        refreshing: false,
      });
    } else {
      this.setState({refreshing: false});
    }

    const economiaData = await AsyncStorage.getItem('Economia');
    if (economiaData) {
      const value = JSON.parse(economiaData);
      this.setState({
        ...this.state,
        dataEconomia: value,
        refreshing: false
      });
    } else {
      this.setState({refreshing: false})
    }

    const climaData = await AsyncStorage.getItem('Clima');
    if (climaData) {
      const value = JSON.parse(climaData);
      this.setState({
        ...this.state,
        dataClima: value,
        refreshing: false
      });
    } else{
      this.setState({refreshing: false})
    }

    const animalData = await AsyncStorage.getItem('Animal');
    if (animalData) {
      const value = JSON.parse(animalData);
      this.setState({
        ...this.state,
        dataAnimal: value,
        refreshing: false
      });
    } else{
      this.setState({refreshing: false})
    }
  }

  async componentDidMount() {
    this.parametros();
  }

  handleNavigateModelo() {
    const {dispatch} = this.props.navigation;
    dispatch({
      ...StackActions.replace('Modelo'),
    });
  }

  onRefresh = () => {
    this.setState({...this.state, refreshing: true});
    this.parametros().then(() => {
      this.setState({refreshing: false});
    });
  };

  btnSimular(){
    this.handleNavigateModelo()
  }
  
  render() {
    const {navigate} = this.props.navigation;
    const {dataArea} = this.state;
    const {dataEconomia} = this.state;
    const {dataClima} = this.state;
    console.log(typeof dataArea.area)
    const {dataAnimal} = this.state;
    const btnEditar = 'Editar';


    return (
      <Background>
          <BackgroundValues>
            <ScrollView
              decelerationRate={1.2}
              nestedScrollEnabled={true}
              removeClippedSubviews={true}>

              <AreaValues style={{elevation: 5}}>
              {this.state.refreshing ? (
          <ShimmerPlaceHolder style = {styles.txtTitle} autoRun= {true} />
        ) : (
                <ValueTitle>Área</ValueTitle>)}
                <CardValues>

                    <CardTextValues>
                      <CardTextVar>
                      {this.state.refreshing ? (
          <ShimmerPlaceHolder style = {styles.txtValues} autoRun= {true} />
        ) : (
                        <TextVar>Área (ha)</TextVar>)}
                      </CardTextVar>
                      <CardValuesVar>
                      {this.state.refreshing ? (
          <ShimmerPlaceHolder style = {styles.txtValues} autoRun= {true} />
        ) : (
                        <ValuesVar>{dataArea.area || '0'}</ValuesVar>)}
                      </CardValuesVar>
                    </CardTextValues>
                  <CardTextValues>
                    
                    <CardTextVar>
                    {this.state.refreshing ? (
          <ShimmerPlaceHolder style = {styles.txtValues} autoRun= {true} />
        ) : (
                      <TextVar>Número de Piquetes (unid)</TextVar>)}
                    </CardTextVar>
                    <CardValuesVar>
                    {this.state.refreshing ? (
          <ShimmerPlaceHolder style = {styles.txtValues} autoRun= {true} />
        ) : (
                      <ValuesVar>{dataArea.numPiq || '0'}</ValuesVar>)}
                    </CardValuesVar>
                  </CardTextValues>
                </CardValues>
                <CardBtnEditar>
                  <BtnEditar
                    hitSlop = {{top: 20, bottom: 20, left: 50, right: 50 }}
                    onPress={() => {
                      navigate('Area');
                    }}>
                    <TextBtnEditar>{btnEditar}</TextBtnEditar>
                  </BtnEditar>
                </CardBtnEditar>
              </AreaValues>
              <EconomiaValues>
              {this.state.refreshing ? (
          <ShimmerPlaceHolder style = {styles.txtTitle} autoRun= {true} />
        ) : (
                <ValueTitle>Economia</ValueTitle>)}
                <CardValues>
                  <CardTextValues>
                    <CardTextVar>
                    {this.state.refreshing ? (
          <ShimmerPlaceHolder style = {styles.txtValues} autoRun= {true} />
        ) : (
                      <TextVar>Investimento por L (R$/L)</TextVar>)}
                    </CardTextVar>
                    <CardValuesVar>
                    {this.state.refreshing ? (
          <ShimmerPlaceHolder style = {styles.txtValues} autoRun= {true} />
        ) : (
                      <ValuesVar>{dataEconomia.invest || '0'}</ValuesVar>)}
                    </CardValuesVar>
                  </CardTextValues>
                  <CardTextValues>
                    <CardTextVar>
                    {this.state.refreshing ? (
          <ShimmerPlaceHolder style = {styles.txtValues} autoRun= {true} />
        ) : (
                      <TextVar>Renda familiar (R$/mês)</TextVar>)}
                    </CardTextVar>
                    <CardValuesVar>
                    {this.state.refreshing ? (
          <ShimmerPlaceHolder style = {styles.txtValues} autoRun= {true} />
        ) : (
                      <ValuesVar>{dataEconomia.renFam || '0'}</ValuesVar>)}
                    </CardValuesVar>
                  </CardTextValues>
                  <CardTextValues>
                    <CardTextVar>
                    {this.state.refreshing ? (
          <ShimmerPlaceHolder style = {styles.txtValues} autoRun= {true} />
        ) : (
                      <TextVar>Taxa de depreciação (%a.a.)</TextVar>)}
                    </CardTextVar>
                    <CardValuesVar>
                    {this.state.refreshing ? (
          <ShimmerPlaceHolder style = {styles.txtValues} autoRun= {true} />
        ) : (
                      <ValuesVar>{dataEconomia.taxDep || '0'}</ValuesVar>)}
                    </CardValuesVar>
                  </CardTextValues>
                </CardValues>
                <CardBtnEditar>
                  <BtnEditar
                    hitSlop = {{top: 20, bottom: 20, left: 50, right: 50 }}
                    onPress={() => {
                      navigate('Economia');
                    }}>
                    <TextBtnEditar>{btnEditar}</TextBtnEditar>
                  </BtnEditar>
                </CardBtnEditar>
              </EconomiaValues>
              <ClimaValues>
              {this.state.refreshing ? (
          <ShimmerPlaceHolder style = {styles.txtTitle} autoRun= {true} />
        ) : (
                <ValueTitle>Clima e Solo</ValueTitle>)}
                <CardValues>
                  <CardTextValues>
                    <CardTextVar>
                    {this.state.refreshing ? (
          <ShimmerPlaceHolder style = {styles.txtValues} autoRun= {true} />
        ) : (
                      <TextVar>Precipitação (mm)</TextVar>)}
                    </CardTextVar>
                    <CardValuesVar>{this.state.refreshing ? (
          <ShimmerPlaceHolder style = {styles.txtValues} autoRun= {true} />
        ) : (
                      <ValuesVar>{dataClima.prec || '0'}</ValuesVar>)}
                    </CardValuesVar>
                  </CardTextValues>
                  <CardTextValues>
                    <CardTextVar>
                    {this.state.refreshing ? (
          <ShimmerPlaceHolder style = {styles.txtValues} autoRun= {true} />
        ) : (
                      <TextVar>Temperatura máxima (ºC)</TextVar>)}
                    </CardTextVar>
                    <CardValuesVar>
                    {this.state.refreshing ? (
          <ShimmerPlaceHolder style = {styles.txtValues} autoRun= {true} />
        ) : (
                      <ValuesVar>{dataClima.tempMax || '0'}</ValuesVar>)}
                    </CardValuesVar>
                  </CardTextValues>
                  <CardTextValues>
                    <CardTextVar>
                    {this.state.refreshing ? (
          <ShimmerPlaceHolder style = {styles.txtValues} autoRun= {true} />
        ) : (
                      <TextVar>Temperatura mínima (ºC)</TextVar>)}
                    </CardTextVar>
                    <CardValuesVar>
                    {this.state.refreshing ? (
          <ShimmerPlaceHolder style = {styles.txtValues} autoRun= {true} />
        ) : (
                      <ValuesVar>{dataClima.tempMin || '0'}</ValuesVar>)}
                    </CardValuesVar>
                  </CardTextValues>
                  <CardTextValues>
                    <CardTextVar>
                    {this.state.refreshing ? (
          <ShimmerPlaceHolder style = {styles.txtValues} autoRun= {true} />
        ) : (
                      <TextVar>Umidade relativa (%)</TextVar>)}
                    </CardTextVar>
                    <CardValuesVar>
                    {this.state.refreshing ? (
          <ShimmerPlaceHolder style = {styles.txtValues} autoRun= {true} />
        ) : (
                      <ValuesVar>{dataClima.umidRel || '0'}</ValuesVar>)}
                    </CardValuesVar>
                  </CardTextValues>
                  <CardTextValues>
                    <CardTextVar>
                    {this.state.refreshing ? (
          <ShimmerPlaceHolder style = {styles.txtValues} autoRun= {true} />
        ) : (
                      <TextVar>Velocidade do Vento (m/s)</TextVar>)}
                    </CardTextVar>
                    <CardValuesVar>
                    {this.state.refreshing ? (
          <ShimmerPlaceHolder style = {styles.txtValues} autoRun= {true} />
        ) : (
                      <ValuesVar>{dataClima.velVen || '0'}</ValuesVar>)}
                    </CardValuesVar>
                  </CardTextValues>
                  <CardTextValues>
                    <CardTextVar>
                    {this.state.refreshing ? (
          <ShimmerPlaceHolder style = {styles.txtValues} autoRun= {true} />
        ) : (
                      <TextVar>Dose de N (dose)</TextVar>)}
                    </CardTextVar>
                    <CardValuesVar>
                    {this.state.refreshing ? (
          <ShimmerPlaceHolder style = {styles.txtValues} autoRun= {true} />
        ) : (
                      <ValuesVar>{dataClima.doseN || '0'}</ValuesVar>)}
                    </CardValuesVar>
                  </CardTextValues>
                  <CardTextValues>
                    <CardTextVar>
                    {this.state.refreshing ? (
          <ShimmerPlaceHolder style = {styles.txtValues} autoRun= {true} />
        ) : (
                      <TextVar>Água e outros usos (L/mês)</TextVar>)}
                    </CardTextVar>
                    <CardValuesVar>
                    {this.state.refreshing ? (
          <ShimmerPlaceHolder style = {styles.txtValues} autoRun= {true} />
        ) : (
                      <ValuesVar>{dataClima.aguaUso || '0'}</ValuesVar>)}
                    </CardValuesVar>
                  </CardTextValues>
                </CardValues>
                <CardBtnEditar>
                  <BtnEditar
                    hitSlop = {{top: 20, bottom: 20, left: 50, right: 50 }}
                    onPress={() => {
                      navigate('Clima');
                    }}>
                    <TextBtnEditar>{btnEditar}</TextBtnEditar>
                  </BtnEditar>
                </CardBtnEditar>
              </ClimaValues>
              <AnimalValues>
              {this.state.refreshing ? (
          <ShimmerPlaceHolder style = {styles.txtTitle} autoRun= {true} />
        ) : (
                <ValueTitle>Animal</ValueTitle>)}
                <CardValues>
                  <CardTextValues>
                    <CardTextVar>
                    {this.state.refreshing ? (
          <ShimmerPlaceHolder style = {styles.txtValues} autoRun= {true} />
        ) : (
                      <TextVar>Peso corporal (Kg)</TextVar>)}
                    </CardTextVar>
                    <CardValuesVar>
                    {this.state.refreshing ? (
          <ShimmerPlaceHolder style = {styles.txtValues} autoRun= {true} />
        ) : (
                      <ValuesVar>{dataAnimal.pesoCorp || '0'}</ValuesVar>)}
                    </CardValuesVar>
                  </CardTextValues>
                  <CardTextValues>
                    <CardTextVar>
                    {this.state.refreshing ? (
          <ShimmerPlaceHolder style = {styles.txtValues} autoRun= {true} />
        ) : (
                      <TextVar>Produção de leite (L/vaca/dia)</TextVar>)}
                    </CardTextVar>
                    <CardValuesVar>
                    {this.state.refreshing ? (
          <ShimmerPlaceHolder style = {styles.txtValues} autoRun= {true} />
        ) : (
                      <ValuesVar>{dataAnimal.prodLei || '0'}</ValuesVar>)}
                    </CardValuesVar>
                  </CardTextValues>
                  <CardTextValues>
                    <CardTextVar>
                    {this.state.refreshing ? (
          <ShimmerPlaceHolder style = {styles.txtValues} autoRun= {true} />
        ) : (
                      <TextVar>Teor de gordura no leite (%)</TextVar>)}
                    </CardTextVar>
                    <CardValuesVar>
                    {this.state.refreshing ? (
          <ShimmerPlaceHolder style = {styles.txtValues} autoRun= {true} />
        ) : (
                      <ValuesVar>{dataAnimal.teorGord || '0'}</ValuesVar>)}
                    </CardValuesVar>
                  </CardTextValues>
                  <CardTextValues>
                    <CardTextVar>
                    {this.state.refreshing ? (
          <ShimmerPlaceHolder style = {styles.txtValues} autoRun= {true} />
        ) : (
                      <TextVar>Teor de PB no leite (%)</TextVar>)}
                    </CardTextVar>
                    <CardValuesVar>
                    {this.state.refreshing ? (
          <ShimmerPlaceHolder style = {styles.txtValues} autoRun= {true} />
        ) : (
                      <ValuesVar>{dataAnimal.teorPB || '0'}</ValuesVar>)}
                    </CardValuesVar>
                  </CardTextValues>
                  <CardTextValues>
                    <CardTextVar>
                    {this.state.refreshing ? (
          <ShimmerPlaceHolder style = {styles.txtValues} autoRun= {true} />
        ) : (
                      <TextVar>Deslocamento horizontal (m)</TextVar>)}
                    </CardTextVar>
                    <CardValuesVar>
                    {this.state.refreshing ? (
          <ShimmerPlaceHolder style = {styles.txtValues} autoRun= {true} />
        ) : (
                      <ValuesVar>{dataAnimal.deslHor || '0'}</ValuesVar>)}
                    </CardValuesVar>
                  </CardTextValues>
                  <CardTextValues>
                    <CardTextVar>
                    {this.state.refreshing ? (
          <ShimmerPlaceHolder style = {styles.txtValues} autoRun= {true} />
        ) : (
                      <TextVar>Deslocamento vertical (m)</TextVar>)}
                    </CardTextVar>
                    <CardValuesVar>
                    {this.state.refreshing ? (
          <ShimmerPlaceHolder style = {styles.txtValues} autoRun= {true} />
        ) : (
                      <ValuesVar>{dataAnimal.deslVer || '0'}</ValuesVar>)}
                    </CardValuesVar>
                  </CardTextValues>
                  <CardTextValues>
                    <CardTextVar>
                    {this.state.refreshing ? (
          <ShimmerPlaceHolder style = {styles.txtValues} autoRun= {true} />
        ) : (
                      <TextVar>Vacas em lactação (%)</TextVar>)}
                    </CardTextVar>
                    <CardValuesVar>
                    {this.state.refreshing ? (
          <ShimmerPlaceHolder style = {styles.txtValues} autoRun= {true} />
        ) : (
                      <ValuesVar>{dataAnimal.vacLact || '0'}</ValuesVar>)}
                    </CardValuesVar>
                  </CardTextValues>
                </CardValues>
                <CardBtnEditar>
                  <BtnEditar
                    hitSlop = {{top: 20, bottom: 20, left: 50, right: 50 }}
                    onPress={() => {
                      navigate('Animal');
                    }}>
                    <TextBtnEditar>{btnEditar}</TextBtnEditar>
                  </BtnEditar>
                </CardBtnEditar>
              </AnimalValues>
            </ScrollView>
          </BackgroundValues>
        <BtnSimular
          hitSlop = {{top: 20, bottom: 20, left: 50, right: 50 }}
          style={styles.btnSimular}
          onPress={() => navigate('Modelo')}>
          <TextTouchable>Simular</TextTouchable>
        </BtnSimular>
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
    height: normalize(25),
    top: normalize(10),
    borderRadius: normalize(12)
  },
  txtValues: {
    height: normalize(15),
    top: normalize(5),
    borderRadius: normalize(10)
  }
});