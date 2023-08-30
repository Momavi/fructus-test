import axios from 'axios';

const apiService = axios.create({
  baseURL: 'https://devtwit8.ru/api/v1/page/',
});

export async function getRequest(path = '') {
  return (await apiService.get(`?path=/${ path }`)).data;
}