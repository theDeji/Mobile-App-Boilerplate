import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import MainStackNav from './src/components/Navs/MainStackNav'
import WelcomeScreen from './src/screens/WelcomeScreen';
import OnboardingScreen from './src/screens/OnboardingScreen';
import LoginScreen from './src/screens/LoginScreen'
import HomeScreen from './src/screens/HomeScreen'
import Tabs from './src/components/utils/Tabs';
import Screen from './src/components/utils/Screen'
import ProfileScreen from './src/screens/ProfileScreen';
import BottomTabs from './src/components/Navs/BottomTabs';
import DrawerNav from './src/components/Navs/DrawerNav';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* <DrawerNav /> */}
      <Stack.Navigator headerMode="none">
        <Stack.Screen
          name="Onboard"
          component={OnboardingScreen}
        />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={DrawerNav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}