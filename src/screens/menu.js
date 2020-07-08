import React, {Component} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {Background,TextTouchable, AreaValues, EconomiaValues,
  ClimaValues, AnimalValues, BtnSimular, ValueTitle, CardValues,
  CardTextValues,ScrollView, BtnEditar, TextBtnEditar, CardTextVar, TextVar, ValuesVar,
  BackgroundValues, CardValuesVar, CardBtnEditar} from '../styles/styleMenu'

export default class Menu extends Component{
  constructor(props){
    super(props)
  }

  render(){
    const {navigate} = this.props.navigation
    return (
      <Background>
        <BackgroundValues >
          <ScrollView
            decelerationRate= {1.2}
            nestedScrollEnabled= {true}
            removeClippedSubviews= {true}>
            <AreaValues style = {{elevation:5}}>
              <ValueTitle>
                Área
              </ValueTitle>
              <CardValues>
                <CardTextValues>
                  <CardTextVar>
                    <TextVar>
                      Área
                    </TextVar>
                  </CardTextVar>
                  <CardValuesVar>
                    <ValuesVar>
                      50
                    </ValuesVar>
                  </CardValuesVar>
                </CardTextValues>
                <CardTextValues>
                  <CardTextVar>
                    <TextVar>
                      Área
                    </TextVar>
                  </CardTextVar>
                  <CardValuesVar>
                    <ValuesVar>
                      50
                    </ValuesVar>
                  </CardValuesVar>
                </CardTextValues>
              </CardValues>
              <CardBtnEditar>
                <BtnEditar onPress = {() =>{
                  navigate('Area')}}>
                  <TextBtnEditar>
                    Editar Campos
                  </TextBtnEditar>
                </BtnEditar>
              </CardBtnEditar>
            </AreaValues>
            <EconomiaValues>
              <ValueTitle>
                Economia
              </ValueTitle>
              <CardValues>
                <CardTextValues>
                  <CardTextVar>
                    <TextVar>
                      Investimento
                    </TextVar>
                  </CardTextVar>
                  <CardValuesVar>
                    <ValuesVar>
                      50
                    </ValuesVar>
                  </CardValuesVar>
                </CardTextValues>
                <CardTextValues>
                  <CardTextVar>
                    <TextVar>
                      Área
                    </TextVar>
                  </CardTextVar>
                  <CardValuesVar>
                    <ValuesVar>
                      50
                    </ValuesVar>
                  </CardValuesVar>
                </CardTextValues>
                <CardTextValues>
                  <CardTextVar>
                    <TextVar>
                      Área
                    </TextVar>
                  </CardTextVar>
                  <CardValuesVar>
                    <ValuesVar>
                      50
                    </ValuesVar>
                  </CardValuesVar>
                </CardTextValues>
              </CardValues>
              <CardBtnEditar>
                <BtnEditar onPress = {() =>{
                  navigate('Economia')}}>
                  <TextBtnEditar>
                    Editar Campos
                  </TextBtnEditar>
                </BtnEditar>
              </CardBtnEditar>
            </EconomiaValues>
            <ClimaValues>
              <ValueTitle>
                Clima e Solo
              </ValueTitle>
              <CardValues>
                <CardTextValues>
                  <CardTextVar>
                    <TextVar>
                      Área
                    </TextVar>
                  </CardTextVar>
                  <CardValuesVar>
                    <ValuesVar>
                      50
                    </ValuesVar>
                  </CardValuesVar>
                </CardTextValues>
                <CardTextValues>
                  <CardTextVar>
                    <TextVar>
                      Área
                    </TextVar>
                  </CardTextVar>
                  <CardValuesVar>
                    <ValuesVar>
                      50
                    </ValuesVar>
                  </CardValuesVar>
                </CardTextValues>
                <CardTextValues>
                  <CardTextVar>
                    <TextVar>
                      Área
                    </TextVar>
                  </CardTextVar>
                  <CardValuesVar>
                    <ValuesVar>
                      50
                    </ValuesVar>
                  </CardValuesVar>
                </CardTextValues>
                <CardTextValues>
                  <CardTextVar>
                    <TextVar>
                      Área
                    </TextVar>
                  </CardTextVar>
                  <CardValuesVar>
                    <ValuesVar>
                      50
                    </ValuesVar>
                  </CardValuesVar>
                </CardTextValues>
                <CardTextValues>
                  <CardTextVar>
                    <TextVar>
                      Área
                    </TextVar>
                  </CardTextVar>
                  <CardValuesVar>
                    <ValuesVar>
                      50
                    </ValuesVar>
                  </CardValuesVar>
                </CardTextValues>
                <CardTextValues>
                  <CardTextVar>
                    <TextVar>
                      Área
                    </TextVar>
                  </CardTextVar>
                  <CardValuesVar>
                    <ValuesVar>
                      50
                    </ValuesVar>
                  </CardValuesVar>
                </CardTextValues>
                <CardTextValues>
                  <CardTextVar>
                    <TextVar>
                      Área
                    </TextVar>
                  </CardTextVar>
                  <CardValuesVar>
                    <ValuesVar>
                      50
                    </ValuesVar>
                  </CardValuesVar>
                </CardTextValues>
              </CardValues>
              <CardBtnEditar>
                <BtnEditar onPress = {() =>{
                  navigate('Clima')}}>
                  <TextBtnEditar>
                    Editar Campos
                  </TextBtnEditar>
                </BtnEditar>
              </CardBtnEditar>
            </ClimaValues>
            <AnimalValues>
              <ValueTitle>
                Animal
              </ValueTitle>
              <CardValues>
                <CardTextValues>
                  <CardTextVar>
                    <TextVar>
                      Área
                    </TextVar>
                  </CardTextVar>
                  <CardValuesVar>
                    <ValuesVar>
                      50
                    </ValuesVar>
                  </CardValuesVar>
                </CardTextValues>
                <CardTextValues>
                  <CardTextVar>
                    <TextVar>
                      Área
                    </TextVar>
                  </CardTextVar>
                  <CardValuesVar>
                    <ValuesVar>
                      50
                    </ValuesVar>
                  </CardValuesVar>
                </CardTextValues>
                <CardTextValues>
                  <CardTextVar>
                    <TextVar>
                      Área
                    </TextVar>
                  </CardTextVar>
                  <CardValuesVar>
                    <ValuesVar>
                      50
                    </ValuesVar>
                  </CardValuesVar>
                </CardTextValues>
                <CardTextValues>
                  <CardTextVar>
                    <TextVar>
                      Área
                    </TextVar>
                  </CardTextVar>
                  <CardValuesVar>
                    <ValuesVar>
                      50
                    </ValuesVar>
                  </CardValuesVar>
                </CardTextValues>
                <CardTextValues>
                  <CardTextVar>
                    <TextVar>
                      Área
                    </TextVar>
                  </CardTextVar>
                  <CardValuesVar>
                    <ValuesVar>
                      50
                    </ValuesVar>
                  </CardValuesVar>
                </CardTextValues>
                <CardTextValues>
                  <CardTextVar>
                    <TextVar>
                      Área
                    </TextVar>
                  </CardTextVar>
                  <CardValuesVar>
                    <ValuesVar>
                      50
                    </ValuesVar>
                  </CardValuesVar>
                </CardTextValues>
                <CardTextValues>
                  <CardTextVar>
                    <TextVar>
                      Área
                    </TextVar>
                  </CardTextVar>
                  <CardValuesVar>
                    <ValuesVar>
                      50
                    </ValuesVar>
                  </CardValuesVar>
                </CardTextValues>
              </CardValues>
              <CardBtnEditar>
                <BtnEditar onPress = {() =>{
                  navigate('Economia')}}>
                  <TextBtnEditar>
                    Editar Campos
                  </TextBtnEditar>
                </BtnEditar>
              </CardBtnEditar>
            </AnimalValues>
          </ScrollView>
        </BackgroundValues>
        <BtnSimular style = {styles.btnSimular}>
          <TextTouchable>
            Simular
          </TextTouchable>
        </BtnSimular>
      </Background>
    )
  }
}

const styles = StyleSheet.create({
  btnSimular:{
    shadowColor: "#000",
    shadowOffset: {
    width: 2,
    height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  }
})