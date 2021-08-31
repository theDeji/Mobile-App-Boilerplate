import axios from "axios";
import {
  NEW_STORIES_URL,
  STORY_URL,
  TOP_STORIES_URL,
} from "../constants/index";

export const fetchStory = async (storyId) => {
  const result = await axios.get(`${STORY_URL + storyId}.json`);
  return result.data;
};

export const fetchTopStories = async () => {
  const result = await axios.get(TOP_STORIES_URL);

  return result.data;
};

export const fetchStoryIds = async () => {
  const result = await axios.get(NEW_STORIES_URL);

  return result.data;
};
