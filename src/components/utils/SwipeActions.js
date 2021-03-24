import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
  Image,
  TouchableHighlight,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../config/colors";
import flutter from "../../assets/flutter.png";
import andela from "../../assets/andela.png";
import paystack from "../../assets/paystack.png";

const Actions = ({ logo, company, title, level, pay }) => {
  return (
    <TouchableHighlight>
      <View style={styles.actionOne}>
        <View style={styles.logo}>
          <Image style={styles.image} source={logo} />
        </View>
        <View style={styles.desc}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.levelPay}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <MaterialCommunityIcons
                name="account-star"
                size={20}
                color={colors.white}
                style={styles.icons}
              />
              <Text style={styles.level}>{level}</Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <MaterialCommunityIcons
                name="cash"
                size={20}
                color={colors.white}
                style={styles.icons}
              />
              <Text style={styles.pay}>{pay}</Text>
            </View>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <MaterialCommunityIcons
              name="hubspot"
              size={20}
              color={colors.white}
              style={styles.icons}
            />
            <Text style={styles.company}>{company}</Text>
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );
};

function SwipeActions(props) {
  return (
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
      />
      <Actions
        company="Andela"
        logo={andela}
        title="VueJs + Django Dev."
        level="Junior"
        pay="200-280k/mth"
      />
      <Actions
        company="Paystack"
        logo={paystack}
        title="DevOps Engineer."
        level="Senior"
        pay="600-850k/mth"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 60,
    height: 60,
    borderRadius: 35,
    marginRight: 10,
  },
  logo: {
    marginLeft: 20,
  },
  actionOne: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.primary,
    borderRadius: 10,
    elevation: 5,
    height: 100,
    marginLeft: 5,
    marginRight: 10,
    width: 350,
  },
  icons: {
    marginRight: 5,
    opacity: 0.8,
  },
  container: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 75,
  },
  desc: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginBottom: 5,
  },
  levelPay: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    color: colors.white,
    opacity: 0.8,
  },
  level: {
    color: colors.white,
    marginRight: 15,
    opacity: 0.8,
  },
  pay: {
    color: colors.white,
    opacity: 0.8,
  },
  company: {
    color: colors.white,
    opacity: 0.8,
  },
});

export default SwipeActions;
