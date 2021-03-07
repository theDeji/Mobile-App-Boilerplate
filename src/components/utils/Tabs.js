import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {} from 'react-native'


import HomeScreen from '../../screens/HomeScreen';
import WelcomeScreen from '../../screens/WelcomeScreen';

const Tab = createBottomTabNavigator();

function Tabs(props) {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
            />
            <Tab.Screen
                name="Welcome"
                component={WelcomeScreen}
            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    container:{}
})

export default Tabs;