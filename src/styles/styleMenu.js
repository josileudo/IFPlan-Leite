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
height:85%;
width: 95%;
justify-content:center;
align-items:center;
border-radius:12px;
`
/* ===========Tudo para animalValue =============*/
export const AreaValues = styled.View`
background-color: #FFFF;
height:${normalize(160)};
width: 100%;
margin-top:10px;
border-radius:8px;
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
border-bottom-color:#B2B6B2;
`
export const CardTextVar = styled.View`
width:70%;
justify-content:center;
`
export const CardValuesVar = styled.View`
width:30%;
justify-content:center;
`
export const CardBtnEditar = styled.View`
width: 100%;
height: ${normalize(25)}; ;
align-items:flex-end;
justify-content:center;
margin-top: ${normalize(5)};
`
export const BtnEditar = styled.TouchableOpacity.attrs({
  activeOpacity:0.7,
  pressDelay:0.9,
})`
border-radius:12px;
width:${normalize(130)};
align-items:center;
height:95%;
right: ${normalize(10)};
justify-content:center;
`
export const TextBtnEditar = styled.Text`
color: #29BB9D;
left: ${normalize(20)};
text-align:center;
font-weight:bold;
font-size: ${normalize(20)};
`

export const TextVar = styled.Text`
align-items:center;
font-size:${normalize(16)};
`
export const ValuesVar = styled.Text`
align-items:center;
text-align:right;
right:${normalize(5)};
font-size:${normalize(16)};
`

export const EconomiaValues = styled.View`
background-color: #FFFF;
height:${normalize(205)};
width: 100%;
margin-top:10px;
border-radius:8px;
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
height:${normalize(380)};
width: 100%;
margin-top:10px;
border-radius:8px;
`
export const AnimalValues = styled.View`
background-color: #FFFF;
height:${normalize(380)};
width: 100%;
border-radius:8px;
margin-top:10px;
`
export const BtnSimular = styled.TouchableOpacity.attrs({
  activeOpacity:0.9,
  pressDelay:0.8,
})`
width: ${normalize(140)};
border-radius:12px;
align-items:center;
justify-content:center;
height:${normalize(40)};
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
