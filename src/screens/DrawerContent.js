import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  Switch,
  ColorPropType,
} from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import colors from "../config/colors";

function DrawerContent(props) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={styles.container}>
      <View style={styles.userInfoSection}>
        <Image source={require("../assets/deji.jpg")} style={styles.image} />
        <Text style={styles.title}>Adeniyi Emmanuel</Text>
        <Text style={styles.subtitle}>Software Engineer</Text>
      </View>
      <DrawerContentScrollView {...props} showsVerticalScrollIndicator={false}>
        <View style={styles.drawerSection}>
          <DrawerItem
            icon={({ color, size, focused }) => (
              <AntDesign
                name="bulb1"
                size={size}
                color={focused ? "#7cc" : colors.lightGray}
              />
            )}
            label="New Stories"
            labelStyle={{
              color: colors.white,
            }}
            onPress={() => props.navigation.navigate("Home")}
          />
          <DrawerItem
            icon={({ color, size, focused }) => (
              <Ionicons
                name="trending-up"
                size={size}
                color={focused ? "#7cc" : colors.lightGray}
              />
            )}
            label="Top Stories"
            labelStyle={{
              color: colors.white,
            }}
            onPress={() => props.navigation.navigate("Trends")}
          />
          <DrawerItem
            icon={({ color, size, focused }) => (
              <Feather
                name="user"
                size={size}
                color={focused ? "#7cc" : colors.lightGray}
              />
            )}
            label="Profile"
            labelStyle={{
              color: colors.white,
            }}
            onPress={() => props.navigation.navigate("Profile")}
          />

          {/* <DrawerItem
            icon={({ color, size, focused }) => (
              <AntDesign
                name="bulb1"
                size={size}
                color={focused ? "#7cc" : colors.lightGray}
              />
            )}
            label="Pitch"
            labelStyle={{
              color: colors.white,
            }}
            onPress={() => props.navigation.navigate("Pitch")}
          /> */}

          <DrawerItem
            icon={({ color, size, focused }) => (
              <Feather
                name="settings"
                size={size}
                color={focused ? "#7cc" : colors.lightGray}
              />
            )}
            label="Settings"
            labelStyle={{
              color: colors.white,
            }}
            // onPress={() => props.navigation.navigate("Settings")}
          />
          <DrawerItem
            icon={({ color, size, focused }) => (
              <AntDesign
                name="customerservice"
                size={size}
                color={focused ? "#7cc" : colors.lightGray}
              />
            )}
            label="Support"
            labelStyle={{
              color: colors.white,
            }}
            // onPress={() => props.navigation.navigate("Support")}
          />
        </View>
        <View style={styles.preference}>
          <Text style={styles.prefMode}>Dark Mode</Text>
          <Switch
            trackColor={{
              false: colors.lightGray,
              true: colors.extralightGray,
            }}
            thumbColor={isEnabled ? colors.list : colors.white}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </DrawerContentScrollView>
      <View style={styles.signout}>
        <DrawerItem
          icon={({ color, size, focused }) => (
            <MaterialIcons
              name="logout"
              size={size}
              color={focused ? "#7cc" : colors.lightGray}
            />
          )}
          label="Sign Out"
          labelStyle={{
            color: colors.white,
          }}
          onPress={() => props.navigation.navigate("Login")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 50,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  userInfoSection: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  subtitle: {
    fontSize: 14,
    color: colors.lightGray,
    marginTop: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.white,
  },
  signout: {
    marginBottom: 20,
  },
  drawerSection: {
    flex: 1,
    marginVertical: 30,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  prefMode: {
    color: colors.lightGray,
    marginTop: 5,
  },
});

export default DrawerContent;
