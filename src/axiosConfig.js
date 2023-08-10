import axios from "axios";

const instance = axios.create({
   baseURL: process.env.REACT_APP_SERVER_URL
})

instance.interceptors.request.use(function (config) {
   /* Do something before is request sent */
   const token = localStorage.getItem('persist:auth')
   return config;
}, function (error) {
   /* Do something with request error */
   console.log(error);
   return Promise.reject(error)
})

export default instance