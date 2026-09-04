import { IS_MOBILE } from 'redux/constants/constants';

export const checkMobileScreen = (data) => {
    return {
      type: IS_MOBILE,
      payload: data,
    };
  };