import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../../screens/HomeScreen";
import ProfileScreen from '../../screens/ProfileScreen'
import Screen from '../utils/Screen'
import TrendScreen from "../../screens/TrendScreen";
import PitchScreen from "../../screens/PitchScreen";

const Stack = createStackNavigator();

const MainStackNav = () => {
  return (
        <Stack.Navigator headerMode="none" >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Trends" component={TrendScreen} />
            <Stack.Screen name="Pitch" component={PitchScreen} />
        </Stack.Navigator>
  );
}

export default MainStackNav ;