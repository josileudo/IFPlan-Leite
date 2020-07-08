import React, {Component} from 'react'
import {Alert, AsyncStorage} from 'react-native'
import {Background,CardLogo, CardInfo, KeyboardAvoidingView, TextLogo, TextInfo, 
TextAnu, CardInput, TextInput,ScrollView, CardCheck} from '../styles/styleInfor'
import Icon from 'react-native-vector-icons/AntDesign'
import styles from '../styles/stylesheet'
import normalize from 'react-native-normalize'
import { TextInputMask } from 'react-native-masked-text'
Icon.loadFont();

export default class Economia extends Component{
  
  constructor (props){
    super(props)
    this.state = {
      invest: '0',
      renFam: '0',
      taxDep: '0',
      dataEconomia:{},
      spinner: false,
    },
    this.refreshing={
      refreshing: false
    }
  }
  
  changeInvest(invest){
    this.setState({invest})
  }
  changeRenFam(renFam){
    this.setState({renFam})
  }
  changeTaxDep(taxDep){
    this.setState({taxDep})
  }


  async dados(){
    const Economia= await AsyncStorage.getItem('Economia')
    if (Economia){
      let value= JSON.parse(Economia)
      this.setState({dataEconomia: value})
      this.setState({invest:value.invest})
      this.setState({renFam:value.renFam})
      this.setState({taxDep:value.taxDep})
      console.log ( 'dataEconomia', value )
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
    if (this.state.invest && this.state.renFam && this.state.taxDep != ""){
      await AsyncStorage.setItem('Economia', JSON.stringify(this.state))
      const res = await AsyncStorage.getItem('Economia')
      console.log (res)
      this._onRefresh()
    } else {
      alert("Preencha todos os campos")
      console.log("Preencher campos")      
    }
  }

  render(){
    const {dataEconomia} = this.state
    return (
      <KeyboardAvoidingView
      behavior={Platform.OS == "ios" || 'android' ? "padding" : null}
      number={50}
      style={{flex:1}}>
      <Background>
        <CardLogo>
          <TextLogo>
            Economia
          </TextLogo>
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
              Investimento por L (R$/L)
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
              value= {this.state.invest}
              placeholderTextColor= 'rgba(34, 159, 134, 0.32)'
              onChangeText = {(investimento) => {
                this.changeInvest(investimento)}}
              returnKeyType = {'next'}
              onSubmitEditing = {() => {this.field1.focus()}}
              blurOnSubmit = {false}>
            </TextInputMask>
          </CardInput>
          <CardInput>
            <TextAnu>
              Renda familiar (R$/mês)
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
              value= {this.state.renFam}
              placeholderTextColor= 'rgba(34, 159, 134, 0.32)'
              onChangeText = {(renFamiliar) => {
                this.changeRenFam(renFamiliar)}}
              ref = {(input) => {this.field1 = input}}
              returnKeyType = {'next'}
              onSubmitEditing = {() => {this.field2.focus()}}
              blurOnSubmit = {false}
            >
            </TextInputMask>
          </CardInput>
          <CardInput>
            <TextAnu>
              Taxa de depreciação (%a.a.)      
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
              value= {this.state.taxDep}
              placeholderTextColor= 'rgba(34, 159, 134, 0.32)'
              onChangeText = {(taxaDep) => {
                this.changeTaxDep(taxaDep)}}
              ref = {(input) => {this.field2 = input}}
            >
            </TextInputMask>
          </CardInput>
        </CardInfo>
        </ScrollView>
        <CardCheck 
        onPress = {() => {
            this.buttonCheck()
          }}>
          <Icon 
            name="checkcircle" 
            size={normalize(50)} 
            color='#30D0AF' 
            style = {styles.icon}/>
        </CardCheck>
      </Background>
    </KeyboardAvoidingView>

    )
  }
}