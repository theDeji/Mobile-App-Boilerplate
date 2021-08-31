import React from "react";
import { Image, StyleSheet, View, ImageBackground } from "react-native";
import Onboarding from "react-native-onboarding-swiper";

import colors from "../config/colors";
import Dots from "../components/utils/Dots";

function OnboardingScreen({ navigation }) {
  const handleSplash = () => {
    setTimeout(() => {
      navigation.navigate("Welcome");
    }, 2000);
  };
  return (
    <View style={styles.view}>
      <ImageBackground
        source={require("../assets/bg.jpg")}
        style={styles.bgImage}
      >
        <Onboarding
          onDone={() => navigation.navigate("Welcome")}
          onSkip={handleSplash()}
          bottomBarHighlight={false}
          backgroundColor="transparent"
          titleStyles={{
            color: colors.dark,
            fontSize: 20,
          }}
          pages={[
            {
              backgroundColor: "transparent",
              image: (
                <Image
                  style={styles.image}
                  source={require("../assets/logo-red.png")}
                />
              ),
              title: "Darker News",
              subtitle: "",
            },
          ]}
        ></Onboarding>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    backgroundColor: "transparent",
    resizeMode: "center",
    width: 100,
    height: 100,
  },
  screen: {
    flex: 1,
  },
  view: {
    flex: 1,
  },
  bgImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});

export default OnboardingScreen;
