import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'

import Style from './DetailScreenStyle'
import Video from 'react-native-video'
import YouTube from 'react-native-youtube'
import Icon from 'react-native-vector-icons/FontAwesome'

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
      <TouchableOpacity onPress={() => props.navigation.navigate('MainScreen')}>
        <Icon name="arrow-left" size={30} color="#fff" style={Style.backBtn} />
      </TouchableOpacity>
      <View style={Style.body}>
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
            {launch.links && (
              <TouchableOpacity
                onPress={() =>
                  props.navigation.navigate('Article', {
                    articleLink: launch.links.article_link,
                  })
                }
              >
                <Text style={Style.articleText}>Abrir artigo</Text>
              </TouchableOpacity>
            )}
            <Text style={Style.detailText}>{launch && launch.details}</Text>
          </ScrollView>
        </View>
      </View>
    </View>
  )
}

export default DetailScreen
