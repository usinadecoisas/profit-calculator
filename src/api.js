import axios from 'axios';

const API_URL = 'https://api.example.com';

export const addProduct = async (product) => {
  const response = await axios.post(`${API_URL}/products`, product);
  return response.data;
};

export const addSupplier = async (supplier) => {
  const response = await axios.post(`${API_URL}/suppliers`, supplier);
  return response.data;
};

export const fetchProfitHistory = async () => {
  const response = await axios.get(`${API_URL}/profit-history`);
  return response.data;
};

export const uploadTaxRules = async (file) => {
  const formData = new FormData();
  formData.append('file', file);

  const response = await axios.post(`${API_URL}/tax-rules/upload`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
  return response.data;
};

export const fetchDashboardData = async () => {
  const response = await axios.get(`${API_URL}/dashboard`);
  return response.data;
};