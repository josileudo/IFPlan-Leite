import React, {Component} from 'react'
import {View,Alert,AsyncStorage} from 'react-native'
import {Background,CardLogo, KeyboardAvoidingView, CardInfo, TextLogo, TextInfo,
TextAnu, CardInput, TextInput, ScrollView, CardCheck} from '../styles/styleInfor'
import Icon from 'react-native-vector-icons/AntDesign'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { TextInputMask } from 'react-native-masked-text'
import styles from '../styles/stylesheet'
import normalize from 'react-native-normalize'
Icon.loadFont();

export default class Animal extends Component{
  
  constructor (props){
    super(props)
    this.state = {
      teorPB: '0',
      pesoCorp:'0',
      prodLei: '0',
      deslHor: '0',
      deslVer: '0',
      vacLact: '0',
      teorGord: '0',
      dataAnimal:{},
    },
    this.refreshing={
      refreshing: false
    }
  }

  changePesoCorp(pesoCorp){
    this.setState({pesoCorp})
  }
  changeProdLei(prodLei){
    this.setState({prodLei})
  }
  changeTeorGord(teorGord){
    this.setState({teorGord})
  }
  changeTeorPB(teorPB){
    this.setState({teorPB})
  }
  changeDeslHor(deslHor){
    this.setState({deslHor})
  }
  changeDeslVer(deslVer){
    this.setState({deslVer})
  }
  changeVacLact(vacLact){
    this.setState({vacLact})
  }

  async dados(){
    const Animal= await AsyncStorage.getItem('Animal')
    if (Animal){
      let value= JSON.parse(Animal)
      this.setState({dataAnimal: value})
      this.setState({teorPB:value.teorPB})
      this.setState({pesoCorp:value.pesoCorp})
      this.setState({prodLei:value.prodLei})
      this.setState({deslHor:value.deslHor})
      this.setState({deslVer:value.deslVert})
      this.setState({vacLact:value.vacLact})
      this.setState({teorGord:value.teorGord})
      console.log ( 'dataAnimal', value )
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
    if (this.state.pesoCorp && this.state.prodLei && this.state.teorGord && 
      this.state.teorPB && this.state.deslHor && this.state.deslVer && 
      this.state.vacLact != ""){
      await AsyncStorage.setItem('Animal', JSON.stringify(this.state))
      const res = await AsyncStorage.getItem('Animal')
      this._onRefresh()

    } else {
      alert("Preencha todos os campos")
      console.log("Preencher campos")      
    }
  }

  render(){
    const {dataAnimal} = this.state
    const color = '#30D0AF'
    return (
      <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : null}
      keyboardVerticalOffset ={100} 
      enabled={true}
      > 
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
              Peso corporal (kg)
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
              value = {this.state.pesoCorp}
              placeholderTextColor= 'rgba(34, 159, 134, 0.32)'
              onChangeText = {(pesoCorporal) => {
                this.changePesoCorp(pesoCorporal)}}
              returnKeyType = {'next'}
              onSubmitEditing = {() => {this.field1.focus()}}
              blurOnSubmit = {false}
            >
            </TextInputMask >
          </CardInput>
          <CardInput>
            <TextAnu>
              Produção de leite (L/vaca/dia)
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
              value = {this.state.prodLei}
              placeholderTextColor= 'rgba(34, 159, 134, 0.32)'
              onChangeText = {(prodLeite) => {
                this.changeProdLei(prodLeite)}}
              refInput = {(input) => {this.field1 = input}}
              returnKeyType = {'next'}
              onSubmitEditing = {() => {this.field2.focus()}}
              blurOnSubmit = {false}
            >
            </TextInputMask >
          </CardInput>
          <CardInput>
            <TextAnu>
              Teor de gordura no leite (%)            </TextAnu>
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
              value = {this.state.teorGord}
              placeholderTextColor= 'rgba(34, 159, 134, 0.32)'
              onChangeText= {(teorGordura) => {
                this.changeTeorGord(teorGordura)}}
              refInput = {(input) => {this.field2 = input}}
              returnKeyType= {'next'}
              onSubmitEditing= {() => {this.field3.focus()}}
              blurOnSubmit= {false}
            >
            </TextInputMask >
          </CardInput>
          <CardInput>
            <TextAnu>
              Teor de PB no leite (%)
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
              value = {this.state.teorPB}
              placeholderTextColor= 'rgba(34, 159, 134, 0.32)'
              onChangeText = {(teorPB) => {
                this.changeTeorPB(teorPB)}}
              refInput = {(input) => {this.field3 = input}}
              returnKeyType = {'next'}
              onSubmitEditing = {() => {this.field4.focus()}}
              blurOnSubmit = {false}
            >
            </TextInputMask >
          </CardInput>
          <CardInput>
            <TextAnu>
              Deslocamento horizontal (m)
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
              value = {this.state.deslHor}
              placeholderTextColor= 'rgba(34, 159, 134, 0.32)'
              onChangeText = {(deslHorizontal) => {
                this.changeDeslHor(deslHorizontal)}}
              refInput = {(input) => {this.field4 = input}}
              returnKeyType = {'next'}
              onSubmitEditing = {() => {this.field5.focus()}}
              blurOnSubmit = {false}
            >
            </TextInputMask >
          </CardInput>
          <CardInput>
            <TextAnu>
              Deslocamento vertical (m)
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
              value = {this.state.deslVer}
              placeholderTextColor= 'rgba(34, 159, 134, 0.32)'
              onChangeText = {(deslVertical) => {
                this.changeDeslVer(deslVertical)}}
              refInput = {(input) => {this.field5 = input}}
              returnKeyType = {'next'}
              onSubmitEditing = {() => {this.field6.focus()}}
              blurOnSubmit = {false}
            > 
            </TextInputMask >
          </CardInput>
          <CardInput>
            <TextAnu>
              Vacas em lactação (%)
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
              value = {this.state.vacLact}
              placeholderTextColor= 'rgba(34, 159, 134, 0.32)'
              placeholderTextColor= '#29BB9D'
              onChangeText = {(vacaLacta) => {
                this.changeVacLact(vacaLacta)}}
              refInput = {(input) => {this.field6 = input}}
            >
            </TextInputMask >
          </CardInput>
        </CardInfo>
        <View style = {{height: 60}}/>
        </ScrollView>
        <CardCheck 
          onPress = {() => {
            this.buttonCheck()
          }}
        >
        <Icon 
          name="checkcircle"
          size={normalize(50)}
          color='#30D0AF'
          style = {styles.icon}
        />
        </CardCheck>
      </Background>
      </KeyboardAvoidingView>
    )
  }
}