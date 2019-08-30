import { StyleSheet } from 'react-native'
import Fonts from 'App/Theme/Fonts'
import Colors from 'App/Theme/Colors'

export default StyleSheet.create({
  containerTop: {
    borderRadius: 10,
  },
  containerCard: {
    borderRadius: 10,
    height: 190,
  },
  card: {
    width: 300,
  },
  about: {
    alignSelf: 'flex-end',
    marginTop: 2,
    color: '#383838',
    fontSize: 14,
    fontWeight: 'bold',
  },
  miniCardTittle: {
    marginTop: 3,
    marginBottom: 1,
  },
  imgSizeMiniCard: {
    width: 125,
    height: 125,
    alignSelf: 'center',
    marginTop: 5,
  },
})
