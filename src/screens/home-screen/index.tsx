import React from 'react'
import { Text, View } from 'react-native'
import { useHome } from '../../hooks/useHome'

export default function HomeScreen() {
  const { } = useHome()
  
  return (
    <View>
      <Text>HOME SCREEN</Text>
    </View>
  )
}
