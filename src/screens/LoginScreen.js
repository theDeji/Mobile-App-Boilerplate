import React from "react";
import { View, StyleSheet, Image, ImageBackground, Text } from "react-native";
import * as Yup from "yup";
import Constants from "expo-constants";

import { AppForm, AppFormField, SubmitButton } from "../components/Forms";
import Screen from "../components/utils/Screen";
import Button from "../components/utils/Buttons/Button";
import colors from "../config/colors";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen({ navigation }) {
  return (
    <ImageBackground
      blurRadius={10}
      style={styles.background}
      source={require("../assets/bg2.jpg")}
    >
      {/* <Image style={styles.logo} source={require("../assets/logo-red.png")} /> */}
      <Screen style={styles.container}>
        <AppForm
          navigation={navigation}
          initialValues={{ email: "", password: "" }}
          // onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
          <AppFormField
            autoCorrect={false}
            autoCapitalize="none"
            icon="email"
            name="email"
            keyboardType="email-address"
            placeholder="Email"
            textContentType="emailAddress"
          />
          <AppFormField
            autoCorrect={false}
            autoCapitalize="none"
            icon="lock"
            name="password"
            placeholder="Password"
            secureTextEntry
            textContentType="password"
          />
          <SubmitButton title="Login" navigation={navigation} />
          <Text style={styles.text}>Don't have an account ?</Text>
          <Button
            title="Sign up"
            onPress={() => navigation.navigate("Signup")}
          />
        </AppForm>
      </Screen>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
  },
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 5,
    marginTop: 20,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
  text: {
    color: colors.white,
  },
});

export default LoginScreen;
