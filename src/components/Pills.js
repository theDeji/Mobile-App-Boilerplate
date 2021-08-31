import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";

import colors from "../config/colors";

function Pills({ title, img }) {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={img} resizeMode="contain" style={styles.img} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    margin: 15,
    height: 50,
    backgroundColor: colors.lightGray,
    borderRadius: 40,
  },
  img: {
    backgroundColor: "transparent",
    width: 25,
    height: 25,
  },
  title: {
    fontWeight: "bold",
    color: colors.other,
    textTransform: "capitalize",
    marginHorizontal: 5,
  },
});

export default Pills;
