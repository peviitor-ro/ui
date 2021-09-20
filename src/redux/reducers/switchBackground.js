import { SWITCH_BACKGROUND_OFF, SWITCH_BACKGROUND_ON } from "redux/constants/constants";

const switchBackground = (state = true, action) => {
  switch (action.type) {
    case SWITCH_BACKGROUND_ON:
      return true;
    case SWITCH_BACKGROUND_OFF:
      return false;
    default:
      return state;
  }
};

export default switchBackground;
