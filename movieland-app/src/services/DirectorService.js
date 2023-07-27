import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/directors'; // Reemplaza esta URL por la de tu API

export const createDirector = async (director) => {
  try {
    const response = await axios.post(API_URL, director);
    return response.data;
  } catch (error) {
    console.error('Error creando director:', error);
    return null;
  }
};

export const getDirectorById = async (directorId) => {
  try {
    const response = await axios.get(`${API_URL}/${directorId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateDirectorById = async (directorId, directorData) => {
  try {
    const response = await axios.put(`${API_URL}/${directorId}`, directorData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
