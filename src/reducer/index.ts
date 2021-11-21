import {
  GET_ALL_CHARACTERS,
  GET_COMICS_BY_ID,
  SET_FILTER_SEARCH_BY,
} from "../actions";
import {action, rootState} from "../constants/types";

const initialState: rootState = {
  characters: undefined,
  comicsById: undefined,
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
    default:
      return {...state};
  }
}
