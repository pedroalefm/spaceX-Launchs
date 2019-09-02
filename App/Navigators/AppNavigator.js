import { createAppContainer, createStackNavigator } from 'react-navigation'

import SplashScreen from 'App/Containers/SplashScreen/SplashScreen'
import HomeScreen from 'App/Containers/Home/HomeScreen'
import DetailScreen from 'App/Containers/Detail/DetailScreen'
import ArticleScreen from 'App/Containers/Article/ArticleScreen'

const StackNavigator = createStackNavigator(
  {
    SplashScreen: SplashScreen,
    MainScreen: HomeScreen,
    DetailScreen: DetailScreen,
    Article: ArticleScreen,
  },
  {
    initialRouteName: 'MainScreen',
    headerMode: 'none',
  }
)

export default createAppContainer(StackNavigator)
