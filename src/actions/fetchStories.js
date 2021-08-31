import React from "react";
import axios from "axios";

// import { fetchStoryIds, fetchTopStories } from "../api";
import {
  FETCH_TOP_STORIESID,
  FETCH_NEW_STORIESID,
  FETCH_TOP_STORIES,
  FETCH_NEW_STORIES,
} from "./types";

export const _fetchTopStoriesId = () => (dispatch) => {
  dispatch({
    type: FETCH_TOP_STORIESID,
  });
};

export const _fetchNewStoryIds = () => (dispatch) => {
  dispatch({
    type: FETCH_NEW_STORIESID,
  });
};

export const _fetchSToptories = () => (dispatch) => {
  dispatch({
    type: FETCH_TOP_STORIES,
  });
};

export const _fetchNewStory = () => (dispatch) => {
  dispatch({
    type: FETCH_NEW_STORIES,
  });
};
