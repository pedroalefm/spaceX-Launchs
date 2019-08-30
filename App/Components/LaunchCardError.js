import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { Card } from 'react-native-elements'
import Style from './LaunchCardStyle'
const LaunchCardError = (props) => {
  return (
    <Card
      title={'Lançamento não encontrado'}
      image={{
        uri:
          'https://st.depositphotos.com/1334572/4574/v/950/depositphotos_45749041-stock-illustration-not-found.jpg',
      }}
      containerStyle={Style.containerTop}
    >
      <Text numberOfLines={3}></Text>
      <TouchableOpacity>
        <Text style={Style.about}></Text>
      </TouchableOpacity>
    </Card>
  )
}
export default LaunchCardError
