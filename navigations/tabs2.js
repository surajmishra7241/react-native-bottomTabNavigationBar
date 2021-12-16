import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreens from '../screens/homeScreens';
import ChatScreens from '../screens/chatScreens';
import Settings from '../screens/settings';
const Tab=createBottomTabNavigator();

export default function Tabs2() {
    return (
     <Tab.Navigator>
         <Tab.Screen name='Home' component={HomeScreens}/>
         <Tab.Screen name='chat' component={ChatScreens}/>
         <Tab.Screen name='setting' component={Settings}/>
     </Tab.Navigator>
    )
}

const styles = StyleSheet.create({})
