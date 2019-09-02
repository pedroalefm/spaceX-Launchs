import React from 'react'
import { Text, View } from 'react-native'
import styles from './SplashScreenStyle'

export default class SplashScreen extends React.Component {
  // componentDidMount() {
  //   setTimeout(() => {
  //     this.props.navigation.push('MainScreen')
  //   }, 1000)
  // }
  render() {
    this.props.navigation.push('MainScreen')
    return (
      <View style={styles.container}>
        <View style={styles.logo}>
          <Text>LOGO</Text>
        </View>
      </View>
    )
  }
}
