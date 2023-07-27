// services/ActorService.js
import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/actors'; // Reemplaza esta URL por la de tu API

export const createActor = async (actor) => {
  try {
    const response = await axios.post(API_URL, actor);
    return response.data;
  } catch (error) {
    console.error('Error creando actor:', error);
    return null;
  }
};

const BASE_URL = 'http://127.0.0.1:8000/api';

// Obtener detalles del actor por su ID
export const getActorById = async (actorId) => {
  try {
    const response = await axios.get(`${BASE_URL}/actors/${actorId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateActorById = async (actorId, actorData) => { // Cambiamos el nombre de la función a 'updateActorById'
    try {
      const response = await axios.put(`${BASE_URL}/actors/${actorId}`, actorData);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  

