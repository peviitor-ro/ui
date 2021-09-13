import { SWITCH_BACKGROUND } from "redux/constants/constants";

const switchBackground = (state = true, action) => {
  switch (action.type) {
    case SWITCH_BACKGROUND:
      return !state;
    default:
      return state;
  }
};

export default switchBackground;
