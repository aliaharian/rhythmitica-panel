import axios from "axios";
import SnackbarUtils from "../utils/SnackbarUtils";

const Api = () => {
  const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      site: process.env.REACT_APP_SITE_CODE || "",
    },
  });

  instance.interceptors.request.use(
    function (config) {
      console.log("req sent");

      // Do something before request is sent
      return config;
    },
    function (error) {
      console.log("sdvdsvdvsd");

      // Do something with request error
      return Promise.reject(error);
    }
  );

  // Add a response interceptor
  instance.interceptors.response.use(
    function (response) {
      console.log("sdvdsvdvsd");
      // Do something with response data
      return response;
    },
    function (error) {
      SnackbarUtils.error(error.response.data.message)

      // Do something with response error
      console.log("sdvdsvddsvd", error);
      
      return Promise.reject(error);
    }
  );
  return instance;
};
export default Api;
