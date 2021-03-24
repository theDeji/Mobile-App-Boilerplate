import React, { useEffect } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import Screen from "../components/utils/Screen";
import colors from "../config/colors";
import DashBoardCards from "../components/utils/DashBoardCards";
import SwipeActions from "../components/utils/SwipeActions";
import ProfileCard from "../components/utils/ProfileCard";

function HomeScreen({ navigation }) {
  return (
    <Screen style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* <Text>Your Profile Summary</Text> */}
        <ProfileCard navigation={navigation} />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginLeft: 12,
            marginBottom: 15,
          }}
        >
          <MaterialIcons name="dashboard" size={20} color={colors.medium} />
          <Text style={styles.text}>Projects</Text>
        </View>
        <DashBoardCards />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginLeft: 12,
            marginBottom: 15,
          }}
        >
          <MaterialIcons name="work" size={20} color={colors.medium} />
          <Text style={styles.text}>Available Jobs</Text>
        </View>
        <SwipeActions />
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
  },
  text: {
    fontSize: 20,
    marginLeft: 10,
    fontWeight: "bold",
    color: colors.medium,
  },
  icon: {
    marginLeft: 14,
    marginTop: 15.5,
  },
  list: {
    backgroundColor: colors.danger,
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
    // marginTop:25.5
  },
});

export default HomeScreen;
