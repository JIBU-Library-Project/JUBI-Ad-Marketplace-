import { apiClient } from "./config";

//  Get all ads
export const apiFetchAdverts = async () => {
  return apiClient.get("/adverts");
};

//  Get a single ad by ID
export const apiGetSingleAdvert = async (id) => {
  return apiClient.get(`/adverts/${id}`);
};

//  Update a single ad by ID (PUT method is used for updating)
export const apiUpdateAdvert = async (id, payload) => {
  return apiClient.patch(`/adverts/${id}`, payload);
};

//  Get all ads by a single vendor
export const apiSingleVendorAds = async () => {
  return apiClient.get("/vendor/adverts");
};

//  Create a new ad (use POST method)
export const apiCreatedAd = async (payload) => {
  return apiClient.post("/adverts/post", payload, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

//  Delete an ad by ID
export const apiDeleteAdvert = async (id) => {
  return apiClient.delete(`/adverts/${id}`);
};
