import React, {Component} from 'react'
import {Animated, StyleSheet, Platform, Easing, RefreshControl,KeyboardAvoidingView,AsyncStorage} from 'react-native'
import {Background,CardLogo, CardInfo, TextLogo, TextInfo,
TextAnu,CardInput, TextInput,ScrollView, CardCheck} from '../../styles/styleInfor'
import Icon from 'react-native-vector-icons/AntDesign'
import normalize from 'react-native-normalize'
import styles from '../../styles/stylesheet'
import { TextInputMask } from 'react-native-masked-text'
Icon.loadFont();

export default class Area extends Component{
  
  constructor (props){
    super(props)
    this.state = {
      area: '0',
      numPiq: '0',
      dataArea:{},
      spinner: false,
    },
    this.refreshing={
      refreshing: false
    }
  }

  changeArea(area){
    this.setState({area})
  }
  changeNumPiq(numPiq){
    this.setState({numPiq})
  }

  async dados(){
    const Area= await AsyncStorage.getItem('Agua')
    if (Area){
      let value= JSON.parse(Area)
      this.setState({dataArea: value})
      this.setState({area:value.area})
      this.setState({numPiq:value.numPiq})
      console.log ( 'dataArea', value )
    }
  }

  componentDidMount(){
    this.dados()
  }

  _onRefresh = () => {
    this.setState({refreshing: true})
      this.dados().then(() => {
      this.setState({refreshing: false})
    })
  }

  async buttonCheck(){
    if (this.state.area && this.state.numPiq != ''){
      await AsyncStorage.setItem('Agua', JSON.stringify(this.state))
      const res = await AsyncStorage.getItem('Agua')
      const {navigate} = this.props.navigation
      navigate('Menu')
    } else {
      alert("Preencha todos os campos")
      console.log("Preencher campos")      
    }
  }

  render(){
    const {navigate} = this.props.navigation
    const {dataArea} = this.state
    return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" || 'android' ? "padding" : null}
      number={50}
      style={{flex:1}}>
      <Background>
        <CardLogo>
          <TextInfo >
            Inserir informações
          </TextInfo>
        </CardLogo>
        <ScrollView
          alwaysBounceVertical = {false}
          >
            <CardInfo>
              <CardInput>
                <TextAnu>
                  Área (ha)
                </TextAnu>
                <TextInputMask 
                  type={'money'}
                  options={{
                    precision: 2,
                    separator: ',',
                    delimiter: '.',
                    unit: '',
                    suffixUnit: ''
                  }}
                  style= {styles.input}
                  placeholder = '0,00'
                  value = {this.state.area}
                  placeholderTextColor= 'rgba(34, 159, 134, 0.32)'
                  onChangeText = {(area) => {this.changeArea(area)}}
                  returnKeyType = {'next'}
                  onSubmitEditing = {() => {this.field1.focus()}}
                  blurOnSubmit = {false}>
                </TextInputMask>
              </CardInput>
              <CardInput>
                <TextAnu>
                  Número de piquetes (unid)
                </TextAnu>
                <TextInputMask 
                  type={'money'}
                  options={{
                    precision: 2,
                    separator: ',',
                    delimiter: '.',
                    unit: '',
                    suffixUnit: ''
                  }}
                  style= {styles.input}
                  placeholder = '0,00'
                  value = {this.state.numPiq}
                  placeholderTextColor= 'rgba(34, 159, 134, 0.32)'
                  onChangeText = {(numPiquetes) => {this.changeNumPiq(numPiquetes)}}
                  ref = {(input) => {this.field1= input}}
                >
                </TextInputMask>
              </CardInput>
            </CardInfo>
        </ScrollView>
        <CardCheck
          onPress = {() => {
            this.buttonCheck()
          }}>
          <Icon name="checkcircle" size={normalize(50)} color='#30D0AF'/>
        </CardCheck>
      </Background>
      </KeyboardAvoidingView>
    )
  }
}

