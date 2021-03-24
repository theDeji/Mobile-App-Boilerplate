import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Entypo } from "@expo/vector-icons";

import colors from "../../config/colors";

function KeyValueDetailsBox({ title, value, iconName }) {
  return (
    <View style={styles.container}>
      <View style={styles.iconAndtitle}>
        <Entypo
          name={iconName}
          size={18}
          color={colors.white}
          style={{ marginRight: 10 }}
        />
        <Text style={styles.title}>{title}</Text>
      </View>
      <Text style={styles.val}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    margin: 10,
    backgroundColor: colors.secondary,
    borderRadius: 10,
  },
  iconAndtitle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    color: colors.white,
    textTransform: "capitalize",
  },
  val: {
    color: colors.medium,
  },
});

export default KeyValueDetailsBox;
