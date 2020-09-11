import React, {Component} from 'react';
import {StackActions} from '@react-navigation/native';
import {Alert, AsyncStorage, ActivityIndicator} from 'react-native';
import {
  Background,
  CardLogo,
  CardInfo,
  KeyboardAvoidingView,
  TextLogo,
  TextInfo,
  TextAnu,
  CardInput,
  TextInput,
  ScrollView,
  CardCheck,
  BtnSalvar,
  TextEnviar,
} from '../styles/styleInfor';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from '../styles/stylesheet';
import normalize from 'react-native-normalize';
import {TextInputMask} from 'react-native-masked-text';
Icon.loadFont();

export default class Economia extends Component {
  constructor(props) {
    super(props);
    this.state = {
      invest: '0',
      renFam: '0',
      taxDep: '0',
      refreshing: false,
    };
  }

  changeInvest(invest) {
    this.setState({...this.state, invest});
  }
  changeRenFam(renFam) {
    this.setState({...this.state, renFam});
  }
  changeTaxDep(taxDep) {
    this.setState({...this.state, taxDep});
  }

  async dados() {
    const Economia = await AsyncStorage.getItem('Economia');
    if (Economia) {
      const value = JSON.parse(Economia);
      this.setState({value});
      this.setState({invest: value.invest});
      this.setState({renFam: value.renFam});
      this.setState({taxDep: value.taxDep});
    }
  }

  componentDidMount() {
    this.dados();
  }

  handleNavigateMenu() {
    const {dispatch} = this.props.navigation;

    dispatch({
      ...StackActions.replace('Menu'),
    });
  }

  _onRefresh = () => {
    this.setState({refreshing: true});
    this.dados().then(() => {
      this.setState({refreshing: false});
    });
  };

  async buttonCheck() {
    if (this.state.invest && this.state.renFam && this.state.taxDep != '') {
      await AsyncStorage.setItem(
        'Economia',
        JSON.stringify({
          invest: this.state.invest,
          renFam: this.state.renFam,
          taxDep: this.state.taxDep,
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
        style={{flex: 1}}>
        {this.state.refreshing ? (
          <ActivityIndicator color="#FFFF" size={25} />
        ) : (
          <Background>
            <CardLogo>
              <TextInfo>Inserir dados</TextInfo>
            </CardLogo>
            <ScrollView alwaysBounceVertical={false}>
              <CardInfo>
                <CardInput>
                  <TextAnu>Investimento por L (R$/L)</TextAnu>
                  <TextInputMask
                    type={'money'}
                    options={{
                      precision: 2,
                      separator: ',',
                      delimiter: '.',
                      unit: '',
                      suffixUnit: '',
                    }}
                    style={styles.input}
                    placeholder="0,00"
                    value={this.state.invest}
                    placeholderTextColor="rgba(34, 159, 134, 0.32)"
                    onChangeText={(investimento) => {
                      this.changeInvest(investimento);
                    }}
                    returnKeyType={'next'}
                    onSubmitEditing={() => {
                      this.field1.focus();
                    }}
                    blurOnSubmit={false}></TextInputMask>
                </CardInput>
                <CardInput>
                  <TextAnu>Renda familiar (R$/mês)</TextAnu>
                  <TextInputMask
                    type={'money'}
                    options={{
                      precision: 2,
                      separator: ',',
                      delimiter: '.',
                      unit: '',
                      suffixUnit: '',
                    }}
                    style={styles.input}
                    placeholder="0,00"
                    value={this.state.renFam}
                    placeholderTextColor="rgba(34, 159, 134, 0.32)"
                    onChangeText={(renFamiliar) => {
                      this.changeRenFam(renFamiliar);
                    }}
                    refInput={(input) => {
                      this.field1 = input;
                    }}
                    returnKeyType={'next'}
                    onSubmitEditing={() => {
                      this.field2.focus();
                    }}
                    blurOnSubmit={false}></TextInputMask>
                </CardInput>
                <CardInput>
                  <TextAnu>Taxa de depreciação (%a.a.)</TextAnu>
                  <TextInputMask
                    type={'money'}
                    options={{
                      precision: 2,
                      separator: ',',
                      delimiter: '.',
                      unit: '',
                      suffixUnit: '',
                    }}
                    style={styles.input}
                    placeholder="0,00"
                    value={this.state.taxDep}
                    placeholderTextColor="rgba(34, 159, 134, 0.32)"
                    onChangeText={(taxaDep) => {
                      this.changeTaxDep(taxaDep);
                    }}
                    refInput={(input) => {
                      this.field2 = input;
                    }}></TextInputMask>
                </CardInput>
                <BtnSalvar 
                  hitSlop = {{top: 20, bottom: 20, left: 50, right: 50 }}
                  onPress={() => this.buttonCheck()}>
                  <TextEnviar>Confirmar</TextEnviar>
                </BtnSalvar>
              </CardInfo>
            </ScrollView>
          </Background>
        )}
      </KeyboardAvoidingView>
    );
  }
}
