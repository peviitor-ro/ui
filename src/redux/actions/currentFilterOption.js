import {
  SET_COUNTRY_OPTION,
  SET_CITY_OPTION,
  SET_COMPANY_OPTION,
} from 'redux/constants/constants';

export const setCurrentCountryFilterOption = (data) => {
  return {
    type: SET_COUNTRY_OPTION,
    payload: data,
  };
};
export const setCurrentCityFilterOption = (data) => {
  return {
    type: SET_CITY_OPTION,
    payload: data,
  };
};
export const setCurrentCompanyFilterOption = (data) => {
  return {
    type: SET_COMPANY_OPTION,
    payload: data,
  };
};
