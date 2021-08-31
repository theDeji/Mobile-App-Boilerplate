import axios from "axios";
import { FETCH_NEW_STORIES } from "../actions/types";

const initialState = {
  newStories: [],
};

export default function newStoriesReducers(state = initialState, action) {
  switch (action.type) {
    case FETCH_NEW_STORIES:
      return {
        ...state,
        newStories: action.payload,
      };

    default:
      return state;
  }
}
