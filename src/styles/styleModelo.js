import styled from 'styled-components/native'
import {Dimensions, PixelRatio} from 'react-native'
import normalize from 'react-native-normalize'

export const Background = styled.View `
background-color: #29BB9D; 
flex:1;
height: 100%;
width: 100%;
align-items:center;
`
export const ScrollView = styled.ScrollView`
flex:1;
width:100%;
`
export const BackgroundValues = styled.View`
background-color: #29BB9D;
height:95%;
width: 95%;
justify-content:center;
align-items:center;
border-radius:12px;
`

export const CardValues = styled.View`
width:100%;
padding:1px;
align-items:center;
`
/* =============================================*/

export const CardTextValues = styled.View`
width:95%;
height:${normalize(40)};
margin-top:1%;
flex-direction:row;
border-bottom-width: 1px;
border-bottom-color:#B6B6B6;
`
export const CardTextVar = styled.View`
width:70%;
justify-content:center;
`
export const CardValuesVar = styled.View`
width:30%;
justify-content:center;
`

export const TextBtnEditar = styled.Text`
color: #29BB9D;
text-align:center;
font-weight:bold;
font-size: ${normalize(18)};
`

export const TextVar = styled.Text`
align-items:center;
font-size:${normalize(14)};
`

export const ValuesVar = styled.Text`
align-items:center;
text-align:right;
right:${normalize(5)};
font-size:${normalize(14)};
`

export const ValueTitle = styled.Text`
color: #000;
text-align:left;
left:${normalize(2)};
font-size: ${normalize(20)};
background-color:#FFFF;
top:${normalize(5)};
padding: 5px;
font-weight:bold;
border-radius:12px;
`
export const ClimaValues = styled.View`
background-color: #FFFF;
height:${normalize(360)};
width: 100%;
margin-top:10px;
border-radius:8px;
`
export const AnimalValues = styled.View`
background-color: #FFFF;
height:58%;
width: 100%;
border-radius:8px;
margin-top:10px;
`
export const BtnSimular = styled.TouchableOpacity.attrs({
  activeOpacity:0.9,
  pressDelay:0.8,
})`
width: ${normalize(200)};
border-radius:12px;
align-items:center;
justify-content:center;
height:${normalize(50)};
top: ${normalize(25)};
background-color: #30D0AF;
`
export const TextTouchable = styled.Text`
align-items:center;
padding:5px;
text-align:center;
color:#FFFF;
font-weight: bold;
font-size: ${normalize(25)};
border-radius: 8px;
`
