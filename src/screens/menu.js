import React, {Component} from 'react';
import {StackActions} from '@react-navigation/native';
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
    console.log(dataArea)
    const {dataAnimal} = this.state;
    const btnEditar = 'Editar Dados';

    return (
      <Background>
        {this.state.refreshing ? (
          <ActivityIndicator color="#fff" size={25} />
        ) : (
          <BackgroundValues>
            <ScrollView
              decelerationRate={1.2}
              nestedScrollEnabled={true}
              removeClippedSubviews={true}>
              <AreaValues style={{elevation: 5}}>
                <ValueTitle>Área</ValueTitle>
                <CardValues>
                  <CardTextValues>
                    <CardTextVar>
                      <TextVar>Área (ha)</TextVar>
                    </CardTextVar>
                    <CardValuesVar>
                      <ValuesVar>{dataArea.area || '0'}</ValuesVar>
                    </CardValuesVar>
                  </CardTextValues>
                  <CardTextValues>
                    <CardTextVar>
                      <TextVar>Número de Piquetes (unid)</TextVar>
                    </CardTextVar>
                    <CardValuesVar>
                      <ValuesVar>{dataArea.numPiq || '0'}</ValuesVar>
                    </CardValuesVar>
                  </CardTextValues>
                </CardValues>
                <CardBtnEditar>
                  <BtnEditar
                    onPress={() => {
                      navigate('Area');
                    }}>
                    <TextBtnEditar>Editar Campos</TextBtnEditar>
                  </BtnEditar>
                </CardBtnEditar>
              </AreaValues>
              <EconomiaValues>
                <ValueTitle>Economia</ValueTitle>
                <CardValues>
                  <CardTextValues>
                    <CardTextVar>
                      <TextVar>Investimento por L (R$/L)</TextVar>
                    </CardTextVar>
                    <CardValuesVar>
                      <ValuesVar>{dataEconomia.invest || '0'}</ValuesVar>
                    </CardValuesVar>
                  </CardTextValues>
                  <CardTextValues>
                    <CardTextVar>
                      <TextVar>Renda familiar (R$/mês)</TextVar>
                    </CardTextVar>
                    <CardValuesVar>
                      <ValuesVar>{dataEconomia.renFam || '0'}</ValuesVar>
                    </CardValuesVar>
                  </CardTextValues>
                  <CardTextValues>
                    <CardTextVar>
                      <TextVar>Taxa de depreciação (%a.a.)</TextVar>
                    </CardTextVar>
                    <CardValuesVar>
                      <ValuesVar>{dataEconomia.taxDep || '0'}</ValuesVar>
                    </CardValuesVar>
                  </CardTextValues>
                </CardValues>
                <CardBtnEditar>
                  <BtnEditar
                    onPress={() => {
                      navigate('Economia');
                    }}>
                    <TextBtnEditar>Editar Campos</TextBtnEditar>
                  </BtnEditar>
                </CardBtnEditar>
              </EconomiaValues>
              <ClimaValues>
                <ValueTitle>Clima e Solo</ValueTitle>
                <CardValues>
                  <CardTextValues>
                    <CardTextVar>
                      <TextVar>Precipitação (mm)</TextVar>
                    </CardTextVar>
                    <CardValuesVar>
                      <ValuesVar>{dataClima.prec || '0'}</ValuesVar>
                    </CardValuesVar>
                  </CardTextValues>
                  <CardTextValues>
                    <CardTextVar>
                      <TextVar>Temperatura máxima (ºC)</TextVar>
                    </CardTextVar>
                    <CardValuesVar>
                      <ValuesVar>{dataClima.tempMax || '0'}</ValuesVar>
                    </CardValuesVar>
                  </CardTextValues>
                  <CardTextValues>
                    <CardTextVar>
                      <TextVar>Temperatura mínima (ºC)</TextVar>
                    </CardTextVar>
                    <CardValuesVar>
                      <ValuesVar>{dataClima.tempMin || '0'}</ValuesVar>
                    </CardValuesVar>
                  </CardTextValues>
                  <CardTextValues>
                    <CardTextVar>
                      <TextVar>Umidade relativa (%)</TextVar>
                    </CardTextVar>
                    <CardValuesVar>
                      <ValuesVar>{dataClima.umidRel || '0'}</ValuesVar>
                    </CardValuesVar>
                  </CardTextValues>
                  <CardTextValues>
                    <CardTextVar>
                      <TextVar>Velocidade do Vento (m/s)</TextVar>
                    </CardTextVar>
                    <CardValuesVar>
                      <ValuesVar>{dataClima.velVen || '0'}</ValuesVar>
                    </CardValuesVar>
                  </CardTextValues>
                  <CardTextValues>
                    <CardTextVar>
                      <TextVar>Dose de N (dose)</TextVar>
                    </CardTextVar>
                    <CardValuesVar>
                      <ValuesVar>{dataClima.doseN || '0'}</ValuesVar>
                    </CardValuesVar>
                  </CardTextValues>
                  <CardTextValues>
                    <CardTextVar>
                      <TextVar>Água e outros usos (L/mês)</TextVar>
                    </CardTextVar>
                    <CardValuesVar>
                      <ValuesVar>{dataClima.aguaUso || '0'}</ValuesVar>
                    </CardValuesVar>
                  </CardTextValues>
                </CardValues>
                <CardBtnEditar>
                  <BtnEditar
                    onPress={() => {
                      navigate('Clima');
                    }}>
                    <TextBtnEditar>Editar Campos</TextBtnEditar>
                  </BtnEditar>
                </CardBtnEditar>
              </ClimaValues>
              <AnimalValues>
                <ValueTitle>Animal</ValueTitle>
                <CardValues>
                  <CardTextValues>
                    <CardTextVar>
                      <TextVar>Peso corporal (Kg)</TextVar>
                    </CardTextVar>
                    <CardValuesVar>
                      <ValuesVar>{dataAnimal.pesoCorp || '0'}</ValuesVar>
                    </CardValuesVar>
                  </CardTextValues>
                  <CardTextValues>
                    <CardTextVar>
                      <TextVar>Produção de leite (L/vaca/dia)</TextVar>
                    </CardTextVar>
                    <CardValuesVar>
                      <ValuesVar>{dataAnimal.prodLei || '0'}</ValuesVar>
                    </CardValuesVar>
                  </CardTextValues>
                  <CardTextValues>
                    <CardTextVar>
                      <TextVar>Teor de gordura no leite (%)</TextVar>
                    </CardTextVar>
                    <CardValuesVar>
                      <ValuesVar>{dataAnimal.teorGord || '0'}</ValuesVar>
                    </CardValuesVar>
                  </CardTextValues>
                  <CardTextValues>
                    <CardTextVar>
                      <TextVar>Teor de PB no leite (%)</TextVar>
                    </CardTextVar>
                    <CardValuesVar>
                      <ValuesVar>{dataAnimal.teorPB || '0'}</ValuesVar>
                    </CardValuesVar>
                  </CardTextValues>
                  <CardTextValues>
                    <CardTextVar>
                      <TextVar>Deslocamento horizontal (m)</TextVar>
                    </CardTextVar>
                    <CardValuesVar>
                      <ValuesVar>{dataAnimal.deslHor || '0'}</ValuesVar>
                    </CardValuesVar>
                  </CardTextValues>
                  <CardTextValues>
                    <CardTextVar>
                      <TextVar>Deslocamento vertical (m)</TextVar>
                    </CardTextVar>
                    <CardValuesVar>
                      <ValuesVar>{dataAnimal.deslVer || '0'}</ValuesVar>
                    </CardValuesVar>
                  </CardTextValues>
                  <CardTextValues>
                    <CardTextVar>
                      <TextVar>Vacas em lactação (%)</TextVar>
                    </CardTextVar>
                    <CardValuesVar>
                      <ValuesVar>{dataAnimal.vacLact || '0'}</ValuesVar>
                    </CardValuesVar>
                  </CardTextValues>
                </CardValues>
                <CardBtnEditar>
                  <BtnEditar
                    onPress={() => {
                      navigate('Animal');
                    }}>
                    <TextBtnEditar>Editar Campos</TextBtnEditar>
                  </BtnEditar>
                </CardBtnEditar>
              </AnimalValues>
            </ScrollView>
          </BackgroundValues>
        )}
        <BtnSimular
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
});