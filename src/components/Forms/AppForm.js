import React, { useState } from "react";
import { StyleSheet, ToastAndroid } from "react-native";
import { Formik } from "formik";
import AsyncStorage from "@react-native-async-storage/async-storage";

function AppForm({
  navigation,
  initialValues,
  onSubmit,
  validationSchema,
  children,
}) {
  function showToast(message) {
    ToastAndroid.show(message, ToastAndroid.LONG, ToastAndroid.TOP);
  }

  async function handleLogin(val) {
    if (navigation.getState().index && navigation.getState().index == 2) {
      await AsyncStorage.getItem("email").then((res) => {
        if (res === null) {
          showToast("Invalid User, Please Sign up");
        } else {
          if (res === JSON.stringify(val.email)) {
            AsyncStorage.getItem("password").then((res) => {
              res === JSON.stringify(val.password)
                ? navigation.navigate("DrawerNav")
                : showToast("Invalid Password, Try again.");
            });
          } else {
            showToast("Incorrect Email/Password, Try again.");
          }
        }
      });
    } else if (
      navigation.getState().index &&
      navigation.getState().index == 3
    ) {
      await AsyncStorage.setItem("email", JSON.stringify(val.email));
      await AsyncStorage.setItem("password", JSON.stringify(val.password));
      navigation.navigate("Login");
    } else {
      return;
    }
  }

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values) => handleLogin(values)}
      validationSchema={validationSchema}
    >
      {(onSubmit) => <>{children}</>}
    </Formik>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default AppForm;
