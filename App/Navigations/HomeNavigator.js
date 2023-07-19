import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Text, View } from 'react-native'

import Home from '../Screen/Home'
import ReadNews from '../Screen/ReadNews'

const Stack = createStackNavigator()

const HomeNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
            initialRouteName='Home'
        >
            <Stack.Screen
                name='Home'
                component={Home}
            />
            <Stack.Screen
                name='read-news'
                component={ReadNews}
            />
        </Stack.Navigator>
    )
}

export default HomeNavigator