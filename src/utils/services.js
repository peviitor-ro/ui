import axios from "axios";
import { baseUrl } from "./constants/url";

export const getFilterData = async (setData) => {
  try {
    const countriesResponse = await axios.get(
      `${baseUrl}/countries/?count=true`
    );
    const citiesResponse = await axios.get(`${baseUrl}/cities/?count=true`);
    const companiesResponse = await axios.get(
      `${baseUrl}/companies/?count=true`
    );
    setData({
      countries: countriesResponse.data.countries,
      cities: citiesResponse.data.cities,
      companies: companiesResponse.data.companies,
    });
  } catch (error) {
    console.log(error);
  }
};
