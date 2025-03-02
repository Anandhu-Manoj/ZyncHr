import axios from "axios";
import baseUrl from "./baseurl";

const commonApi = async (httpmethod, endPoint, reqBody) => {
  let reqConfig = {
    method: httpmethod,
    url: baseUrl + endPoint,
    data: reqBody,
  };

  return await axios(reqConfig)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export default commonApi