import React from 'react'
import { StyleSheet, SafeAreaView, KeyboardAvoidingView, Platform } from 'react-native'
import LoginHeader from '../../sections/login/header'
import LoginForm from '../../sections/login/form'
export default function LoginScreen() {
  return (
    <SafeAreaView style={styles.container}>
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