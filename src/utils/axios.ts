import axios, { AxiosRequestConfig, AxiosResponse, Method } from 'axios';
/*eslint-disable*/
interface CallAxiosAPI {
  url: string;
  method: Method;
  data?: any;
  headers?: any;
  params?: string;
  isAuthentication?: boolean;
}

// const baseUrl = `${process.env.REACT_APP_API_URL}`;
const baseUrl ='http://127.0.0.1:8000/api/';

const callAxios = async ({
  url,
  method,
  data,
  headers,
  params,
}: CallAxiosAPI) => {
  const token = localStorage.getItem('SCHOOL_ACCESS_TOKEN'); //esma school addd gareko 
  const accessToken = token !== null ? token : null; 

  const config: AxiosRequestConfig = {
    method: method || 'GET',
    url: `${baseUrl}${url}`,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Authorization: accessToken !== null ? `Bearer ${accessToken}` : '',
      ...headers,
    },
    data,
    params,
    timeout: 20000,
  };
  return axios(config)
    .then((res: AxiosResponse<any, any>) => res)
    .catch((err) => err);
};
export default callAxios;