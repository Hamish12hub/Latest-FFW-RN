import { View, Text } from 'react-native'
import React from 'react'

export default function CAFEasyScreen({route}) {

  const { Continent, score, topScore, ImageUri } = route.params;

  return (
    <View>
      <Text>CAFEasyScreen</Text>
      <Text>{Continent}</Text>
    </View>
  )
}

