import React from "react";
import { TouchableOpacity } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../config/colors";
import ProfileScreen from "../../screens/ProfileScreen";
import SupportScreen from "../../screens/SupportScreen";
import DrawerContent from "../../screens/DrawerContent";
import SettingsScreen from "../../screens/SettingsScreen";
import MainStackNav from "./MainStackNav";

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  return (
    <Drawer.Navigator
      initialRouteName="HomeDrawer"
      backBehavior="none"
      drawerContent={(props) => <DrawerContent {...props} />}
      drawerStyle={{
        backgroundColor: colors.list,
        width: 280,
      }}
    >
      <Drawer.Screen
        name="HomeDrawer"
        component={MainStackNav}
        options={{
          headerShown: true,
          headerTitle: "Hacker News",
          headerRight: ({}) => (
            <TouchableOpacity>
              <MaterialCommunityIcons
                name="bell"
                size={24}
                color={colors.lightGray}
                style={{ marginRight: 18 }}
              />
            </TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: colors.list,
          },
          headerTintColor: colors.lightGray,
        }}
      />
      {/* <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: "Profile",
          headerShown: true,
          headerStyle: { backgroundColor: colors.secondary },
          headerTintColor: colors.white,
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: "Settings",
          headerShown: true,
          headerStyle: { backgroundColor: colors.secondary },
          headerTintColor: colors.white,
        }}
      />
      <Drawer.Screen
        name="Support"
        component={SupportScreen}
        options={{
          title: "Support",
          headerShown: true,
          headerStyle: { backgroundColor: colors.secondary },
          headerTintColor: colors.white,
        }}
      /> */}
    </Drawer.Navigator>
  );
};

export default DrawerNav;
