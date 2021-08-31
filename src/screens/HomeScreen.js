import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, ScrollView, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { FETCH_NEW_STORIES } from "../actions/types";
import { fetchStoryIds } from "../api";
import Story from "../components/Story";
import Screen from "../components/utils/Screen";
import colors from "../config/colors";

function HomeScreen(props) {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [temp, setTemp] = useState([]);
  const [j, setJ] = useState(10);

  const { newStories } = useSelector((state) => state.newStoriesReducers);

  const dispatch = useDispatch();

  function handleFetch() {
    return fetchStoryIds()
      .then((id) => {
        dispatch({ type: FETCH_NEW_STORIES, payload: id });
      })
      .catch((e) => console.log(e));
  }

  useEffect(() => {
    setTemp(newStories);
  }, newStories);

  useEffect(() => {
    if (!newStories.length) {
      handleFetch().then();
    }
  }, []);

  function fetchMore() {
    setJ(j + 10);
  }

  return (
    <Screen style={styles.container}>
      <FlatList
        scrollEnabled={true}
        vertical
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        data={temp.slice(0, j)}
        keyExtractor={(_, i) => i.toString()}
        renderItem={(renderData, index) => (
          <Story key={index} _id={renderData.item} />
        )}
        onRefresh={() => handleFetch()}
        refreshing={isRefreshing}
        onEndReachedThreshold={0.1}
        onEndReached={() => fetchMore()}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    // paddingTop: 10,
    backgroundColor: colors.bg,
  },
  text: {
    fontSize: 20,
    marginLeft: 10,
    fontWeight: "bold",
    color: colors.lightGray,
  },
  icon: {
    marginLeft: 14,
    marginTop: 15.5,
  },
  list: {
    backgroundColor: colors.danger,
  },
  menuContainer: {
    backgroundColor: colors.secondary,
    height: 56,
    elevation: 5,
  },
  title: {
    color: colors.white,
    fontSize: 20,
    position: "absolute",
    top: 15,
    left: 73,
  },
  screenInfo: {
    // marginTop:25.5
  },
});

export default HomeScreen;
