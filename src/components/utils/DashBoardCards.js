import React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

import colors from "../../config/colors";

function DashBoardCards({ colNo, top, bottom }) {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <TouchableOpacity>
          <ImageBackground
            blurRadius={1}
            style={styles.one}
            source={require("../../assets/todo.jpg")}
          ></ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity>
          <ImageBackground
            blurRadius={1}
            style={styles.two}
            source={require("../../assets/analyze.jpeg")}
          ></ImageBackground>
        </TouchableOpacity>
      </View>
      <View style={styles.mid}>
        <TouchableOpacity>
          <ImageBackground
            style={styles.three}
            blurRadius={1}
            source={require("../../assets/concert.jpeg")}
          ></ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity>
          <ImageBackground
            blurRadius={1}
            style={styles.four}
            source={require("../../assets/puzzles.jpeg")}
          >
            {/* <LinearGradient
            colors={[colors.other, colors.medium]}
            style={styles.four}
          >
            <Text style={styles.title}>Puzzle Application</Text>
            <Text style={styles.descBig}>
              take multiple form of puzzle to engage your brain.
            </Text>
          </LinearGradient> */}
          </ImageBackground>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    marginTop: 10,
    opacity: 1,
    fontWeight: "bold",
    fontSize: 23,
    color: colors.white,
    textAlign: "center",
    letterSpacing: 1.45,
  },
  desc: {
    marginHorizontal: 5,
    marginVertical: 40,
    opacity: 1,
    fontWeight: "bold",
    fontSize: 13,
    color: colors.light,
    textAlign: "center",
    letterSpacing: 1.45,
    textTransform: "lowercase",
  },
  descBig: {
    marginHorizontal: 5,
    marginVertical: 85,
    opacity: 1,
    fontWeight: "bold",
    fontSize: 13,
    color: colors.light,
    textAlign: "center",
    letterSpacing: 1.45,
    textTransform: "lowercase",
  },
  image: {
    width: 195,
    height: 219,
    resizeMode: "cover",
    marginTop: 10,
    marginLeft: 35,
  },
  imageSmall: {
    width: 130,
    height: 110,
    resizeMode: "contain",
    marginLeft: 35,
  },
  mid: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  container: {
    flexDirection: "column",
    height: 372,
    marginRight: 7,
    marginLeft: 7,
    marginBottom: 15,
  },
  one: {
    opacity: 0.9,
    width: 195,
    height: 219,
    borderRadius: 30,
    overflow: "hidden",
    elevation: 5,
  },
  top: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  two: {
    opacity: 0.9,
    width: 195,
    height: 146,
    borderRadius: 30,
    overflow: "hidden",
    elevation: 5,
  },
  three: {
    opacity: 0.9,
    borderRadius: 30,
    elevation: 5,
    height: 146,
    overflow: "hidden",
    marginTop: 40,
    width: 195,
    zIndex: 1230,
  },
  four: {
    opacity: 0.9,
    borderRadius: 30,
    elevation: 5,
    height: 219,
    overflow: "hidden",
    width: 195,
    marginTop: -33,
  },
});

export default DashBoardCards;
