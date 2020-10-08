import {StyleSheet} from 'react-native'
import normalize from 'react-native-normalize'

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#FFFF',
    color: '#29BB9D',
    width: '95%',
    height: normalize(45),
    borderRadius: normalize(10),
    fontSize: normalize (24),
    fontWeight: 'bold',
    elevation: 5,
    padding: 5,
  }
})

export default styles
