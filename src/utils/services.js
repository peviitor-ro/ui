import axios from "axios";
import { baseUrl } from "./constants/url";

const safeGet = async (url) => {
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (err) {
    console.warn(`API call failed for ${url}:`, err.message);
    return null;
  }
};

export const getFilterData = async (setData) => {
  const [countriesData, citiesData, companiesData] = await Promise.all([
    safeGet(`${baseUrl}/countries/?count=true`),
    safeGet(`${baseUrl}/cities/?count=true`),
    safeGet(`${baseUrl}/companies/?count=true`),
  ]);

  setData({
    countries: [{ name: "Țară" }, ...(countriesData?.countries || [])],
    cities: [{ name: "Oraș" }, ...(citiesData?.cities || [])],
    companies: [{ name: "Companie" }, ...(companiesData?.companies || [])],
  });
};

export const getBackgroundImages = async (setData) => {
  const bgData = await safeGet(`${baseUrl}/background/`);
  setData(bgData?.response?.docs || []);
};
