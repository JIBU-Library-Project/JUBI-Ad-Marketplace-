// Check your 

import { apiClient } from "./config";

export const apiFetchAdverts = async () => apiClient.get('/ads') //get For all Ads
export const apiGetSingleAdvert = async(id) => apiClient.get(`/ads/${id}`) // get a single Ad
export const apiUpdateAdvert = async(id, payload)=> apiClient.get (`/ads/${id}`,payload) // update a single product
// export const apiSingleVendorAds = async(Vendor_id) => apiClient.get(`/ads/${Vendor_id}`) // single Vendor As
export const apiCreatedAd = async(id,payload) => apiClient.get(`/ads/${id}`,payload);
export const apiDeleteAdvert =async (id) => apiClient.delete (`/ads/${id}`);

















































































//get all adverts
// export const apiFetchAdverts = async() = apiClient.get("/ads");

// export const apIGetSingleAdvert = async (id) => apiClient.get(/ads/${"id"});


//update an advert
// export const apiUpdateAdvert =async(id, payload) =>apiClient.put (/ads/${id}, payload);

//delete an advert
// export const apiDeleteAdvert =async (id) => apiClient.delete (/ads/${id});

//add a new advert
// export const apiCreatedAd = async(payload) => apiClient.get(/ads/${id});

