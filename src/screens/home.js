
import React, {Component, useRef} from 'react';
import {Background, TextTouchable, TouchableOpacity, CardButton, Text, CardLogo} from '../styles/styleHome'
import {Animated, View} from 'react-native';
import LottieView from 'lottie-react-native';
import normalize from 'react-native-normalize'
import {StyleSheet} from 'react-native'

export default function Home ({navigation}){
    return (
      <Background>   
        <CardLogo>
          <Animated.View >
            <LottieView
              style = {styles.container}
              resizeMode = 'contain'
              source= {require('../assets/logo.json')}
              autoPlay 
              loop
            />
          </Animated.View>
          <Text>
            IFPlan Leite
          </Text>
        </CardLogo>
        <CardButton>
          <TouchableOpacity onPress={() => {
              navigation.navigate('Menu')}} 
              title = "Inciar" 
              style = {{
                shadowColor: "#000",
                shadowOffset: {
                  width: 2,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
              elevation: 5
              }}>
            <TextTouchable>
              Iniciar
            </TextTouchable>
          </TouchableOpacity>
        </CardButton>
      </Background>
    )
  }


const styles = StyleSheet.create({
  container:{
    width: normalize(220),
    height: normalize(220),
    top:normalize(10),
  }, 
  text:{
    fontSize: normalize(50),
    elevation: 5,
  }
})