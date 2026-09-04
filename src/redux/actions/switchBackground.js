import { SWITCH_BACKGROUND_OFF, SWITCH_BACKGROUND_ON } from "redux/constants/constants";

export const setSwitchBackgroundOn = () => {
  return {
    type: SWITCH_BACKGROUND_ON,
  };
};
export const setSwitchBackgroundOff = () => {
  return {
    type: SWITCH_BACKGROUND_OFF,
  };
};
