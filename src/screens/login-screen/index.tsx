import React from 'react'
import { StyleSheet, SafeAreaView, KeyboardAvoidingView, Platform } from 'react-native'
import LoginHeader from '../../sections/login/header'
import LoginForm from '../../sections/login/form'
import BasicStatusBar from '../../components/header-bar/BasicStatusBar'
import { ThemeMode } from '../../config/theme/theme-mode'
export default function LoginScreen() {
  const { backgroundStyle } = ThemeMode()
  return (
    <SafeAreaView style={[
      styles.container,
      { backgroundColor: backgroundStyle.backgroundColor }
    ]}>
      <BasicStatusBar />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <LoginHeader />
        <LoginForm />
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    padding: 10
  }
})