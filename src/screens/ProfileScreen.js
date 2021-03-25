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

function ProfileScreen(props) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.userInfoSection}>
        <View style={styles.profilePic}>
          <Image source={require("../assets/mosh.jpg")} style={styles.image} />
          <AntDesign
            name="pluscircle"
            size={24}
            color={colors.lightGray}
            style={{ marginTop: 50 }}
          />
        </View>
        <Text style={styles.title}>Daniel Seis</Text>
        <Text style={styles.subtitle}>Software Engineer</Text>
        <Button
          title="Edit Profile"
          iconName="account-edit-outline"
          onPress={() => setModalVisible(true)}
        />
      </View>

      <View styles={styles.profileDetails}>
        <KeyValueDetailsBox
          title="email address"
          value="dansei@build.dev"
          iconName="email"
        />
        <KeyValueDetailsBox
          title="phone number"
          value="+(131) 345 34 234"
          iconName="phone"
        />
        <KeyValueDetailsBox
          title="occupation"
          value="Software Engineer"
          iconName="network"
        />
        <KeyValueDetailsBox
          title="date of birth"
          value="02/92"
          iconName="calendar"
        />
      </View>
      <View style={styles.modalContainer}>
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
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bio: {
    marginLeft: 15,
  },
  container: {
    backgroundColor: colors.bg,
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
  subtitle: {
    fontSize: 14,
    color: colors.lightGray,
    marginBottom: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.white,
  },
});

export default ProfileScreen;
