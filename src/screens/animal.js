import React, {Component} from 'react'
import {Alert, AsyncStorage} from 'react-native'
import {Background,CardLogo, CardInfo, TextLogo, TextInfo, 
TextAnu, CardInput, TextInput,ScrollView, CardCheck} from '../styles/styleInfor'
import Icon from 'react-native-vector-icons/AntDesign'
import LottieView from 'lottie-react-native'
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
    const color = '#29BB9D'
    return (
      <Background>
        <CardLogo>
          <TextLogo>
            Animal
          </TextLogo>
          <TextInfo >
            Inserir informações
          </TextInfo>
        </CardLogo>
        <ScrollView>
        <CardInfo>
          <CardInput>
            <TextAnu>
              Peso corporal (kg)
            </TextAnu>
            <TextInput keyboardType = 'numeric' 
              placeholder = '0'
              placeholderTextColor= '#29BB9D'
              onChangeText = {(pesoCorporal) => {
                this.changePesoCorp(pesoCorporal)}}
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
              {dataAnimal.pesoCorp}
            </TextInput>
          </CardInput>
          <CardInput>
            <TextAnu>
              Produção de leite (L/vaca/dia)
            </TextAnu>
            <TextInput keyboardType = 'numeric' 
            placeholder = '0'
            placeholderTextColor= '#29BB9D'
            onChangeText = {(prodLeite) => {
              this.changeProdLei(prodLeite)}}
            ref = {(input) => {this.field1 = input}}
            returnKeyType = {'next'}
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
              {dataAnimal.prodLei}
            </TextInput>
          </CardInput>
          <CardInput>
            <TextAnu>
              Teor de gordura no leite (%)            </TextAnu>
            <TextInput keyboardType = 'numeric' 
            placeholder = '0'
            placeholderTextColor= '#29BB9D'
            onChangeText= {(teorGordura) => {
              this.changeTeorGord(teorGordura)}}
            ref = {(input) => {this.field2 = input}}
            returnKeyType= {'next'}
            onSubmitEditing= {() => {this.field3.focus()}}
            blurOnSubmit= {false}
            style= {{
              shadowColor: "#000",
              shadowOffset: {
                width: 2,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 2
            }}>
              {dataAnimal.teorGord }
            </TextInput>
          </CardInput>
          <CardInput>
            <TextAnu>
              Teor de PB no leite (%)
            </TextAnu>
            <TextInput keyboardType = 'numeric' 
            placeholder = '0'
            placeholderTextColor= '#29BB9D'
            onChangeText = {(teorPB) => {
              this.changeTeorPB(teorPB)}}
            ref = {(input) => {this.field3 = input}}
            returnKeyType = {'next'}
            onSubmitEditing = {() => {this.field4.focus()}}
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
              {dataAnimal.teorPB}
            </TextInput>
          </CardInput>
          <CardInput>
            <TextAnu>
              Deslocamento horizontal (m)
            </TextAnu>
            <TextInput keyboardType = 'numeric' 
            placeholder = '0'
            placeholderTextColor= '#29BB9D'
            onChangeText = {(deslHorizontal) => {
              this.changeDeslHor(deslHorizontal)}}
            ref = {(input) => {this.field4 = input}}
            returnKeyType = {'next'}
            onSubmitEditing = {() => {this.field5.focus()}}
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
              {dataAnimal.deslHor}
            </TextInput>
          </CardInput>
          <CardInput>
            <TextAnu>
              Deslocamento vertical (m)
            </TextAnu>
            <TextInput keyboardType = 'numeric' 
            placeholder = '0'
            placeholderTextColor= '#29BB9D'
            onChangeText = {(deslVertical) => {
              this.changeDeslVer(deslVertical)}}
            ref = {(input) => {this.field5 = input}}
            returnKeyType = {'next'}
            onSubmitEditing = {() => {this.field6.focus()}}
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
              {dataAnimal.deslVer}
            </TextInput>
          </CardInput>
          <CardInput>
            <TextAnu>
              Vacas em lactação (%)
            </TextAnu>
            <TextInput 
            keyboardType = 'numeric' 
            placeholder = '0'
            placeholderTextColor= '#29BB9D'
            onChangeText = {(vacaLacta) => {
              this.changeVacLact(vacaLacta)}}
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
              {dataAnimal.vacLact}
            </TextInput>
          </CardInput>
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
          elevation: 5
          }}/>
        </CardCheck>
      </Background>
    )
  }
}