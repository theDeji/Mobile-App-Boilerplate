import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  Modal,
  Pressable,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

import colors from "../config/colors";
import Button from "../components/utils/Buttons/Button";
import KeyValueDetailsBox from "../components/utils/KeyValueDetailsBox";
import Pills from "../components/Pills";

import axios from "../assets/axios.png";
import fb from "../assets/fb.png";
import figma from "../assets/figma.png";
import git from "../assets/git.png";
import github from "../assets/github.png";
import gitlab from "../assets/gitlab.png";
import mongo from "../assets/mongo.png";
import node from "../assets/node.png";
import npm from "../assets/npm.png";
import postman from "../assets/postman.png";
import python from "../assets/python.png";
import vsCode from "../assets/vsCode.png";
import redux from "../assets/redux.png";
import react from "../assets/react.png";
import js from "../assets/js.png";
import Screen from "../components/utils/Screen";

const userData = [
  {
    key: "email Address",
    value: "emmi2110@gmail.com",
    icon: "email",
  },
  {
    key: "phone number",
    value: "0815 712 3560",
    icon: "phone",
  },
  {
    key: "occupation",
    value: "Software Engineer",
    icon: "network",
  },
  {
    key: "date of birth",
    value: "12/97",
    icon: "calendar",
  },
];

const skills = [
  {
    icon: js,
    name: "JavaScript",
  },
  {
    icon: git,
    name: "Git",
  },

  {
    icon: github,
    name: "Github",
  },
  {
    icon: npm,
    name: "NPM",
  },
  {
    icon: react,
    name: "React",
  },
  {
    icon: redux,
    name: "Redux",
  },

  {
    icon: gitlab,
    name: "Gitlab",
  },
  {
    icon: python,
    name: "Python",
  },
  {
    icon: fb,
    name: "Firebase",
  },
  {
    icon: axios,
    name: "Axios",
  },

  {
    icon: node,
    name: "Node",
  },
  {
    icon: mongo,
    name: "MongoDB",
  },
];

const tech = [
  {
    icon: vsCode,
    name: "VSCode",
  },
  {
    icon: figma,
    name: "Figma",
  },
  {
    icon: postman,
    name: "Postman",
  },
];

function ProfileScreen(props) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Screen style={styles.container}>
      <ScrollView>
        <View style={styles.userInfoSection}>
          <View style={styles.profilePic}>
            <Image
              source={require("../assets/deji.jpg")}
              style={styles.image}
            />
            <AntDesign
              name="pluscircle"
              size={24}
              color={colors.lightGray}
              style={{ position: "absolute", top: 75, left: 70 }}
            />
          </View>
          <Text style={styles.title}>Adeniyi Emmanuel</Text>
          <Text style={styles.subtitle}>Software Engineer</Text>
          <Button
            title="Edit Profile"
            iconName="account-edit-outline"
            onPress={() => setModalVisible(true)}
          />
        </View>

        <View style={styles.profileDetails}>
          {userData.map((item, index) => (
            <KeyValueDetailsBox
              key={index}
              title={item.key}
              value={item.value}
              iconName={item.icon}
            />
          ))}
        </View>
        <View style={styles.skills}>
          <Text style={styles.title}>Skills</Text>
        </View>
        <View style={styles.pills}>
          {skills.map((skill, index) => (
            <Pills title={skill.name} img={skill.icon} key={index} />
          ))}
        </View>
        <View style={styles.skills}>
          <Text style={styles.title}>Technologies</Text>
        </View>
        <View style={styles.pills}>
          {tech.map((tool, index) => (
            <Pills title={tool.name} img={tool.icon} key={index} />
          ))}
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(!modalVisible)}
        >
          <ScrollView style={styles.modalContainer}>
            <AntDesign
              name="closecircleo"
              size={24}
              color={colors.pink}
              style={{ textAlign: "right" }}
              onPress={() => setModalVisible(false)}
            />
          </ScrollView>
        </Modal>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    // paddingTop: 10,
    backgroundColor: colors.bg,
  },
  bio: {
    marginLeft: 15,
  },
  modalContainer: {
    marginTop: 140,
    elevation: 10,
    backgroundColor: colors.white,
    padding: 25,
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  pills: {
    display: "flex",
    flexDirection: "row",
    // justifyContent: "center",
    // alignItems: "center",
    flexWrap: "wrap",
    marginVertical: 10,
  },
  profileDetails: {
    paddingHorizontal: 10,
  },
  profilePic: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  userInfoSection: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  skills: {
    marginLeft: 15,
    marginVertical: 20,
  },
  subtitle: {
    fontSize: 14,
    color: colors.lightGray,
    marginVertical: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.white,
  },
});

export default ProfileScreen;
