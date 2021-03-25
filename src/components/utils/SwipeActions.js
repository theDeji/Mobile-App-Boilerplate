import React, { useState } from "react";
import { StyleSheet, ScrollView, View, Modal } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import Actions from "./Actions";
import flutter from "../../assets/flutter.png";
import andela from "../../assets/andela.png";
import paystack from "../../assets/paystack.png";
import colors from "../../config/colors";

function SwipeActions(props) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        style={styles.container}
      >
        <Actions
          company="Flutterwave"
          logo={flutter}
          title="React Frontend Dev."
          level="Mid-Senior"
          pay="300-450k/mth"
          onPress={() => setModalVisible(true)}
        />
        <Actions
          company="Andela"
          logo={andela}
          title="VueJs + Django Dev."
          level="Junior"
          pay="200-280k/mth"
          onPress={() => setModalVisible(true)}
        />
        <Actions
          company="Paystack"
          logo={paystack}
          title="DevOps Engineer."
          level="Senior"
          pay="600-850k/mth"
          onPress={() => setModalVisible(true)}
        />
        <View style={styles.more}>
          <View style={styles.moreBtn}>
            <Feather name="chevron-right" size={40} style={styles.icon} />
          </View>
        </View>
      </ScrollView>
      <View
        style={
          ([styles.modalContainer],
          { opacity: setModalVisible === false ? 1 : 0 })
        }
      >
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
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 75,
  },
  icon: {
    color: colors.white,
    marginTop: 7,
    textAlign: "center",
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
  more: {
    justifyContent: "center",
    alignItems: "center",
  },
  moreBtn: {
    borderWidth: 1,
    borderColor: colors.lightGray,
    backgroundColor: colors.list,
    width: 60,
    height: 60,
    borderRadius: 100,
    marginHorizontal: 10,
  },
});

export default SwipeActions;
