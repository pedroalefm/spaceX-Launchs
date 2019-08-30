import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { Card } from 'react-native-elements'
import Style from './LaunchCardStyle'
const LaunchTopCard = (props) => {
  return (
    <Card
      title={props.launch.mission_name}
      image={{ uri: props.launch.links && props.launch.links.mission_patch_small }}
      containerStyle={Style.containerTop}
    >
      <Text numberOfLines={3}>{props.launch.details}</Text>
      <TouchableOpacity>
        <Text style={Style.about}>Saber mais</Text>
      </TouchableOpacity>
    </Card>
  )
}
export default LaunchTopCard
