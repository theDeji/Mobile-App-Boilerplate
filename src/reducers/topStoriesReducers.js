import axios from "axios";

import { FETCH_TOP_STORIES } from "../actions/types";

const initialState = {
  topStories: [],
};

export default function topStoriesReducers(state = initialState, action) {
  switch (action.type) {
    case FETCH_TOP_STORIES:
      return {
        ...state,
        topStories: action.payload,
      };

    default:
      return state;
  }
}
