import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {Feather} from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons';

import colors from '../../config/colors'
import ProfileScreen from "../../screens/ProfileScreen";
import BottomTabs from "./BottomTabs";
import HomeScreen from "../../screens/HomeScreen";
import MyDrawerComponent from "./MyDrawerComponent";


const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  return (
    <Drawer.Navigator 
    drawerStyle={{
        backgroundColor: colors.primary,
        width: 280,
        marginTop:24,
        borderTopRightRadius:20,
        borderBottomRightRadius:20,
      }}
    drawerContentOptions={{
        marginTop:150,
        inactiveTintColor:'#ccc',
        activeTintColor: '#7cc',
    }}
    >
      <Drawer.Screen name="Home" component={BottomTabs} 
        options={{
            title: 'Dashboard',
            drawerIcon: ({focused, size}) => (
              <AntDesign
                name="dashboard"
                size={size}
                color={focused ? '#7cc' : '#ccc'}
              />
            ),
        }}/>
      <Drawer.Screen name="Profile" component={ProfileScreen} 
        options={{
            title: 'Profile',
            drawerIcon: ({focused, size}) => (
              <Feather
                name="user"
                size={size}
                color={focused ? '#7cc' : '#ccc'}
              />
            ),
            headerShown:true,
            headerStyle:{backgroundColor:colors.secondary},
            headerTintColor: colors.white
        }}
      />
      <Drawer.Screen name="Settings" component={ProfileScreen} 
        options={{
            title: 'Settings',
            drawerIcon: ({focused, size}) => (
              <Feather
                name="settings"
                size={size}
                color={focused ? '#7cc' : '#ccc'}
              />
            ),
            headerShown:true,
            headerStyle:{backgroundColor:colors.secondary},
            headerTintColor: colors.white
        }}
      />
       <Drawer.Screen name="Logout" component={ProfileScreen} 
        options={{
            title: 'Log Out',
            drawerIcon: ({focused, size}) => (
              <MaterialIcons
                name="logout"
                size={size}
                color={focused ? '#7cc' : '#ccc'}
              />
            ),
        }}
      />
    </Drawer.Navigator>
  );
}



export default DrawerNav;