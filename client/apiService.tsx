import axios from 'axios';

const BASE_URL = 'http://localhost:3001/api'; // Update to your server URL if different

// Function to get app details by appId
export const getAppDetails = (appId: string) => {
  return axios.get(`${BASE_URL}/apps/${appId}`);
};

// Function to get similar apps by appId
export const getSimilarApps = (appId: string) => {
  return axios.get(`${BASE_URL}/apps/${appId}/similar`);
};

// Function to get app permissions by appId
export const getAppPermissions = (appId: string) => {
  return axios.get(`${BASE_URL}/apps/${appId}/permissions`);
};

// Function to get app data safety by appId
export const getAppDataSafety = (appId: string) => {
  return axios.get(`${BASE_URL}/apps/${appId}/datasafety`);
};

// Function to get app reviews by appId
export const getAppReviews = (appId: string, page: number = 0) => {
  return axios.get(`${BASE_URL}/apps/${appId}/reviews`, {
    params: { page }
  });
};

// Function to search for apps
export const searchApps = (query: string) => {
  return axios.get(`${BASE_URL}/apps`, {
    params: { q: query }
  });
};

// Function to get search suggestions
export const getSearchSuggestions = (query: string) => {
  return axios.get(`${BASE_URL}/apps`, {
    params: { suggest: query }
  });
};

// Function to get categories
export const getCategories = () => {
  return axios.get(`${BASE_URL}/categories`);
};
