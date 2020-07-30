import {StyleSheet} from 'react-native'
import normalize from 'react-native-normalize'

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#FFFF',
    color: '#000',
    width: '95%',
    height: normalize(45),
    borderRadius: normalize(10),
    fontSize: normalize (20),
    fontWeight: 'bold',
    padding: 5,
  },
  icon: {
    shadowColor: "#29BB9D",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0,
    shadowRadius: 1.84,
    elevation: 5,
    color: '#FFFF',
  }
})

export default styles
