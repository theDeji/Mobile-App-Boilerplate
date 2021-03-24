import React, { useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Screen from "../components/utils/Screen";
import colors from "../config/colors";

function TrendScreen(props) {
  return (
    <Screen style={styles.container}>
      {/* <View style={styles.menuContainer}>
        <View style={styles.screenInfo}>
          <MaterialCommunityIcons
            name="menu"
            size={24}
            color={colors.white}
            style={styles.icon}
            onPress={() => navigation.toggleDrawer()}
          />
          <Text style={styles.title}>Trends</Text>
        </View>
      </View> */}
      <View style={styles.profileBio}></View>
      <View styles={styles.profileOptions}></View>
      <View style={styles.logout}></View>
      <Text>Trend screeen</Text>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
  },
  icon: {
    marginLeft: 14,
    marginTop: 15.5,
  },
  menuContainer: {
    backgroundColor: colors.secondary,
    height: 56,
    elevation: 5,
  },
  title: {
    color: colors.white,
    fontSize: 20,
    position: "absolute",
    top: 15,
    left: 73,
  },
  screenInfo: {
    // marginTop:25.5/
  },
});
export default TrendScreen;
