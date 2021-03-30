import React from "react";
import { View, StyleSheet, Text } from "react-native";
import colors from "../../config/colors";

function ProgressBar({ completed }) {
  return (
    <View style={styles.container}>
      <View style={styles.fillerStyles}>
        <Text
          style={{
            height: "100%",
            width: `${completed}%`,
            borderRadius: 50,
            backgroundColor: "pink",
          }}
        ></Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 10,
    width: "100%",
    backgroundColor: colors.other,
    borderRadius: 50,
    marginTop: 20,
  },
  labelStyles: {
    padding: 5,
    color: "white",
    fontWeight: "bold",
  },
});

export default ProgressBar;
