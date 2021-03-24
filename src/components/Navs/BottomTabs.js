// import React from "react";
// import {
//   TransitionPresets,
//   CardStyleInterpolators,
// } from "@react-navigation/stack";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { AntDesign } from "@expo/vector-icons";
// import { Ionicons } from "@expo/vector-icons";

// import colors from "../../config/colors";
// import MainStackNav from "./MainStackNav";
// import TrendScreen from "../../screens/TrendScreen";
// import PitchScreen from "../../screens/PitchScreen";
// import HomeScreen from "../../screens/HomeScreen";

// const Tab = createBottomTabNavigator();

// const BottomTabs = () => {
//   return (
//     <Tab.Navigator
//       initialRouteName="Home"
//       backBehavior="none"
//       tabBarOptions={{
//         showLabel: false,
//         activeBackgroundColor: colors.pink,
//         style: {
//           backgroundColor: "#171F33",
//           borderRadius: 30,
//           overflow: "hidden",
//           height: 60,
//           margin: 20,
//           position: "absolute",
//           top: "87%",
//           elevation: 5,
//           borderTopColor: "transparent",
//         },
//         iconStyle: {
//           marginTop: 1,
//         },
//       }}
//     >
//       <Tab.Screen
//         name="Home"
//         component={HomeScreen}
//         options={{
//           tabBarLabel: "Home",
//           tabBarIcon: ({ focused }) => (
//             <AntDesign
//               name="dashboard"
//               size={25}
//               color={focused ? colors.white : colors.medium}
//             />
//           ),
//         }}
//         animation="fade"
//         screenOptions={{
//           gestureEnabled: true,
//           gestureDirection: "horizontal",
//           ...TransitionPresets.SlideFromRightIOS,
//         }}
//       />
//       <Tab.Screen
//         name="Trends"
//         component={TrendScreen}
//         options={{
//           tabBarLabel: "Trends",
//           tabBarIcon: ({ focused }) => (
//             <Ionicons
//               name="trending-up"
//               size={28}
//               color={focused ? colors.white : colors.medium}
//             />
//           ),
//         }}
//         animation="fade"
//         screenOptions={{
//           gestureEnabled: true,
//           gestureDirection: "horizontal",
//           ...TransitionPresets.SlideFromRightIOS,
//         }}
//       />
//       <Tab.Screen
//         name="Pitch"
//         component={PitchScreen}
//         options={{
//           tabBarLabel: "Pitch",
//           tabBarIcon: ({ focused }) => (
//             <AntDesign
//               name="bulb1"
//               color={focused ? colors.white : colors.medium}
//               size={25}
//             />
//           ),
//         }}
//         animation="fade"
//         screenOptions={{
//           gestureEnabled: true,
//           gestureDirection: "horizontal",
//           ...TransitionPresets.SlideFromRightIOS,
//         }}
//       />
//     </Tab.Navigator>
//   );
// };

// export default BottomTabs;
