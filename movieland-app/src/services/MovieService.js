// services/MovieService.js
import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/movies'; // Reemplaza esta URL por la de tu API

export const createMovie = async (movie) => {
  try {
    const response = await axios.post(API_URL, movie);
    return response.data;
  } catch (error) {
    console.error('Error creando película:', error);
    return null;
  }
};

export const getMovieById = async (movieId) => {
  try {
    const response = await axios.get(`${API_URL}/${movieId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateMovieById = async (movieId, movieData) => {
  try {
    const response = await axios.put(`${API_URL}/${movieId}`, movieData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
