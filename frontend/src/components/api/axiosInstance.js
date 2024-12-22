import axios from "axios";

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: "http://localhost:5000", // Replace with your API base URL
  timeout: 5000, // Set a timeout (optional)
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// axiosInstance.interceptors.request.use(
//   (config) => {
//     // Add authorization token if needed
//     const token = localStorage.getItem("authToken"); // Fetch token from localStorage
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`; // Attach token to Authorization header
//     }
//     return config; // Return modified config
//   },
//   (error) => {
//     return Promise.reject(error); // Handle request errors
//   }
// );


// axiosInstance.interceptors.response.use(
//   (response) => {
//     return response.data; // Return only the data (omit headers, status, etc.)
//   },
//   (error) => {
//     // Handle errors globally
//     console.error("Axios Error:", error.response || error.message);
//     return Promise.reject(error); // Pass error to catch block
//   }
// );


export default axiosInstance;
