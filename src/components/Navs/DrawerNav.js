import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from '@react-navigation/native'
import {Feather} from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons';

import colors from '../../config/colors'
import ProfileScreen from "../../screens/ProfileScreen";
import BottomTabs from "./BottomTabs";
import HomeScreen from "../../screens/HomeScreen";
import MyDrawerComponent from "./MyDrawerComponent";
import SupportScreen from '../../screens/SupportScreen'
import DrawerContent from "../../screens/DrawerContent";
import TrendScreen from "../../screens/TrendScreen";
import PitchScreen from "../../screens/PitchScreen";
import MainStackNav from "./MainStackNav";
import SettingsScreen from "../../screens/SettingsScreen";


const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  return (
    <Drawer.Navigator 
    initialRouteName="HomeDrawer"
    backBehavior="none"
    drawerContent={props => <DrawerContent {...props} />}
    drawerStyle={{
        backgroundColor: colors.primary,
        width: 280,
      }}
    drawerContentOptions={{
        inactiveTintColor:'#ccc',
        activeTintColor: '#7cc',
    }}
    >
      <Drawer.Screen name="HomeDrawer" component={BottomTabs} 
        options={{
            headerStyle:{backgroundColor:colors.secondary},
            headerTintColor: colors.white
        }}
        />
      <Drawer.Screen name="Profile" component={ProfileScreen} 
        options={{
            title: 'Profile',
            headerShown:true,
            headerStyle:{backgroundColor:colors.secondary},
            headerTintColor: colors.white
        }}
      />
      <Drawer.Screen name="Settings" component={SettingsScreen}
        options={{
          title: 'Settings',
          headerShown:true,
          headerStyle:{backgroundColor:colors.secondary},
          headerTintColor: colors.white
      }} 
      />
      <Drawer.Screen name="Support" component={SupportScreen}
        options={{
          title: 'Support',
          headerShown:true,
          headerStyle:{backgroundColor:colors.secondary},
          headerTintColor: colors.white
      }}
      />
      {/* <Drawer.Screen name="Logout" component={ProfileScreen} /> */}
    </Drawer.Navigator>
  );
}



export default DrawerNav;