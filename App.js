import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Text, View, ImageBackground, Easing } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  TransitionPresets,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import WelcomeScreen from "./src/screens/WelcomeScreen";
import OnboardingScreen from "./src/screens/OnboardingScreen";
import DrawerNav from "./src/components/Navs/DrawerNav";
import ProfileScreen from "./src/screens/ProfileScreen";
import SettingsScreen from "./src/screens/SettingsScreen";
import TrendScreen from "./src/screens/TrendScreen";
import PitchScreen from "./src/screens/PitchScreen";
import BottomTabs from "./src/components/Navs/BottomTabs";
import MainStackNav from "./src/components/Navs/MainStackNav";
import SwipeActions from "./src/components/utils/SwipeActions";
import EditProfileScreen from "./src/screens/EditProfileScreen";
// import { forHorizontalIOS } from "@react-navigation/stack/lib/typescript/src/TransitionConfigs/CardStyleInterpolators";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        {/* <Stack.Screen name="Onboard" component={OnboardingScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} /> */}
        <Stack.Screen name="Login" component={DrawerNav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
