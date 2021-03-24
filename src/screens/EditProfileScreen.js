import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, Modal, Pressable } from "react-native";

function EditProfileScreen(props) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Modal
        style={{ height: 300, padding: 300, backgroundColor: "red" }}
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}
      >
        <SafeAreaView style={styles.view}>
          <Text>Edit Profile</Text>
          <Pressable onPress={() => setModalVisible(!modalVisible)}>
            <Text>Hide modal</Text>
          </Pressable>
        </SafeAreaView>
      </Modal>
      <Pressable onPress={() => setModalVisible(true)}>
        <Text>Show modal</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 50,
  },
  view: {
    marginTop: 100,
    backgroundColor: "red",
    padding: 25,
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default EditProfileScreen;
