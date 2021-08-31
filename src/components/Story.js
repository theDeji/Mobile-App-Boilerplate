import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import {
  MaterialIcons,
  AntDesign,
  Feather,
  Ionicons,
} from "@expo/vector-icons";
import { WebView } from "react-native-webview";

import colors from "../config/colors";
import { fetchStory } from "../api";

function Story({ _id }) {
  const [story, setStory] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  const handleView = () => {
    setIsVisible(!isVisible);
  };

  function handleFetch() {
    fetchStory(_id)
      .then((_story) => setStory(_story))
      .catch((e) => console.log(e));
  }

  useEffect(() => {
    handleFetch();
    return;
  }, []);

  {
    return story.title ? (
      <View>
        <TouchableOpacity onPress={handleView}>
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
        </TouchableOpacity>
        {isVisible ? (
          <View style={styles.web}>
            <WebView
              source={{ uri: `${story.url}` }}
              style={styles.webView}
              startInLoadingState={isVisible}
              renderLoading={() => <ActivityIndicator color={colors.white} />}
              contentMode="mobile"
            />
          </View>
        ) : null}
      </View>
    ) : (
      <ActivityIndicator color={colors.white} />
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
  web: {
    paddingHorizontal: 20,
  },
  webView: {
    height: 500,
    borderRadius: 10,
  },
});

export default Story;
