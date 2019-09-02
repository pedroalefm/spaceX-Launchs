import { createAppContainer, createStackNavigator } from 'react-navigation'

import SplashScreen from 'App/Containers/SplashScreen/SplashScreen'
import HomeScreen from 'App/Containers/Home/HomeScreen'
import DetailScreen from 'App/Containers/Detail/DetailScreen'

const StackNavigator = createStackNavigator(
  {
    SplashScreen: SplashScreen,
    MainScreen: HomeScreen,
    DetailScreen: DetailScreen,
  },
  {
    initialRouteName: 'MainScreen',
    headerMode: 'none',
  }
)

export default createAppContainer(StackNavigator)
