import { StyleSheet } from 'react-native'
import Fonts from 'App/Theme/Fonts'
import Colors from 'App/Theme/Colors'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  backBtn: {
    marginLeft: 10,
    marginTop: 10,
  },
  body: {
    marginTop: 45,
    backgroundColor: '#fff',
    margin: 20,
    borderRadius: 8,
  },
  title: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 26,
    marginTop: 30,
    marginLeft: 14,
    marginBottom: -10,
  },
  detail: {
    alignItems: 'center',
    marginTop: 20,
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  scroll: {
    marginTop: 20,
    marginLeft: 8,
    marginRight: 8,
    marginBottom: 15,
  },
  detailText: {
    fontSize: 14,
    marginTop: 10,
    alignSelf: 'center',
  },
  articleText: {
    fontSize: 16,
    alignSelf: 'center',
    fontWeight: 'bold',
    color: Colors.green,
  },
})
