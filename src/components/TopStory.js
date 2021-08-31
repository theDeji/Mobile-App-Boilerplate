import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, ActivityIndicator } from "react-native";
import {
  MaterialIcons,
  AntDesign,
  Feather,
  Ionicons,
} from "@expo/vector-icons";

import colors from "../config/colors";
import { fetchStory } from "../api";

function TopStory({ _id }) {
  const [story, setStory] = useState([]);

  useEffect(() => {
    fetchStory(_id)
      .then((_story) => setStory(_story))
      .catch((e) => console.log(e));
  }, []);

  {
    return story.title ? (
      <View>
        <View style={styles.container}>
          <Text style={styles.title} numberOfLines={1}>
            {story.title}
          </Text>
          <View style={styles.details}>
            <View style={styles.block}>
              <Feather name="user" size={15} color={colors.lightGray} />
              <Text style={styles.regular}>@{story.by}</Text>
            </View>
            <View style={styles.block}>
              <Feather name="star" size={15} color={colors.lightGray} />
              <Text style={styles.regular}>{story.score}</Text>
            </View>
            {story.kids ? (
              <View style={styles.block}>
                <Feather
                  name="message-circle"
                  size={15}
                  color={colors.lightGray}
                />
                <Text style={styles.regular}>{story.kids.length}</Text>
              </View>
            ) : null}
          </View>
        </View>
      </View>
    ) : (
      <ActivityIndicator />
    );
  }
}

const styles = StyleSheet.create({
  block: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    borderWidth: 1,
    borderColor: colors.lightGray,
    justifyContent: "space-between",
    padding: 5,
    margin: 10,
    backgroundColor: colors.list,
    borderRadius: 5,
  },
  details: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  regular: {
    fontSize: 12,
    color: colors.lightGray,
    marginVertical: 5,
    marginHorizontal: 5,
  },
  title: {
    fontSize: 16,
    marginVertical: 5,
    color: colors.extralightGray,
  },
});

export default TopStory;
