import React from 'react'
import { View, WebView, ActivityIndicator } from 'react-native'

const ArticleScreen = (props) => {
  const loaderIndicator = () => <ActivityIndicator size="large" color="#0C6D57" />
  return (
    <WebView
      source={{ uri: props.navigation.state.params.articleLink }}
      style={{ marginTop: 20 }}
      startInLoadingState={true}
      renderLoading={loaderIndicator}
    />
  )
}

export default ArticleScreen
