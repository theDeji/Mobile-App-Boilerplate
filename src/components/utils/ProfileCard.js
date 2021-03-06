import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../config/colors";

function ProfileCard({ props, navigation }) {
  return (
    <View>
      <View style={styles.view}>
        <TouchableOpacity
          style={styles.profile}
          onPress={() => navigation.navigate("Profile")}
        >
          <Image
            style={styles.image}
            source={require("../../assets/mosh.jpg")}
          />
          <View>
            <Text style={styles.text}>Hi, Daniel</Text>
            <View style={styles.jobIconBio}>
              <MaterialCommunityIcons
                name="head-lightbulb-outline"
                size={15}
                color={colors.lightGray}
                style={{ marginRight: 5 }}
              />
              <Text style={styles.bio}>Software Engineer</Text>
            </View>
          </View>
        </TouchableOpacity>
        <MaterialCommunityIcons
          name="arrow-right"
          size={20}
          color={colors.extralightGray}
          style={{ marginRight: 5 }}
          onPress={() => navigation.navigate("Profile")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bio: {
    fontSize: 13,
    color: colors.lightGray,
  },
  container: {},
  image: {
    width: 50,
    height: 50,
    borderRadius: 35,
    marginRight: 10,
  },
  jobIconBio: {
    flexDirection: "row",
  },
  profile: {
    flexDirection: "row",
  },
  text: {
    color: colors.extralightGray,
    fontWeight: "bold",
    fontSize: 22,
  },
  view: {
    backgroundColor: colors.list,
    borderWidth: 1,
    borderColor: colors.lightGray,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    margin: 15,
  },
});

export default ProfileCard;
