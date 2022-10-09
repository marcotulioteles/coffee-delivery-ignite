import axios from 'axios';

export const viaCepAPI = axios.create({
  baseURL: 'https://viacep.com.br/ws',
});