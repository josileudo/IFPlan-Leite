import styled from 'styled-components/native'
import {Dimensions, PixelRatio} from 'react-native'
import normalize from 'react-native-normalize'

export const Background = styled.View `
background-color:#29BB9D;
display:flex;
height:100%;
width:100%;
align-items:center;
`
export const KeyboardAvoidingView= styled.KeyboardAvoidingView `
background-color:#29BB9D;
display:flex;
height:100%;
width:100%;
align-items:center;
`

//card que vai assegura o nome clima e a outra informação
export const CardLogo = styled.View `
background-color: #ECECEC;
width:100%;
height:${normalize(150)};
`
//Texto que ficará na logomarca
export const TextLogo = styled.Text`
text-align:center;
font-size:${normalize(35)};
color: #6B6B6B; /* #FFFF*/
width:100%;
background-color:green;
padding:20px;
font-weight:bold;
`
export const TextInfo = styled.Text`
text-align:center;
font-size:${normalize(18)};
color: #545454; /** #ffff*/
width:100%;
padding:10px;
`

// Card de entrada de informações
export const CardInfo = styled.View `
background-color: #ECECEC;
width:100%;
align-items:center;
display:flex;
margin-top: ${normalize(10)};
`
export const CardInput = styled.View `
background-color: #ECECEC;
width:100%;
height:${normalize(75)};
margin-top:${normalize(5)};
flex-direction:column;
align-items:center;
`
export const TextAnu = styled.Text`
font-size:${normalize(13)};
color: #6B6B6B;
font-weight:normal;
margin-top:${normalize(2)};
margin-bottom:${normalize(5)};
width:90%;
text-align:left;
`

export const TextInput = styled.TextInput`
background-color: #ffff;
width:95%;
color:#29BB9D;
font-weight:bold;
font-size:${normalize(25)};
justify-content:center;
height:${normalize(45)};
border-radius:${normalize(8)};
padding: 5px;
`

export const ScrollView = styled.ScrollView`
flex:1;
width:100%;
`

export const CardCheck = styled.TouchableOpacity.attrs({
  activeOpacity:0.6,
}) `
flex:1;
box-shadow:  2px 4px 4px rgba(0, 0, 0, 0.25);
position:absolute;
margin-top:450px;
bottom:35px;
right:30px;
` 

export const CardEsp = styled.View`
width:100%;
height:20px;
background-color:#ECECEC
`
