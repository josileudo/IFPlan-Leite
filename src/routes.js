import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import normalize from 'react-native-normalize'

import Home from './screens/home' 
import Menu from './screens/menu'
import Clima from './screens/clima'
import Area from './screens/area/index'
import Animal from './screens/animal'
import Economia from './screens/economia'
import Modelo from './screens/modelo'

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer > 
      <Stack.Navigator initialRouteName = "Home">
        <Stack.Screen name="Home" 
        options = {{
          headerTitle: '',
          headerStyle:{
            backgroundColor:'#29BB9D',
            height:0,
          }
        }} 
        component={Home}/>
        <Stack.Screen 
          name="Menu"
          options = {{
            headerTitle: "",
            headerStyle: {
              backgroundColor: '#29BB9d',
              height:null
            },
            headerTintColor: "#ffffff",
            headerTitleAlign: 'center',
            headerPressColorAndroid: '#ffff',
            headerLeft: null
            }} 
          component={Menu}/>
        <Stack.Screen name="Clima" component={Clima}
          options = {{
            headerTitle: "",
            headerStyle: {
              backgroundColor: '#29BB9D',
              height:30
            },
            headerTintColor: "#ffffff",
            headerTitleAlign: 'center',
            headerPressColorAndroid: '#ffff',
            }}/>
        <Stack.Screen name="Area" component={Area} 
          options = {{
            headerTitle: 'Área',
            headerTitleStyle: {
              fontSize: normalize(30),
            },
            headerBackTitleVisible:false,
            headerStyle: {
              backgroundColor: '#29BB9D',
            },
            headerTintColor: "#ffffff",
            headerTitleAlign: 'center',
            headerPressColorAndroid: '#ffff',
            }}/>
        <Stack.Screen name="Animal" component={Animal}
          options = {{
            headerTitle: "",
            headerStyle: {
              backgroundColor: '#29BB9D',
              height:30
            },
            headerTintColor: "#ffffff",
            headerTitleAlign: 'center',
            headerPressColorAndroid: '#ffff',
            }}/>
        <Stack.Screen name="Economia" component={Economia} 
          options = {{
            headerTitle: "",
            headerStyle: {
              backgroundColor: '#29BB9D',
              height:30
            },
            headerTintColor: "#ffffff",
            headerTitleAlign: 'center',
            headerPressColorAndroid: '#ffff',
            }}/>
        <Stack.Screen name="Modelo" component={Modelo}
          options = {{
            headerTitle: "Para-y-paba",
            headerStyle: {
              backgroundColor: '#29BB9D',
              height:30
            },
            headerTintColor: "#ffffff",
            headerTitleAlign: 'center',
            headerPressColorAndroid: '#ffff',
            }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
