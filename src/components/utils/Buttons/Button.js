import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../../config/colors";

function Button({ title, iconName, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
      {iconName && (
        <MaterialCommunityIcons
          name={iconName}
          size={24}
          color={colors.lightGray}
        />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: colors.lightGray,
    backgroundColor: colors.list,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 120,
    flexDirection: "row",
    width: "40%",
    padding: 15,
    marginVertical: 15,
  },
  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: "capitalize",
    fontWeight: "bold",
    marginRight: 10,
  },
});

export default Button;
