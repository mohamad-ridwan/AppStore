import React from 'react'
import { FlatList, StyleSheet } from 'react-native'
import { ThemeMode } from '../../config/theme/theme-mode'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { UseHome } from '../../hooks/UseHome'

export default function HomeScreen() {
  const { backgroundStyle } = ThemeMode()
  const {
    data,
    renderItem
  } = UseHome()

  const theme = backgroundStyle.backgroundColor

  return (
    <SafeAreaProvider>
      <SafeAreaView style={[
        styles.container,
        { backgroundColor: theme }
      ]}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          maxToRenderPerBatch={5}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})