import React, { useEffect } from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";

import Button from "../components/utils/Buttons/Button";
import colors from "../config/colors";

function WelcomeScreen({ props, navigation }) {
  return (
    <ImageBackground
      blurRadius={6}
      style={styles.background}
      source={require("../assets/bg3.jpg")}
      resizeMode="cover"
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={styles.tagline}>Darker News</Text>
      </View>
      <View style={styles.desc}>
        <Text style={styles.text}>
          Read news from top hackers all over the globe, without going to the
          dark web!
        </Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Button title="Continue" onPress={() => navigation.navigate("Login")} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonsContainer: {
    width: "100%",
    marginBottom: -500,
    marginTop: 50,
  },
  desc: {
    borderRadius: 5,
    position: "absolute",
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  tagline: {
    color: colors.extraX2,
    fontSize: 20,
    fontWeight: "600",
    paddingVertical: 20,
  },
  text: {
    color: colors.white,
    fontSize: 16,
    textAlign: "center",
    lineHeight: 25,
  },
  note: {
    color: colors.extraX2,
    fontSize: 20,
    fontWeight: "300",
  },
});

export default WelcomeScreen;
