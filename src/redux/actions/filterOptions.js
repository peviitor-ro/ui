import  {SET_FILTER_OPTIONS_DATA}  from "redux/constants/constants";

export const setFilterOptionsData = (data) => {
    //console.log(data);
  return {
    type: SET_FILTER_OPTIONS_DATA,
    payload: data,
  };
};
