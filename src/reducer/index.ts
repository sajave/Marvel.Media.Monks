import {GET_ALL_CHARACTERS} from "../actions";
import {action, rootState} from "../constants/types";

const initialState: rootState = {
  characters: undefined,
};

export default function rootReducer(state = initialState, action: action) {
  switch (action.type) {
    case GET_ALL_CHARACTERS:
      return {
        ...state,
        characters: action.payload,
      };
    default:
      return {...state};
  }
}
