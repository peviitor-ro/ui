import { IS_MOBILE } from "redux/constants/constants";

const checkScreenSizeReducer = (state = true, action) => {
    switch (action.type) {
      case IS_MOBILE:
        return action.payload;
      default:
        return state;
    }
  };
  export default checkScreenSizeReducer;