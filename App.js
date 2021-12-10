import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import {createSwitchNavigator,createAppContainer} from 'react-navigation';
import {AppTabNavigator} from './components/AppTabNavigator';
import {AppDrawerNavigator} from './components/AppDrawerNavigator'
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
   <AppContainer/>
   </SafeAreaProvider>
  );
}

const switchNavigator= createSwitchNavigator({
  WelcomeScreen: {screen: WelcomeScreen},
  Drawer: {screen: AppDrawerNavigator}
})

const AppContainer= createAppContainer(switchNavigator)