import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import WelcomeScreen from "./src/screens/WelcomeScreen";
import OnboardingScreen from "./src/screens/OnboardingScreen";
import LoginScreen from "./src/screens/LoginScreen";
import SignupScreen from "./src/screens/SignupScreen";
// import OnboardingScreen from "./src/screens/OnboardingScreen";
import DrawerNav from "./src/components/Navs/DrawerNav";
import combineReducers from "./src/reducers/index";
import { fetchStoryIds, fetchStory } from "./src/api";

const middleware = [thunk];
const Stack = createStackNavigator();
const store = createStore(
  combineReducers,
  compose(applyMiddleware(...middleware))
);

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="Onboard" component={OnboardingScreen} />
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
          <Stack.Screen name="DrawerNav" component={DrawerNav} />
          {/* <Stack.Screen name="Login" component={DrawerNav} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
