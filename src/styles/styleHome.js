import styled from 'styled-components/native'
import {Dimensions, PixelRatio} from 'react-native'
import normalize from 'react-native-normalize'

const widthPercentageToDP = widthPercent => {
  const screenWidth = Dimensions.get('window').width
  return PixelRatio.roundToNearestPixel(screenWidth * parseFloat(widthPercent)/100)
}
const heightPercentageToDP = heightPercent => {
  const screenHeight = Dimensions.get('window').height
  return PixelRatio.roundToNearestPixel(screenHeight * parseFloat(heightPercent)/100)
}

export const Background = styled.View `
background-color: #29BB9D; 
flex:1;
margin:auto;
justify-content:center;
align-items:center;
height: ${heightPercentageToDP('100%')};
width: ${widthPercentageToDP('100%')};
`
export const CardLogo = styled.View `
background-color: #29BB9D; 
flex:1;
align-items:center;
justify-content:center;
border-radius:20px;
height: ${heightPercentageToDP('80%')};
width: ${widthPercentageToDP('100%')};
`

export const CardButton = styled.View `
background-color: #29BB9D; 
flex:1;
height: 100%;
width:100%;
align-items: center;
`

export const Text = styled.Text`
color:#FFFF;
font-weight: bold;
text-align: center;
margin-top:${normalize(20)};
font-size: ${normalize(40)};
`
export const TouchableOpacity = styled.TouchableOpacity.attrs({
  activeOpacity:0.9,
  pressDelay:0.8,
}) `
width: ${normalize(200)};
border-radius:12px;
box-shadow: 2px 4px rgba(0, 0, 0, 0.25);
align-items:center;
justify-content:center;
height:${normalize(50)};
top: ${normalize(60)};
background-color: #30D0AF;
`

export const TextTouchable = styled.Text`
align-items:center;
padding:5px;
text-align:center;
color:#FFFF;
font-weight: bold;
font-size: ${normalize(35)};
border-radius: 8px;
`

export const Image = styled.Image`
border-radius: ${normalize(10)};
width: ${normalize(280)};
height: ${normalize(40)};
bottom: ${normalize(50)};
align-items:center;
justify-content:center;
`



