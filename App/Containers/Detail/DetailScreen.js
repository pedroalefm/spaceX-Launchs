import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'

import Style from './DetailScreenStyle'
import Video from 'react-native-video'
import YouTube from 'react-native-youtube'

const DetailScreen = (props) => {
  const [launch, setLaunch] = useState({})

  useEffect(() => {
    const launchProp = props.navigation.state.params.launch
    setLaunch(launchProp)
  }, [])

  const getVideoId = (url) => {
    const videoUrl = url
    const regex = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/
    const match = videoUrl && videoUrl.match(regex)
    if (match) {
      return match[2]
    }
  }

  return (
    <View style={Style.container}>
      <View style={Style.body}>
        {console.log(launch)}
        <Text style={Style.title}>{launch && launch.mission_name}</Text>
        <View style={Style.detail}>
          <YouTube
            apiKey="AIzaSyCEVCYOq5PVW4fFGYBFCKSpmYvb5ufEI1c"
            videoId={getVideoId(props.navigation.state.params.launch.links.video_link)}
            loop
            conrols={1}
            play
            style={{ alignSelf: 'stretch', height: 200 }}
          />
          <ScrollView style={Style.scroll}>
            <TouchableOpacity
              onPress={() =>
                props.navigation.navigate('Article', {
                  articleLink: launch.links.article_link,
                })
              }
            >
              <Text style={Style.articleText}>Abrir artigo</Text>
            </TouchableOpacity>
            <Text style={Style.detailText}>{launch && launch.details}</Text>
          </ScrollView>
        </View>
      </View>
    </View>
  )
}

export default DetailScreen
