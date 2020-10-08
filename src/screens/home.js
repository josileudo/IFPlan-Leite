
import React, {Component, useRef} from 'react';
import {Background, 
  TextTouchable, 
  TouchableOpacity, Image, CardButton, Text, CardLogo} from '../styles/styleHome'
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
          <Text style = {{elevation:5}}>
            IFPlan Leite
          </Text>
        </CardLogo>
        <CardButton>
          <TouchableOpacity onPress={() => {
              navigation.navigate('Menu')}} 
              title = "Inciar"
              hitSlop = {{top: 20, bottom: 20, left: 50, right: 50 }}
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
        <Image 
          source={require('../assets/lapis.png')}
        />
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