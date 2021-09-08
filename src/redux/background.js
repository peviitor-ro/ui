import { BACKGROUND_ON, BACKGROUND_OFF } from "./constants/constants";

export const backgroundReducer = (state = true, action) => {
  switch (action.type) {
    case BACKGROUND_OFF:
      return false;
    case BACKGROUND_ON:
      return true;
    default:
      return state;
  }
};
