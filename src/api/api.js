import axios from "axios";
import { SERVER_BASE_URL } from "../config/constants";

export const api = axios.create({
  baseURL: SERVER_BASE_URL,
});

// httpClient.interceptors.request.use((req) => {
//     req.headers.Authorization = 'token x';
// });

// httpClient.interceptors.response.use((res) => {
//   if (res.status >= 500) {
//     console.log(res);
//   }
// });

// {
//     method: "GET",
//     baseURL: 'localhost:3000',
//     headers: {
//         Authorization = 'token x',
//     }
// }
