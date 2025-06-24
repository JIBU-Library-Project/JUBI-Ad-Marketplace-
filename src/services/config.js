import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;

export const apiClient = axios.create({
  baseURL: baseURL,
});

// Intercept request to attach token
apiClient.interceptors.request.use(
  (config) => {
    // Retrieve Token Form Local Storage
    //JWT tokens should be attached to heasders
    const token = localStorage.getItem("accessToken");
    if (token) {
      // JWT token must be always attached to Bearere
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },

  (error) => Promise.reject(error)
);
