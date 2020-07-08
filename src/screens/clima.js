import React, {Component} from 'react'
import {Alert, AsyncStorage, TouchableOpacity} from 'react-native'
import {Background,CardLogo, CardInfo, TextLogo, TextInfo, 
TextAnu, CardInput, TextInput,ScrollView, CardCheck, CardEsp} from '../styles/styleInfor'

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
      <Background>
        <CardLogo>
          <TextLogo>
            {name}
          </TextLogo>
          <TextInfo >
            Inserir informações
          </TextInfo>
        </CardLogo>
        <ScrollView>
        <CardInfo>
          <CardInput>
            <TextAnu>
              Precipitação (mm)
            </TextAnu>
            <TextInput keyboardType = 'numeric' 
              placeholder= '0'
              placeholderTextColor= '#29BB9D'
              onChangeText = {(precipitacao) => {this.changePrec(precipitacao)} }
              returnKeyType = {'next'}
              onSubmitEditing = {() => {this.field1.focus()}}
              blurOnSubmit = {false}
              style = {{
                shadowColor: "#000",
                shadowOffset: {
                  width: 2,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
              elevation: 2
              }}>
                {dataClima.prec}
              </TextInput>
          </CardInput>
          <CardInput>
            <TextAnu>
              Temperatura máxima (ºC)
            </TextAnu>
            <TextInput keyboardType = 'numeric' 
              placeholder= '0'
              placeholderTextColor= '#29BB9D'
              onChangeText = {(tempMaxima) => {this.changeTempMax(tempMaxima)}}
              ref = {(input) => {this.field1= input}} 
              returnKeyType = 'next'
              onSubmitEditing = {() => {this.field2.focus()}}
              blurOnSubmit = {false}
              style = {{
                shadowColor: "#000",
                shadowOffset: {
                  width: 2,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
              elevation: 2
              }}>
                {dataClima.tempMax}
              </TextInput>
          </CardInput>
          <CardInput>
            <TextAnu>
              Temperatura mínima (ºC)
            </TextAnu>
            <TextInput keyboardType = 'numeric' 
              placeholder= '0'
              placeholderTextColor= '#29BB9D'
              onChangeText = {(tempMinima) => {this.changeTempMin(tempMinima)}}
              returnKeyType = 'next'
              ref = {(input) => {this.field2 = input}}
              onSubmitEditing = {() => {this.field3.focus()}}
              blurOnSubmit= {false}
              style = {{
                shadowColor: "#000",
                shadowOffset: {
                  width: 2,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 2
            }}>
              {dataClima.tempMin}
            </TextInput>
          </CardInput>
          <CardInput>
            <TextAnu>
              Umidade Relativa (%)
            </TextAnu>
            <TextInput keyboardType = 'numeric' 
            placeholder='0'
            placeholderTextColor= '#29BB9D'
            onChangeText = {(umidRelativa) => {this.changeUmidRel(umidRelativa)}}
            returnKeyType = 'next'
            ref = {(input) => {this.field3 = input}}
            onSubmitEditing = {() => {this.field4.focus()}}
            blurOnSubmit= {false}
            style = {{
              shadowColor: "#000",
              shadowOffset: {
                width: 2,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
            elevation: 2
            }}>
              {dataClima.umidRel}
            </TextInput>
          </CardInput>
          <CardInput>
            <TextAnu>
              Velocidade do vento (m/s)
            </TextAnu>
            <TextInput keyboardType = 'numeric' 
              placeholder= '0'
              placeholderTextColor= '#29BB9D'
              onChangeText = {(velVento) => {this.changeVelVen(velVento)}}
              returnKeyType = 'next'
              ref = {(input) => {this.field4 = input}}
              onSubmitEditing = {() => {this.field5.focus()}}
              blurOnSubmit= {false}
              style = {{
                shadowColor: "#000",
                shadowOffset: {
                  width: 2,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 2
              }}>
                {dataClima.velVen}
            </TextInput>
          </CardInput>
          <CardInput>
            <TextAnu>
              Dose de N (dose)
            </TextAnu>
            <TextInput keyboardType = 'numeric' 
            placeholder='0'
            placeholderTextColor= '#29BB9D'
            onChangeText = {(doseN) => {this.changeDoseN(doseN)}}
            returnKeyType = 'next'
            ref = {(input) => {this.field5 = input}}
            onSubmitEditing = {() => {this.field6.focus()}}
            blurOnSubmit= {false}
            style = {{
              shadowColor: "#000",
              shadowOffset: {
                width: 2,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
            elevation: 2
            }}>
              {dataClima.doseN}
            </TextInput>
          </CardInput>
          <CardInput>
            <TextAnu>
              Água de outros usos (L/mês)=
            </TextAnu>
            <TextInput keyboardType = 'numeric' 
            placeholder='0'
            placeholderTextColor= '#29BB9D'
            onChangeText = {(agua) => {this.changeAguaUso(agua)}}
            ref = {(input) => {this.field6 = input}}
            style = {{
              shadowColor: "#000",
              shadowOffset: {
                width: 2,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
            elevation: 2
            }}>
              {dataClima.aguaUso}
            </TextInput>
          </CardInput>
          <CardEsp/>
        </CardInfo>
      </ScrollView>
      <CardCheck onPress = {() => {
          this.buttonCheck()
        }}>
        <Icon name="checkcircle" size={50} color='#29BB9D' 
        style = {{
          shadowColor: "#000",
          shadowOffset: {
            width: 2,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
        elevation: 7
        }}/>
      </CardCheck>
      </Background>
    )
  }
}