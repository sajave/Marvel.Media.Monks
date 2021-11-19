import {GET_ALL_CHARACTERS, SET_FILTER_SEARCH_BY} from "../actions";
import {action, rootState} from "../constants/types";

const initialState: rootState = {
  characters: undefined,
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
    default:
      return {...state};
  }
}
