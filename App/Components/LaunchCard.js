import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { Card } from 'react-native-elements'
import Style from './LaunchCardStyle'
const LaunchCard = (props) => {
  return (
    <View style={Style.card}>
      <Card
        title={props.launch.mission_name}
        image={{ uri: props.launch.links && props.launch.links.mission_patch_small }}
        imageStyle={Style.imgSizeMiniCard}
        containerStyle={Style.containerCard}
        titleNumberOfLines={1}
        titleStyle={Style.miniCardTittle}
      >
        {console.log(props)}
        <TouchableOpacity>
          <Text style={Style.about}>Saber mais</Text>
        </TouchableOpacity>
      </Card>
    </View>
  )
}
export default LaunchCard
