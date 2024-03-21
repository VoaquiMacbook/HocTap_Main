import { View, Text, Image, StyleSheet } from 'react-native'
import React, { useContext, useState } from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { AppContext } from './AppContext'
// tabs
import Home from './tabs/Home'
import Cart from './tabs/Cart'
import Favorite from './tabs/Favorite'
import Notification from './tabs/Notification'

const tabScreenOptions = ({ route }) => {
    const { cart } = useContext(AppContext);
    // console.log(cart);
    return {
        headerShown: false,
        tabBarStyle: {
            backgroundColor: 'white'
        },

        tabBarIcon: ({ focused }) => {
            if (route.name == 'Home') {
                if (focused) {
                    return <Image source={require('../../../assets/images/home_.png')} />
                }
                return <Image source={require('../../../assets/images/home_.png')} />
            } else if (route.name == 'Search') {
                if (focused) {
                    return (
                        <View>
                            <Image source={require('../../../assets/images/serach_.png')} />
                            {/* <Text style={styles.Cart}>{cart.reduce((total, item) => total + item.number, 0)}</Text> */}
                        </View>

                    );
                }
                return (
                    <View>
                        <Image source={require('../../../assets/images/serach_.png')} />
                        {/* <Text style={styles.Cart}>{cart.reduce((total, item) => total + item.number, 0)}</Text> */}
                    </View>

                );
            }
            else if (route.name == 'Favorite') {
                if (focused) {
                    return (
                        <View>
                            <Image source={require('../../../assets/images/notification_.png')} />
                        </View>
                    )
                }
                return (
                    <View>
                        <Image source={require('../../../assets/images/notification_.png')} />
                          <Text style={styles.Cart}>{cart.reduce((total, item) => total + item.number, 0)}</Text>
                    </View>
                )

            } else if (route.name == 'Profile') {
                if (focused) {
                    return <Image source={require('../../../assets/images/add_.png')} />
                }
                return <Image source={require('../../../assets/images/add_.png')} />
            }
        },
        tabBarLabel: ({ focused }) => {
            if (route.name == 'Home') {
                if (focused) {
                    return <Text style={{ color: '#D17842' }}>Home</Text>
                }
            } else if (route.name == 'Search') {
                if (focused) {
                    return (<Text style={{ color: '#D17842' }}>Search</Text>
                    );
                }
            }
            else if (route.name == 'Favorite') {
                if (focused) {
                    return <Text style={{ color: '#D17842' }}>Favorite</Text>
                }
            }
            else if (route.name == 'Profile') {
                if (focused) {
                    return <Text style={{ color: '#D17842' }}>Profile</Text>
                }
            }
        }
    }
}

import Search from './tabs/Search'
import Profile from './tabs/Profile'
const Tab = createBottomTabNavigator();
const MainTabNavigation = () => {

    return (
        <Tab.Navigator screenOptions={tabScreenOptions}>
            <Tab.Screen name="Home" component={Home} />
            {/* <Tab.Screen name="Cart" component={Cart} /> */}
            <Tab.Screen name="Search" component={Search} />
            <Tab.Screen name="Favorite" component={Favorite} />
            <Tab.Screen name="Profile" component={Profile} />
            
        </Tab.Navigator>
    )
}

// stacks
import Detail from './stacks/Detail'
import Payment from './stacks/Payment'
import Settings from './stacks/Settings'
import Personal from './stacks/Personal'
import History from './stacks/History'
import Address from './stacks/Address'
import Login from '../authen/Login'
import About from './stacks/About'
import Help from './stacks/Help'
import Register from '../authen/Register'


const Stack = createNativeStackNavigator()

const MainStackNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="MainTabNavigation" component={MainTabNavigation} />
            <Stack.Screen name="Detail" component={Detail} />
            <Stack.Screen name="Payment" component={Payment} />
            <Stack.Screen name="Settings" component={Settings} />
            <Stack.Screen name="Personal" component={Personal} />
            <Stack.Screen name="History" component={History} />
            <Stack.Screen name="Address" component={Address} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="About" component={About} />
            <Stack.Screen name="Help" component={Help} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Cart" component={Cart} />
        </Stack.Navigator>
    )
}

export default MainStackNavigation

const styles = StyleSheet.create({
    Cart: {
        backgroundColor: 'red',
        width: 10,
        height: 10,
        borderRadius: 4,
        position: 'absolute',
        bottom: 0,
        right: 0,
        color: 'white',
        fontSize: 8,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    }
})