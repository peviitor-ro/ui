import axios from "axios";
import { baseUrl } from "./constants/url";

export const getFilterData =  async (setData) => {
    try{
        const response = await axios.get(`${baseUrl}/cities/?count=true`);
        setData(response);
    } catch (error) {
      console.log(error);
    }
}



