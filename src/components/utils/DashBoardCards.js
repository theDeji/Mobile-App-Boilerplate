import React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Text,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../config/colors";
import ProgressBar from "../utils/ProgressBar";

function ButtonOne({ title, iconName, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      {iconName && (
        <MaterialCommunityIcons
          name={iconName}
          size={24}
          color={colors.lightGray}
        />
      )}
      <Text style={styles.action}>{title}</Text>
    </TouchableOpacity>
  );
}

function ButtonTwo({ title, iconName, onPress }) {
  return (
    <TouchableOpacity style={styles.buttonSmall} onPress={onPress}>
      {iconName && (
        <MaterialCommunityIcons
          name={iconName}
          size={18}
          color={colors.lightGray}
        />
      )}
      <Text style={styles.actionSmall}>{title}</Text>
    </TouchableOpacity>
  );
}

function DashBoardCards(props) {
  return (
    <View style={styles.container}>
      <View style={styles.right}>
        <View style={styles.one}>
          <Text style={styles.title}>85%</Text>
          <Text style={styles.desc}>Profile</Text>
          <ProgressBar completed={85} />
          <ButtonOne iconName="puzzle" title="Complete now" />
        </View>

        <View style={styles.two}>
          <Text style={styles.titleTwo}>6</Text>
          <Text style={styles.descTwo}>projects</Text>
          <ButtonTwo iconName="eye" title="View all" />
        </View>
      </View>
      <View style={styles.left}>
        <View style={styles.three}>
          <Text style={styles.titleTwo}>12</Text>
          <Text style={styles.descTwo}>Jobs for You</Text>
          <ButtonTwo iconName="eye" title="View all" />
        </View>

        <View style={styles.four}>
          <Text style={styles.title}>24</Text>
          <Text style={styles.desc}>Saved Jobs</Text>
          <ProgressBar completed={85} />
          <ButtonOne iconName="eye" title="View all" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  action: {
    color: colors.white,
    fontSize: 18,
    marginLeft: 10,
  },
  actionSmall: {
    color: colors.white,
    fontSize: 14,
    marginLeft: 5,
  },
  button: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
  },
  buttonSmall: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    marginHorizontal: 25,
    borderRadius: 10,
  },
  title: {
    marginTop: 10,
    opacity: 1,
    fontWeight: "bold",
    fontSize: 60,
    color: colors.white,
    textAlign: "center",
    letterSpacing: 1.45,
  },
  titleTwo: {
    fontWeight: "bold",
    fontSize: 35,
    color: colors.white,
    letterSpacing: 1.45,
  },
  progress: {
    fontWeight: "bold",
    color: colors.white,
    marginTop: 10,
    textAlign: "center",
  },
  descTwo: {
    opacity: 1,
    fontWeight: "bold",
    fontSize: 17,
    color: colors.lightGray,
    letterSpacing: 1.45,
    textTransform: "uppercase",
  },
  desc: {
    opacity: 1,
    fontWeight: "bold",
    fontSize: 20,
    color: colors.lightGray,
    textAlign: "center",
    letterSpacing: 1.45,
    textTransform: "uppercase",
  },
  image: {
    width: 195,
    height: 219,
    resizeMode: "cover",
    marginTop: 10,
    marginLeft: 35,
  },
  imageSmall: {
    width: 130,
    height: 110,
    resizeMode: "contain",
    marginLeft: 35,
  },
  left: {
    flex: 1,
    flexDirection: "column",
  },
  container: {
    flexDirection: "row",
    alignContent: "space-between",
    marginLeft: 7,
    marginBottom: 15,
  },
  one: {
    backgroundColor: colors.list,
    borderWidth: 1,
    borderColor: colors.lightGray,
    opacity: 0.9,
    width: 195,
    paddingHorizontal: 10,
    height: 219,
    borderRadius: 5,
    overflow: "hidden",
  },
  right: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  two: {
    backgroundColor: colors.list,
    borderWidth: 1,
    borderColor: colors.lightGray,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.9,
    width: 195,
    height: 146,
    borderRadius: 5,
    overflow: "hidden",
    marginTop: 6,
  },
  three: {
    backgroundColor: colors.list,
    borderWidth: 1,
    borderColor: colors.lightGray,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: 195,
    height: 146,
    borderRadius: 5,
    overflow: "hidden",
    marginBottom: 6,
  },
  four: {
    backgroundColor: colors.list,
    borderWidth: 1,
    borderColor: colors.lightGray,
    opacity: 0.9,
    borderRadius: 5,
    paddingHorizontal: 10,
    height: 219,
    overflow: "hidden",
    width: 195,
  },
});

export default DashBoardCards;
