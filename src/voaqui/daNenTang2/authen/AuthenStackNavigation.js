import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Test_React2 from '../Test_React2'
import HomePage from '../HomePage'
import Detail from '../Detail'
const Stack = createNativeStackNavigator()
const AuthenStackNavigation = () => {
    
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name='Test_React2' component={Test_React2} />
                <Stack.Screen name='HomePage' component={HomePage} />
                <Stack.Screen name='Detail' component={Detail} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AuthenStackNavigation