import { View, Text } from 'react-native'
import { Stack } from 'expo-router'
import React from 'react'
import { StatusBar } from 'expo-status-bar'

import GlobalProvider from '../../context/GlobalProvider';

const AuthLayout = () => {
  return (
    <>
    <GlobalProvider>
    <Stack>
      <Stack.Screen
      name="sign-in"
      options={{
        headerShown: false
      }}
      />
      <Stack.Screen
      name="sign-up"
      options={{
        headerShown: false
      }}
      />
    </Stack>
    </GlobalProvider>

    <StatusBar backgroundColor="#161622" style="light"/>

    </>
  )
}

export default AuthLayout