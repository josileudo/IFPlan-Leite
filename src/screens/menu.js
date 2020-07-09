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
                      Área (ha)
                    </TextVar>
                  </CardTextVar>
                  <CardValuesVar>
                    <ValuesVar>
                      10
                    </ValuesVar>
                  </CardValuesVar>
                </CardTextValues>
                <CardTextValues>
                  <CardTextVar>
                    <TextVar>
                      Número de Piquetes (unid)
                    </TextVar>
                  </CardTextVar>
                  <CardValuesVar>
                    <ValuesVar>
                      1
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
                      Investimento por L (R$/L)
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
                      Renda familiar (R$/mês)
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
                      Taxa de depreciação (%a.a.)
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
                      Precipitação (mm)
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
                      Temperatura máxima (ºC)
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
                      Temperatura mínima (ºC)
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
                      Umidade Relativa (%)
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
                      Velocidade do Vento (m/s)
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
                      Dose de N (dose)
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
                      Água e outros usos (L/mês)
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
                      Peso corporal (Kg)
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
                      Produção de leite (L/vaca/dia)
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
                      Teor de gordura no leite (%)
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
                      Teor de PB no leite (%)
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
                      Deslocamento horizontal (m)
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
                      Deslocamento vertical (m)
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
                      Vacas em lactação (%)
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
                  navigate('Animal')}}>
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