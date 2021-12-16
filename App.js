import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './navigations/tabs';
import Tabs2 from './navigations/tabs2';
import Tabs3 from './navigations/tabs3';

export default function App() {
  return (
//     <NavigationContainer>
//  <Tabs/> 
// <Tabs2/>
//     </NavigationContainer>
    <Tabs3/>

  );
}


