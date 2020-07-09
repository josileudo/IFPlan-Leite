import React, {Component} from 'react'
import {View, AsyncStorage, KeyboardAvoidingView, TouchableOpacity} from 'react-native'
import {Background,CardLogo, CardInfo, TextLogo, TextInfo, 
TextAnu, CardInput, TextInput ,ScrollView, CardCheck, CardEsp} from '../styles/styleInfor'
import styles from '../styles/stylesheet'
import normalize from 'react-native-normalize'
import { TextInputMask } from 'react-native-masked-text'
import Icon from 'react-native-vector-icons/AntDesign'
Icon.loadFont();

const name = "Clima e Solo"

export default class Clima extends Component{
  
  constructor (){
    super()
    this.state = {
      prec:'0',
      tempMax: '0',
      tempMin: '0',
      umidRel: '0',
      velVen: '0',
      doseN: '0',
      aguaUso: '0',
      dataClima: {},
    },
    this.refreshing={
      refreshing: false
    }
  }

  changePrec(prec){
    this.setState({prec})
  }
  changeTempMax(tempMax){
    this.setState({tempMax})
  }
  changeTempMin(tempMin){
    this.setState({tempMin})
  }
  changeUmidRel(umidRel){
    this.setState({umidRel})
  }
  changeVelVen(velVen){
    this.setState({velVen})
  }
  changeDoseN(doseN){
    this.setState({doseN})
  }
  changeAguaUso(aguaUso){
    this.setState({aguaUso})
  }

  async dados(){
    const Clima= await AsyncStorage.getItem('Clima')
    if (Clima){
      let value= JSON.parse(Clima)
      this.setState({dataClima: value})
      this.setState({prec:value.prec})
      this.setState({tempMax:value.tempMax})
      this.setState({tempMin:value.tempMin})
      this.setState({umidRel:value.umidRel})
      this.setState({velVen:value.velVen})
      this.setState({doseN:value.doseN})
      this.setState({aguaUso:value.aguaUso})
      console.log ( 'dataClima', value )
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

  if (this.state.prec && this.state.tempMax && this.state.tempMin 
    && this.state.umidRel && this.state.velVen && this.state.doseN 
    && this.state.aguaUso != ""){
    await AsyncStorage.setItem('Clima', JSON.stringify(this.state))
    const res = await AsyncStorage.getItem('Clima')
    console.log ('Clima:',res)
    this._onRefresh()

    } else {
      alert("Preencha todos os campos")
      console.log("Preencher campos")      
    }
  }

  render(){
    const {dataClima} = this.state
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
                Precipitação (mm)
              </TextAnu>
              <TextInputMask  
                type={'money'}
                value = {this.state.prec}
                options={{
                  precision: 2,
                  separator: ',',
                  delimiter: '.',
                  unit: '',
                  suffixUnit: ''
                }}
                style= {styles.input}
                placeholder = '0,00'
                placeholderTextColor= 'rgba(34, 159, 134, 0.32)'
                onChangeText = {(precipitacao) => {this.changePrec(precipitacao)} }
                returnKeyType = {'next'}
                onSubmitEditing = {() => {this.field1.focus()}}
                blurOnSubmit = {false}
              >
              </TextInputMask >
            </CardInput>
            <CardInput>
              <TextAnu>
                Temperatura máxima (ºC)
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
                value = {this.state.tempMax}
                placeholder = '0,00'
                placeholderTextColor= 'rgba(34, 159, 134, 0.32)'
                onChangeText = {(tempMaxima) => {this.changeTempMax(tempMaxima)}}
                refInput = {(input) => {this.field1= input}} 
                returnKeyType = 'next'
                onSubmitEditing = {() => {this.field2.focus()}}
                blurOnSubmit = {false}
              >
              </TextInputMask >
            </CardInput>
            <CardInput>
              <TextAnu>
                Temperatura mínima (ºC)
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
                value = {this.state.tempMin}
                placeholderTextColor= 'rgba(34, 159, 134, 0.32)'
                onChangeText = {(tempMinima) => {this.changeTempMin(tempMinima)}}
                returnKeyType = 'next'
                refInput = {(input) => {this.field2 = input}}
                onSubmitEditing = {() => {this.field3.focus()}}
                blurOnSubmit= {false}
              >
              </TextInputMask >
            </CardInput>
            <CardInput>
              <TextAnu>
                Umidade Relativa (%)
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
                value = {this.state.umidRel}
                placeholderTextColor= 'rgba(34, 159, 134, 0.32)'
                onChangeText = {(umidRelativa) => {this.changeUmidRel(umidRelativa)}}
                returnKeyType = 'next'
                refInput = {(input) => {this.field3 = input}}
                onSubmitEditing = {() => {this.field4.focus()}}
                blurOnSubmit= {false}
              >
              </TextInputMask >
            </CardInput>
            <CardInput>
              <TextAnu>
                Velocidade do vento (m/s)
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
                value = {this.state.velVen}
                placeholderTextColor= 'rgba(34, 159, 134, 0.32)'
                onChangeText = {(velVento) => {this.changeVelVen(velVento)}}
                returnKeyType = 'next'
                refInput = {(input) => {this.field4 = input}}
                onSubmitEditing = {() => {this.field5.focus()}}
                blurOnSubmit= {false}
              >
              </TextInputMask >
            </CardInput>
            <CardInput>
              <TextAnu>
                Dose de N (dose)
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
                value = {this.state.doseN}
                placeholderTextColor= 'rgba(34, 159, 134, 0.32)'
                onChangeText = {(doseN) => {this.changeDoseN(doseN)}}
                returnKeyType = 'next'
                refInput = {(input) => {this.field5 = input}}
                onSubmitEditing = {() => {this.field6.focus()}}
                blurOnSubmit= {false}
              >
              </TextInputMask >
            </CardInput>
            <CardInput>
              <TextAnu>
                Água de outros usos (L/mês)=
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
                value={this.state.aguaUso}
                placeholderTextColor= 'rgba(34, 159, 134, 0.32)'
                onChangeText = {(agua) => {this.changeAguaUso(agua)}}
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