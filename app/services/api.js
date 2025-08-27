import axios from "axios";

const API = axios.create({
  baseURL: "http://10.0.2.2:5122/api", // Android emulator -> your backend
  // for iOS simulator: use "http://localhost:5000/api"
});

export const register = (data) => API.post("/StoreOwner/register", data);
export const login = (data) => API.post("/auth/login", data);

export const addPaymentMethod = (userId, paymentMethodId) =>
  API.post(`/payments/${userId}/add`, { paymentMethodId });

export const requestService = (data) => API.post("/serviceRequests", data);

export const getServiceStatus = (id) =>
  API.get(`/serviceRequests/${id}/status`);
