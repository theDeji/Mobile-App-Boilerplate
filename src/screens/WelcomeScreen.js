import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";

import Button from '../components/utils/Buttons/Button'
import colors from '../config/colors'


function WelcomeScreen({props, navigation}) {
  return (
    <ImageBackground
    blurRadius={3}
    style={styles.background}
    source={require("../assets/background.jpg")}
  >
    <View style={styles.logoContainer}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <Text style={styles.tagline}>Sell What You Don't Need</Text>
    </View>
    <View style={styles.buttonsContainer}>
      <Button 
        title="Login"
        onPress={() =>
          navigation.navigate('Login')
        }
      />
      <Button title="Register" color="secondary" />
    </View>
  </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
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
    color: colors.medium,
    fontSize: 20,
    fontWeight: "600",
    paddingVertical: 20,
  },
});

export default WelcomeScreen;