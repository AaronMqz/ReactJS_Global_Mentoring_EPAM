import axios from 'axios';
import { API_URL } from './apiConfig';

export const getMoviesAPI = (sort, filter, limit) => {
  const url = `${API_URL}/movies?sortBy=${sort}&filter=${filter}&limit=${limit}&sortOrder=desc`;

  return axios
    .get(url)
    .then(({ data }) => {
      return data;
    })
    .catch((error) => {
      throw error;
    });
};
