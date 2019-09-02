import React, { Component } from 'react'
import NavigationService from 'App/Services/NavigationService'
import AppNavigator from 'App/Navigators/AppNavigator'
import { View } from 'react-native'
import styles from './RootScreenStyle'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'

class RootScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <AppNavigator
          ref={(navigatorRef) => {
            NavigationService.setTopLevelNavigator(navigatorRef)
          }}
        />
      </View>
    )
  }
}

RootScreen.propTypes = {
  startup: PropTypes.func,
}

const mapStateToProps = (state) => ({})

export default connect(mapStateToProps)(RootScreen)
