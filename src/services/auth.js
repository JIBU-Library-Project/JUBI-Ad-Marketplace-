import { apiClient } from "./config";

export const apiLogin = async (payload) => apiClient.post("/signin", payload);
export const apiSignup = async (payload) => apiClient.post("/signup", payload);






