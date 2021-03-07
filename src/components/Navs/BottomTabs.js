import React from "react";
import { TouchableOpacity } from 'react-native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Feather} from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 


import colors from '../../config/colors'
import MainStackNav from "./MainStackNav";
import ProfileScreen from "../../screens/ProfileScreen";
import { color } from "react-native-reanimated";

const Tab = createBottomTabNavigator(
);

const BottomTabs = () => {
  return (
    <Tab.Navigator
        tabBarOptions={{
            showLabel:false,
            activeBackgroundColor:colors.pink,
            style: {
                backgroundColor: '#171F33',
                borderRadius:30,
                overflow:"hidden",
                height:60,
                margin:20,
                position:'absolute',
                top:'87%',
                elevation:5,
                borderTopColor:'transparent',
            },
            iconStyle:{
                marginTop:1,
            },
        }}
    >
        <Tab.Screen name="Home" component={MainStackNav} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused}) => (
            <AntDesign name="dashboard" size={25} color={focused ? colors.white : colors.medium}/>),
        }} />
        <Tab.Screen name="Trends" component={ProfileScreen} options={{
          tabBarLabel: 'Trends',
          tabBarIcon: ({focused}) => (
              <Ionicons name="trending-up" size={28} color={focused ? colors.white : colors.medium}  />),
        }} />
        <Tab.Screen name="Profile" component={ProfileScreen} options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({focused}) => (
                <AntDesign name="bulb1" color={focused ? colors.white : colors.medium}  size={25}  />),
        }} />
    </Tab.Navigator>
  );
};

export default BottomTabs;