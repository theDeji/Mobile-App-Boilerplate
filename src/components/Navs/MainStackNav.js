import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import HomeScreen from "../../screens/HomeScreen";
import TrendScreen from "../../screens/TrendScreen";
import PitchScreen from "../../screens/PitchScreen";
import ProfileScreen from "../../screens/ProfileScreen";
import SettingsScreen from "../../screens/SettingsScreen";
import SupportScreen from "../../screens/SupportScreen";

const Stack = createStackNavigator();

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
    </Stack.Navigator>
  );
};

export default MainStackNav;
