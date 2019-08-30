import { createAppContainer, createStackNavigator } from 'react-navigation'

import SplashScreen from 'App/Containers/SplashScreen/SplashScreen'
import HomeScreen from 'App/Containers/Home/HomeScreen'

const StackNavigator = createStackNavigator(
  {
    SplashScreen: SplashScreen,
    MainScreen: HomeScreen,
  },
  {
    initialRouteName: 'SplashScreen',
    headerMode: 'none',
  }
)

export default createAppContainer(StackNavigator)
