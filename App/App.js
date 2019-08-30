import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './Store'
import RootScreen from './Containers/Root/RootScreen'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootScreen />
      </Provider>
    )
  }
}
