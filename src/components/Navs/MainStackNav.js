import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../../screens/HomeScreen";
import ProfileScreen from '../../screens/ProfileScreen'
import Screen from '../utils/Screen'

const Stack = createStackNavigator();

const MainStackNav = () => {
  return (
        <Stack.Navigator headerMode="none" >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="Posts" component={ProfileScreen} />
        </Stack.Navigator>
  );
}

export default MainStackNav ;