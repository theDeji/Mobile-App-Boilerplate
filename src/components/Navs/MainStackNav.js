import React from "react";
import { Easing } from "react-native";
import {
  createStackNavigator,
  TransitionPresets,
  CardStyleInterpolators,
  forHorizontalIOS,
} from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import colors from "../../config/colors";

import HomeScreen from "../../screens/HomeScreen";
import TrendScreen from "../../screens/TrendScreen";
import PitchScreen from "../../screens/PitchScreen";
import ProfileScreen from "../../screens/ProfileScreen";
import SettingsScreen from "../../screens/SettingsScreen";
import SupportScreen from "../../screens/SupportScreen";
import EditProfileScreen from "../../screens/EditProfileScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const config = {
  animation: "spring",
  config: {
    stifness: 1000,
    damping: 5,
    mass: 3,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const closeConfig = {
  animation: "timing",
  config: {
    duration: 10,
    easing: Easing.linear,
  },
};

const MainStackNav = () => {
  return (
    <Stack.Navigator
      headerMode="none"
      animation="fade"
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: "horizontal",
        ...TransitionPresets.SlideFromRightIOS,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Trends" component={TrendScreen} />
      <Stack.Screen name="Pitch" component={PitchScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="Support" component={SupportScreen} />
      {/* <Stack.Screen name="Edit" component={EditProfileScreen} /> */}
    </Stack.Navigator>
  );
};

export default MainStackNav;
