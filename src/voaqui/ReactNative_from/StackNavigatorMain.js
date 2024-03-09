import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import Setting from '../apps/main/tabs/Setting'
import Profile from '../apps/main/tabs/Profile';
import Detail from '../apps/main/stacks/Detail';
const Stack = createNativeStackNavigator()
const StackNavigatorMain = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator
    initialRouteName='Profile' 
    screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Setting" component={Setting} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
    </NavigationContainer>
    
  )
}

export default StackNavigatorMain

const styles = StyleSheet.create({})