import axios from "axios";

console.log("API_BASE_URL: ", import.meta.env.VITE_API_BASE_URL);
const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    withCredentials: true, //Ensures cookies, including any auth tokens, are sent with each request if needed.
});

// Response interceptor to handle token expiration

export default axiosInstance;