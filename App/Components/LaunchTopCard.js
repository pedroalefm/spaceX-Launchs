import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { Card } from 'react-native-elements'
import Style from './LaunchCardStyle'
import { withNavigation } from 'react-navigation'

const LaunchTopCard = (props) => {
  return (
    <Card
      title={props.launch.mission_name}
      image={{
        uri:
          props.launch.links && props.launch.links.mission_patch_small
            ? props.launch.links.mission_patch_small
            : 'https://www.multichannel.com/.image/t_share/MTU0NTMzNjYyODQ5NzcwOTIz/spacex-logo.png',
      }}
      containerStyle={Style.containerTop}
    >
      <Text numberOfLines={3}>
        {props.launch.details ? props.launch.details : 'Lançamento sem descrição'}
      </Text>
      <TouchableOpacity
        onPress={() => props.navigation.push('DetailScreen', { launch: props.launch })}
      >
        <Text style={Style.about}>Saber mais</Text>
      </TouchableOpacity>
    </Card>
  )
}
export default withNavigation(LaunchTopCard)
