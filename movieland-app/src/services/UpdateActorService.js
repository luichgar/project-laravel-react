// UpdateActorService.js
import axios from 'axios';

const BASE_URL = 'http://localhost:8000/api/actors';

export const updateActor = async (actorId, actorData) => {
  try {
    const response = await axios.put(`${BASE_URL}/${actorId}`, actorData);
    return response.data;
  } catch (error) {
    console.error('Error al actualizar el actor:', error);
    return null;
  }
};
