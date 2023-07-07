import axios from 'axios';
import { API_KEY, BASE_URL } from 'constants/constants';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  api_key: API_KEY,
  language: 'en-US',
};

export const fetchTrendMovie = async () => {
  const response = await axios.get(`/trending/movie/day`);
  return response.data.results;
};

export const searchMovie = async query => {
  const response = await axios.get(`/search/movie?query=${query}`);
  return response.data.results;
};
export const getMovieDetails = async movieId => {
  const response = await axios.get(`/movie/${movieId}`);
  return response.data;
};

export const getMovieCast = async movieId => {
  const response = await axios.get(`/movie/${movieId}/credits`);
  return response.data.cast;
};

export const getMovieReviews = async movieId => {
  const response = await axios.get(`/movie/${movieId}/reviews`);
  return response.data.results;
};
