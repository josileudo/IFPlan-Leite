import React, {Component} from 'react';
import {StackActions} from '@react-navigation/native';
import {
  StyleSheet,
  Platform,
  RefreshControl,
  KeyboardAvoidingView,
  AsyncStorage,
  BackHandler,
  ActivityIndicator,
} from 'react-native';
import {
  Background,
  CardLogo,
  CardInfo,
  TextLogo,
  TextInfo,
  TextAnu,
  CardInput,
  TextInput,
  ScrollView,
  CardCheck,
  CardEsp
} from '../../styles/styleInfor';
import Icon from 'react-native-vector-icons/AntDesign';
import normalize from 'react-native-normalize';
import styles from '../../styles/stylesheet';
import {TextInputMask} from 'react-native-masked-text';
Icon.loadFont();

export default class Area extends Component {
  constructor(props) {
    super(props);
    this.state = {
      area: '0',
      numPiq: '0',
      refreshing: false,
    };
  }

  changeArea(area) {
    this.setState({...this.state, area});
  }

  changeNumPiq(numPiq) {
    this.setState({...this.state, numPiq});
  }

  async dados() {
    const Area = await AsyncStorage.getItem('Agua');
    if (Area) {
      const value = JSON.parse(Area);
      this.setState({value});
      this.setState({area: value.area});
      this.setState({numPiq: value.numPiq});
    }
  }

  componentDidMount() {
    this.dados();
  }

  _onRefresh = () => {
    this.setState({refreshing: true});
    this.dados().then(() => {
      this.setState({refreshing: false});
    });
  };

  handleNavigateMenu() {
    const {dispatch} = this.props.navigation;

    dispatch({
      ...StackActions.replace('Menu'),
    });
  }

  async buttonCheck() {
    if (this.state.area !== '' && this.state.numPiq !== '') {
      await AsyncStorage.setItem(
        'Agua',
        JSON.stringify({area: this.state.area, numPiq: this.state.numPiq}),
      ).then(() => this.handleNavigateMenu());

      this._onRefresh();
    } else {
      alert('Preencha todos os campos');
      console.log('Preencher campos');
    }
  }

  render() {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" || 'android' ? "padding" : null}
        number={50}
        style={{flex:1}}>
        {this.state.refreshing ? (
          <ActivityIndicator color="#fff" size={25} />
        ) : (
          <Background>
            <CardLogo>
              <TextInfo>Inserir dados</TextInfo>
            </CardLogo>
            <ScrollView alwaysBounceVertical={false}>
              <CardInfo>
                <CardInput>
                  <TextAnu>Área (ha)</TextAnu>
                  <TextInputMask
                    type={'money'}
                    options={{
                      precision: 2,
                      separator: ',',
                      delimiter: '.',
                      unit: '',
                      suffixUnit: '',
                    }}
                    autofocus={true}
                    style={styles.input}
                    placeholder="0,00"
                    value={this.state.area}
                    onSubmitEditing={() => this.field1.focus()}
                    placeholderTextColor="rgba(34, 159, 134, 0.32)"
                    onChangeText={(area) => {
                      this.changeArea(area);
                    }}
                    returnKeyType={'next'}
                    blurOnSubmit={false}
                  />
                </CardInput>
                <CardInput>
                  <TextAnu>Número de piquetes (unid)</TextAnu>
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
                    value={this.state.numPiq}
                    placeholderTextColor="rgba(34, 159, 134, 0.32)"
                    onChangeText={(numPiquetes) => {
                      this.changeNumPiq(numPiquetes);
                    }}
                    refInput={(input) => {
                      this.field1 = input;
                    }}
                  />
                </CardInput>
              </CardInfo>
            </ScrollView>
            <CardCheck
              onPress={() => {
                this.buttonCheck();
              }}>
              <CardEsp>
                <Icon 
                  name="checkcircle"
                  size={normalize(50)}
                  color='#30D0AF'
                  style = {styles.icon}
            />
            </CardEsp>
            </CardCheck>
          </Background>
        )}
      </KeyboardAvoidingView>
    );
  }
}
