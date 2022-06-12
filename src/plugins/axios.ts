import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const token = localStorage.getItem('SCHOOL_ACCESS_TOKEN');
axios.defaults.headers.common.Authorization = token
  ? `bearer ${token}`
  : '';



// Add a request interceptor
axios.interceptors.request.use(
  (config) => 
    // Do something before request is sent
     config
  , // function(config)
  (error) => 
    // Do something with request error
     Promise.reject(error)
   // function(error)
); // axios.interceptors.request.use

// Add a response interceptor
axios.interceptors.response.use(
  (response) => 
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
     response.data
  , // function(response)
  (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error

    if (error.response && error.response.status === 401) {
      localStorage.clear();
    }

    return Promise.reject(error?.response?.data?.message);
  } // function(error)
); // 

export default axios;