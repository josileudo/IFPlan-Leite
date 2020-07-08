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
    padding: 5,
  },
  icon: {
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  }
})

export default styles
