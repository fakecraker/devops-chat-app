// import axios from 'axios'

// export const axiosInstance=axios.create({
//     baseURL:import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "/api",
//     withCredentials:true,
// })

import axios from "axios";

// Decide the base URL before creating axios instance
// const baseURL =
//   import.meta.env.MODE === "development"
//     ? "http://localhost:5001/api"
//     : window.location.hostname === "3.111.198.194"
//       ? "http://3.111.198.194:5001/api"
//       : "/api";


const baseURL =
  window.location.hostname === "localhost"
    ? "http://localhost:5001/api"                // when running locally
    : "http://13.126.15.116:5001/api";


export const axiosInstance = axios.create({
  baseURL,
  withCredentials: true,
});
