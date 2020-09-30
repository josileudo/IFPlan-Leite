import React, { Component } from 'react';
import { StackActions } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import {
  View,
  KeyboardAvoidingView,
  ActivityIndicator,
} from 'react-native';
import {
  Background,
  CardLogo,
  CardInfo,
  TextInfo,
  TextAnu,
  CardInput,
  ScrollView,
  BtnSalvar,
  TextEnviar,
} from '../styles/styleInfor';
import styles from '../styles/stylesheet';
import { TextInputMask } from 'react-native-masked-text';
import Icon from 'react-native-vector-icons/AntDesign';
Icon.loadFont();

const name = 'Clima e Solo';

export default class Clima extends Component {
  constructor() {
    super();
    this.state = {
      prec: '0',
      tempMax: '0',
      tempMin: '0',
      umidRel: '0',
      velVen: '0',
      doseN: '0',
      aguaUso: '0',
      refreshing: false,
    };
  }

  changePrec(prec) {
    this.setState({ ...this.state, prec });
  }
  changeTempMax(tempMax) {
    this.setState({ ...this.state, tempMax });
  }
  changeTempMin(tempMin) {
    this.setState({ ...this.state, tempMin });
  }
  changeUmidRel(umidRel) {
    this.setState({ ...this.state, umidRel });
  }
  changeVelVen(velVen) {
    this.setState({ ...this.state, velVen });
  }
  changeDoseN(doseN) {
    this.setState({ ...this.state, doseN });
  }
  changeAguaUso(aguaUso) {
    this.setState({ ...this.state, aguaUso });
  }

  async dados() {
    const Clima = await AsyncStorage.getItem('Clima');
    if (Clima) {
      const value = JSON.parse(Clima);
      this.setState({ value });
      this.setState({ prec: value.prec });
      this.setState({ tempMax: value.tempMax });
      this.setState({ tempMin: value.tempMin });
      this.setState({ umidRel: value.umidRel });
      this.setState({ velVen: value.velVen });
      this.setState({ doseN: value.doseN });
      this.setState({ aguaUso: value.aguaUso });
    }
  }
  componentDidMount() {
    this.dados();
  }

  handleNavigateMenu() {
    const { dispatch } = this.props.navigation;

    dispatch({
      ...StackActions.replace('Menu'),
    });
  }

  _onRefresh = () => {
    this.setState({ refreshing: true });
    this.dados().then(() => {
      this.setState({ refreshing: false });
    });
  };

  async buttonCheck() {
    if (
      this.state.prec &&
      this.state.tempMax &&
      this.state.tempMin &&
      this.state.umidRel &&
      this.state.velVen &&
      this.state.doseN &&
      this.state.aguaUso !== ''
    ) {
      await AsyncStorage.setItem(
        'Clima',
        JSON.stringify({
          prec: this.state.prec,
          tempMax: this.state.tempMax,
          tempMin: this.state.tempMin,
          umidRel: this.state.umidRel,
          velVen: this.state.velVen,
          doseN: this.state.doseN,
          aguaUso: this.state.aguaUso,
        }),
      ).then(this.handleNavigateMenu());
      this._onRefresh();
    } else {
      alert('Preencha todos os campos');
      console.log('Preencher campos');
    }
  }

  render() {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' || 'android' ? 'padding' : null}
        number={50}
        style={{ flex: 1 }}>
        {this.state.refreshing ? (
          <ActivityIndicator color="#ffff" size={25} />
        ) : (
            <Background>
              <CardLogo>
                <TextInfo>Inserir dados</TextInfo>
              </CardLogo>
              <ScrollView alwaysBounceVertical={false}>
                <CardInfo>
                  <CardInput>
                    <TextAnu>Precipitação (mm/dia)</TextAnu>
                    <TextInputMask
                      type={'money'}
                      value={this.state.prec}
                      options={{
                        precision: 2,
                        separator: ',',
                        delimiter: '.',
                        unit: '',
                        suffixUnit: '',
                      }}
                      style={styles.input}
                      placeholder="0,00"
                      placeholderTextColor="rgba(34, 159, 134, 0.32)"
                      onChangeText={(precipitacao) => {
                        this.changePrec(precipitacao);
                      }}
                      returnKeyType={'next'}
                      onSubmitEditing={() => {
                        this.field1.focus();
                      }}
                      blurOnSubmit={false}></TextInputMask>
                  </CardInput>
                  <CardInput>
                    <TextAnu>Temperatura máxima (ºC)</TextAnu>
                    <TextInputMask
                      type={'money'}
                      options={{
                        precision: 1,
                        separator: ',',
                        delimiter: '.',
                        unit: '',
                        suffixUnit: '',
                      }}
                      style={styles.input}
                      value={this.state.tempMax}
                      placeholder="0,00"
                      placeholderTextColor="rgba(34, 159, 134, 0.32)"
                      onChangeText={(tempMaxima) => {
                        this.changeTempMax(tempMaxima);
                      }}
                      refInput={(input) => {
                        this.field1 = input;
                      }}
                      returnKeyType="next"
                      onSubmitEditing={() => {
                        this.field2.focus();
                      }}
                      blurOnSubmit={false}></TextInputMask>
                  </CardInput>
                  <CardInput>
                    <TextAnu>Temperatura mínima (ºC)</TextAnu>
                    <TextInputMask
                      type={'money'}
                      options={{
                        precision: 1,
                        separator: ',',
                        delimiter: '.',
                        unit: '',
                        suffixUnit: '',
                      }}
                      style={styles.input}
                      placeholder="0,00"
                      value={this.state.tempMin}
                      placeholderTextColor="rgba(34, 159, 134, 0.32)"
                      onChangeText={(tempMinima) => {
                        this.changeTempMin(tempMinima);
                      }}
                      returnKeyType="next"
                      refInput={(input) => {
                        this.field2 = input;
                      }}
                      onSubmitEditing={() => {
                        this.field3.focus();
                      }}
                      blurOnSubmit={false}></TextInputMask>
                  </CardInput>
                  <CardInput>
                    <TextAnu>Umidade Relativa (%)</TextAnu>
                    <TextInputMask
                      type={'money'}
                      options={{
                        precision: 1,
                        separator: ',',
                        delimiter: '.',
                        unit: '',
                        suffixUnit: '',
                      }}
                      style={styles.input}
                      placeholder="0,00"
                      value={this.state.umidRel}
                      placeholderTextColor="rgba(34, 159, 134, 0.32)"
                      onChangeText={(umidRelativa) => {
                        this.changeUmidRel(umidRelativa);
                      }}
                      returnKeyType="next"
                      refInput={(input) => {
                        this.field3 = input;
                      }}
                      onSubmitEditing={() => {
                        this.field4.focus();
                      }}
                      blurOnSubmit={false}></TextInputMask>
                  </CardInput>
                  <CardInput>
                    <TextAnu>Velocidade do vento (m/s)</TextAnu>
                    <TextInputMask
                      type={'money'}
                      options={{
                        precision: 1,
                        separator: ',',
                        delimiter: '.',
                        unit: '',
                        suffixUnit: '',
                      }}
                      style={styles.input}
                      placeholder="0,00"
                      value={this.state.velVen}
                      placeholderTextColor="rgba(34, 159, 134, 0.32)"
                      onChangeText={(velVento) => {
                        this.changeVelVen(velVento);
                      }}
                      returnKeyType="next"
                      refInput={(input) => {
                        this.field4 = input;
                      }}
                      onSubmitEditing={() => {
                        this.field5.focus();
                      }}
                      blurOnSubmit={false}></TextInputMask>
                  </CardInput>
                  <CardInput>
                    <TextAnu>Status Nutricional (dose)</TextAnu>
                    <TextInputMask
                      type={'money'}
                      options={{
                        precision: 1,
                        separator: ',',
                        delimiter: '.',
                        unit: '',
                        suffixUnit: '',
                      }}
                      style={styles.input}
                      placeholder="0,00"
                      value={this.state.doseN}
                      placeholderTextColor="rgba(34, 159, 134, 0.32)"
                      onChangeText={(doseN) => {
                        this.changeDoseN(doseN);
                      }}
                      returnKeyType="next"
                      refInput={(input) => {
                        this.field5 = input;
                      }}
                      onSubmitEditing={() => {
                        this.field6.focus();
                      }}
                      blurOnSubmit={false}></TextInputMask>
                  </CardInput>
                  <CardInput>
                    <TextAnu>Água de outros usos (L/mês)=</TextAnu>
                    <TextInputMask
                      type={'money'}
                      options={{
                        precision: 0,
                        separator: ',',
                        delimiter: '.',
                        unit: '',
                        suffixUnit: '',
                      }}
                      style={styles.input}
                      placeholder="0,00"
                      value={this.state.aguaUso}
                      placeholderTextColor="rgba(34, 159, 134, 0.32)"
                      onChangeText={(agua) => {
                        this.changeAguaUso(agua);
                      }}
                      refInput={(input) => {
                        this.field6 = input;
                      }}></TextInputMask>
                  </CardInput>
                  <BtnSalvar
                    hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}
                    onPress={() => this.buttonCheck()}>
                    <TextEnviar>Confirmar</TextEnviar>
                  </BtnSalvar>
                </CardInfo>
                <View style={{ height: 60 }} />
              </ScrollView>
            </Background>
          )}
      </KeyboardAvoidingView>
    );
  }
}
