//npm install jwt-decode
import {jwtDecode} from "jwt-decode";

export const getUserFromToken = () => {
  try {
    const token = localStorage.getItem("accessToken");
    if (!token) return null;

    const decoded = jwtDecode(token);
    return decoded; 

  } catch (err) {
    console.error("Error decoding token:", err);
    return null;
  }
};