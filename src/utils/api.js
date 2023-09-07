import axios from "axios";
import { API_URL, STRAPI_API_TOKEN } from "./urls";
// const params = {
//   headers: {
//   Authorization: "bearer " + process.env.REACT_APP_STRAPI_TOKEN,
// },
// };

// export const fetchDataFromApi = async (url) => {
//     try{
//       const { data } =  await axios.get(
//     process.env.REACT_APP_DEV_URL + url,
//     params
//       );
// return data;
// }

//        catch (error) {
//          console.log (error);
//          return error;
//        }
//       };

//       import { API_URL, STRAPI_API_TOKEN } from "./urls";

export const fetchDataFromApi = async (url) => {
  const options = {
    headers: {
      Authorization: "bearer " + STRAPI_API_TOKEN,
    },
  };
  try {
    const { data } = await axios.get(API_URL + url, options);
    console.log(data,"DATA")
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
