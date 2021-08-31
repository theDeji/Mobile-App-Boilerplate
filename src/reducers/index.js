import { combineReducers } from "redux";
import newStoriesReducers from "./newStoriesReducers";
import topStoriesReducers from "./topStoriesReducers";

export default combineReducers({
  newStoriesReducers,
  topStoriesReducers,
});
