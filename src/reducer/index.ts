import {
  GET_ALL_CHARACTERS,
  GET_COMICS_BY_ID,
  SET_FILTER_SEARCH_BY,
  GET_SERIES_BY_ID,
  GET_STORIES_BY_ID,
} from "../actions";
import {action, rootState} from "../constants/types";

const initialState: rootState = {
  characters: undefined,
  comicsById: undefined,
  seriesById: undefined,
  storiesById: undefined,
  filterSearchBy: "name",
};

export default function rootReducer(state = initialState, action: action) {
  switch (action.type) {
    case GET_ALL_CHARACTERS:
      return {
        ...state,
        characters: action.payload,
      };
    case SET_FILTER_SEARCH_BY:
      return {
        ...state,
        filterSearchBy: action.payload,
      };
    case GET_COMICS_BY_ID:
      return {
        ...state,
        comicsById: action.payload,
      };
    case GET_SERIES_BY_ID:
      return {
        ...state,
        seriesById: action.payload,
      };
    case GET_STORIES_BY_ID:
      return {
        ...state,
        storiesById: action.payload,
      };
    default:
      return {...state};
  }
}
