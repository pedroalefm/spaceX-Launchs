import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import { SearchBar } from 'react-native-elements'

import Style from './HomeScreenStyle'

import LaunchTopCard from '../../Components/LaunchTopCard'
import LaunchCard from '../../Components/LaunchCard'
import LaunchCardError from '../../Components/LaunchCardError'

import _ from 'lodash'
import axios from 'axios'

const HomeScreen = (props) => {
  const [loading, setLoading] = useState(false)
  const [lastLaunch, setLastLaunch] = useState({})
  const [launchs, setLaunchs] = useState({})
  const [search, setSearch] = useState('')
  const [searchResult, setSearchResult] = useState([])

  useEffect(() => {
    fetchLaunch()
  }, [])

  useEffect(() => {
    const query = search.toLowerCase()
    const result = _.filter(launchs, (launch) => {
      if (launch.mission_name.toLowerCase().includes(query) && query != '') {
        return true
      }
    })
    setSearchResult(result)
  }, [search])

  const fetchLaunch = async () => {
    const urlLaunch = 'https://api.spacexdata.com/v3/launches'
    const urlLastLaunch = 'https://api.spacexdata.com/v3/launches/latest'
    setLoading(true)
    await axios.get(urlLastLaunch).then((res) => {
      setLastLaunch(res.data)
    })
    await axios.get(urlLaunch).then((res) => {
      setLaunchs(res.data)
    })
    setLoading(false)
  }

  return (
    <View style={Style.container}>
      <SearchBar placeholder="Nome do lançamento..." onChangeText={setSearch} value={search} />
      {loading ? (
        <ActivityIndicator size="large" color="#fff" />
      ) : (
        <View>
          {search ? (
            <View>
              <Text style={Style.lastTitle}>Resultado</Text>
              {console.log(searchResult)}
              {searchResult.length > 0 ? (
                <LaunchTopCard launch={searchResult[0]} />
              ) : (
                <LaunchCardError />
              )}
            </View>
          ) : (
            <View>
              <Text style={Style.lastTitle}>Último lançamento</Text>
              <LaunchTopCard launch={lastLaunch} />
            </View>
          )}
          <Text style={Style.lastTitle}>Lançamentos</Text>
          <View>
            <FlatList
              horizontal
              data={launchs}
              renderItem={({ item }) => <LaunchCard launch={item} />}
            />
          </View>
        </View>
      )}
    </View>
  )
}

export default HomeScreen
