import { SwapiCharactersResponse } from '@/types/index';
import axiosInstance from '../utils';

export const getCharactersByPage = async (
  page = 1
): Promise<SwapiCharactersResponse | undefined > => {
  const SWAPI_URL = `https://swapi.trileuco.com/api/people/?page=${page}`;
  try {
    const response = await axiosInstance.get(SWAPI_URL);
    return response.data;
  } catch (error) {
    console.log({ error });
    return;
  }
};
