import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../config/colors";

const Actions = ({ logo, company, title, level, pay, onPress }) => {
  return (
    <View style={styles.actionOne}>
      <View style={styles.logo}>
        <Image style={styles.image} source={logo} />
      </View>
      <View style={styles.desc}>
        <Text style={styles.title} onPress={onPress}>
          {title}
        </Text>
        <View style={styles.levelPay}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <MaterialCommunityIcons
              name="account-star"
              size={20}
              color={colors.white}
              style={styles.icons}
              onPress={onPress}
            />
            <Text style={styles.level} onPress={onPress}>
              {level}
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <MaterialCommunityIcons
              name="cash"
              size={20}
              color={colors.white}
              style={styles.icons}
            />
            <Text style={styles.pay}>{pay}</Text>
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <MaterialCommunityIcons
            name="hubspot"
            size={20}
            color={colors.white}
            style={styles.icons}
          />
          <Text style={styles.company} onPress={onPress}>
            {company}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  image: {
    width: 60,
    height: 60,
    borderRadius: 35,
    marginRight: 10,
  },
  logo: {
    marginLeft: 20,
  },
  actionOne: {
    borderWidth: 1,
    borderColor: colors.lightGray,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.list,
    borderRadius: 5,
    height: 100,
    marginLeft: 10,
    width: "auto",
  },
  icons: {
    marginRight: 5,
    opacity: 0.8,
  },
  desc: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginBottom: 5,
    marginRight: 20,
  },
  levelPay: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    color: colors.white,
    opacity: 0.8,
  },
  level: {
    color: colors.white,
    marginRight: 15,
    opacity: 0.8,
  },
  pay: {
    color: colors.white,
    opacity: 0.8,
  },
  company: {
    color: colors.white,
    opacity: 0.8,
  },
});

export default Actions;
