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
flex:1;
height:100%;
width:100%;
align-items:center;
position:absolute;
background-color: #29BB9D;
`

//card que vai assegura o nome clima e a outra informação
export const CardLogo = styled.View `
width:100%;
justify-content:center;
height:${normalize(70)};
`
//Texto que ficará na logomarca
export const TextLogo = styled.Text`
text-align:center;
font-size:${normalize(35)};
color: #FFFF;
width: 100%;
font-weight:bold;
`
export const TextInfo = styled.Text`
text-align:center;
font-size:${normalize(22)};
color: #ffff;
width:100%;
`

// Card de entrada de informações
export const CardInfo = styled.View `
width:100%;
align-items:center;
display:flex;
margin-top: ${normalize(10)};
`
export const CardInput = styled.View `

width:100%;
height:${normalize(75)};
margin-top:${normalize(5)};
flex-direction:column;
align-items:center;
`
export const TextAnu = styled.Text`
font-size:${normalize(15)};
color: #f4f4f4;
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
font-size:${normalize(28)};
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
bottom:${normalize(50)};
right:${normalize(20)};
top:${normalize(20)};
position:absolute;
` 

export const CardEsp = styled.View`
bottom:${normalize(50)};
right:${normalize(20)};
border-radius: ${normalize(100)};
position: absolute;
background-color:#29BB9D;
`
export const BtnSalvar = styled.TouchableOpacity.attrs({
    activeOpacity:0.6,
})`
bottom:${normalize(50)};
left:${normalize(100)};
top:${normalize(20)};
background-color:#FFFF;
border-radius: 10px;
width: ${normalize(100)};
flex-direction:row;
justify-content: center;
`

export const TextEnviar = styled.Text`
font-size: ${normalize(20)};
text-align: center;
font-weight: bold;
color:#29BB9D;
`