import styled from 'styled-components/native'
import normalize from 'react-native-normalize'

export const Background = styled.View`
background-color:#29BB9D;
display:flex;
height:100%;
width:100%;
align-items:center;
`
export const KeyboardAvoidingView = styled.KeyboardAvoidingView`
flex:1;
height:100%;
width:100%;
align-items:center;
position:absolute;
background-color: #29BB9D;
`

//card que vai assegura o nome clima e a outra informação
export const CardLogo = styled.View`
width:100%;
justify-content:center;
height:${normalize(70)}px;
`
//Texto que ficará na logomarca
export const TextLogo = styled.Text`
text-align:center;
font-size:${normalize(35)}px;
color: #FFFF;
width: 100%;
font-weight:bold;
`
export const TextInfo = styled.Text`
text-align:center;
font-size:${normalize(22)}px;
color: #ffff;
width:100%;
`

// Card de entrada de informações
export const CardInfo = styled.View`
width:100%;
align-items:center;
display:flex;
margin-top: ${normalize(10)}px;
`
export const CardInput = styled.View`

width:100%;
height:${normalize(75)}px;
margin-top:${normalize(5)}px;
flex-direction:column;
align-items:center;
`
export const TextAnu = styled.Text`
font-size:${normalize(15)}px;
color: #f4f4f4;
font-weight:normal;
margin-top:${normalize(2)}px;
margin-bottom:${normalize(5)}px;
width:90%;
text-align:left;
`

export const TextInput = styled.TextInput`
background-color: #ffff;
width:95%;
color:#000;
font-weight:bold;
font-size:${normalize(28)}px;
justify-content:center;
height:${normalize(45)}px;
border-radius:${normalize(8)}px;
padding: 5px;
`

export const ScrollView = styled.ScrollView`
flex:1;
width:100%;
`

export const CardEsp = styled.View`
bottom:${normalize(50)}px;
right:${normalize(20)}px;
border-radius: ${normalize(100)}px;
position: absolute;
background-color:#29BB9D;
`
export const BtnSalvar = styled.TouchableOpacity.attrs({
    activeOpacity: 0.6,
    pressDelay: 0.8,
})`
top: ${normalize(20)}px;
left:${normalize(100)}px;
width: ${normalize(120)}px;
height: ${normalize(40)}px;
margin-bottom: ${normalize(20)}px;
border-radius: 5px;
align-items:center;
justify-content: center;
background-color:#30D0AF;
box-shadow: 6px 8px rgba(0, 0, 0, 0.25);
`

export const TextEnviar = styled.Text`
font-size: ${normalize(20)}px;
text-align: center;
font-weight: bold;
color:white;
`