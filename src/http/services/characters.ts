import { Character, SwapiCharactersResponse } from '@/types/index';
import axiosInstance from '../utils';
import { getCharacterId } from '@/utils/index';

const addIdToCharacter = (charactersData: SwapiCharactersResponse) => {
  const results = charactersData.results.map((character) => ({
    ...character,
    id: getCharacterId(character.url),
  }));
  return { ...charactersData, results };
};

export const getCharactersByPage = async (
  page = 1
): Promise<SwapiCharactersResponse | undefined> => {
  const SWAPI_URL = `https://swapi.trileuco.com/api/people/?page=${page}`;
  try {
    const response = await axiosInstance.get(SWAPI_URL);
    return addIdToCharacter(response.data);
  } catch (error) {
    console.error({ error });
    return;
  }
};

export const getSpecies = async (
  page = 1
): Promise<SwapiCharactersResponse | undefined> => {
  const SWAPI_URL = `https://swapi.trileuco.com/api/people/?page=${page}`;
  try {
    const response = await axiosInstance.get(SWAPI_URL);
    return addIdToCharacter(response.data);
  } catch (error) {
    console.error({ error });
    return;
  }
};

