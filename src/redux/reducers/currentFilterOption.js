import {
  SET_COUNTRY_OPTION,
  SET_CITY_OPTION,
  SET_COMPANY_OPTION,
} from '../constants/constants';

const currentFilterOptionReducer = (
  state = { country: 'Romania', city: 'Oraș', company: 'Companie' },
  action
) => {
  switch (action.type) {
    case SET_COUNTRY_OPTION:
      return { ...state, country: action.payload };
    case SET_CITY_OPTION:
      return { ...state, city: action.payload };
    case SET_COMPANY_OPTION:
      return { ...state, company: action.payload };

    default:
      return state;
  }
};

export default currentFilterOptionReducer;
