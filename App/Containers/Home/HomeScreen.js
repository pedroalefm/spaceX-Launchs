import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import { SearchBar } from 'react-native-elements'

import Style from './HomeScreenStyle'

import LaunchTopCard from '../../Components/LaunchTopCard'
import LaunchCard from '../../Components/LaunchCard'
import LaunchCardError from '../../Components/LaunchCardError'

import { Creators as LaunchActions } from '../../Store/Ducks/launchs'
import { Creators as LastLaunchActions } from '../../Store/Ducks/lastLaunch'

import { bindActionCreators } from 'redux'

import _ from 'lodash'
import axios from 'axios'

const HomeScreen = (props) => {
  const [search, setSearch] = useState('')
  const [searchResult, setSearchResult] = useState([])

  const [loading, setLoading] = useState(false)
  const [lastLaunch, setLastLaunch] = useState({})
  const [launchs, setLaunchs] = useState([])

  const [launchState, setLaunchState] = useState({
    launchs: [],
    lastLaunch: {},
  })

  useEffect(() => {
    setLoading(true)
    if (props.launchs.length > 0 && props.lastLaunch) {
      setLaunchState({ lastLaunch: props.lastLaunch, launchs: props.launchs })
      setLoading(false)
    } else {
      fetchLaunch()
    }
  }, [])

  useEffect(() => {
    const query = search.toLowerCase()
    const result = _.filter(launchState.launchs, (launch) => {
      if (launch.mission_name.toLowerCase().includes(query) && query != '') {
        return true
      }
    })
    setSearchResult(result)
  }, [search])

  const fetchLaunch = async () => {
    const urlLaunch = 'https://api.spacexdata.com/v3/launches'
    const urlLastLaunch = 'https://api.spacexdata.com/v3/launches/latest'
    const lastLaunch = await axios.get(urlLastLaunch).then((res) => {
      return res.data
    })
    const launchs = await axios.get(urlLaunch).then((res) => {
      return res.data
    })
    setLaunchState({ lastLaunch: lastLaunch, launchs: launchs })
    props.addLaunch.addLaunchs(launchs)
    props.addLastLaunch.addLastLaunch(lastLaunch)
    setLoading(false)
  }

  return (
    <View style={Style.container}>
      {console.log(props)}
      <SearchBar placeholder="Nome do lançamento..." onChangeText={setSearch} value={search} />
      {loading ? (
        <ActivityIndicator size="large" color="#fff" />
      ) : (
        <View>
          {search ? (
            <View>
              <Text style={Style.lastTitle}>Resultado</Text>
              {searchResult.length > 0 ? (
                <LaunchTopCard launch={searchResult[0]} />
              ) : (
                <LaunchCardError />
              )}
            </View>
          ) : (
            <View>
              <Text style={Style.lastTitle}>Último lançamento</Text>
              <LaunchTopCard launch={launchState.lastLaunch} />
            </View>
          )}
          <Text style={Style.lastTitle}>Lançamentos</Text>
          <View>
            <FlatList
              horizontal
              data={launchState.launchs}
              renderItem={({ item }) => <LaunchCard launch={item} />}
            />
          </View>
        </View>
      )}
    </View>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    addLaunch: bindActionCreators(LaunchActions, dispatch),
    addLastLaunch: bindActionCreators(LastLaunchActions, dispatch),
  }
}

const mapStateToProps = (state) => ({
  launchs: state.launchs,
  lastLaunch: state.last,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen)
