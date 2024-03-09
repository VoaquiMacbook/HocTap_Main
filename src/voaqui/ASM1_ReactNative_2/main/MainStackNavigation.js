import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// tabs
import Home from './tabs/Home'
import Cart from './stacks/Cart'
const Tab = createBottomTabNavigator();
const MainTabNavigation = () => {
    return (
        <Tab.Navigator screenOptions={tabScreenOptions}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Cart" component={Cart} />
            <Tab.Screen name="Favorite" component={Favorite} />
            <Tab.Screen name="Notification" component={Notification} />
        </Tab.Navigator>
    )
}
const MainStackNavigation = () => {
    return (
        <View>
            <Text>MainStackNavigation</Text>
        </View>
    )
}

export default MainStackNavigation

const styles = StyleSheet.create({})