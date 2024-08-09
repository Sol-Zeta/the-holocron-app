import {
  Character,
  CharacterFullData,
  SwapiCharactersResponse,
} from '@/types/index';
import axiosInstance, { SWAPI_URL } from '@/http/utils';
import { getCharacterId, isValidUrl } from '@/utils/index';

const addIdToCharacter = (charactersData: SwapiCharactersResponse) => {
  const results = charactersData.results.map((character) => ({
    ...character,
    id: getCharacterId(character.url),
  }));
  return { ...charactersData, results };
};

export const getCharactersByPage = async (
  page = '1'
): Promise<SwapiCharactersResponse | undefined> => {
  const url = `${SWAPI_URL}?page=${page}`;
  try {
    const response = await axiosInstance.get(url);
    return addIdToCharacter(response.data);
  } catch (error) {
    console.error({ error });
    return;
  }
};

export const getSpecies = async (
  page = 1
): Promise<SwapiCharactersResponse | undefined> => {
  const url = `${SWAPI_URL}/?page=${page}`;
  try {
    const response = await axiosInstance.get(url);
    return addIdToCharacter(response.data);
  } catch (error) {
    console.error({ error });
    return;
  }
};

export const getCharacterById = async (
  id: string
): Promise<Character | undefined> => {
  const url = `${SWAPI_URL}${id}`;
  try {
    const response = await axiosInstance.get(url);
    return response.data;
  } catch (error) {
    console.error({ error });
    throw error;
  }
};

export const getCharacterData = async (
  url: string
): Promise<SwapiCharactersResponse | undefined> => {
  try {
    const response = await axiosInstance.get(url);
    return response.data;
  } catch (error) {
    console.error({ error });
    throw error;
  }
};

export const getFullCharacterData = async (
  id: string
): Promise<CharacterFullData | null> => {
  try {
    const character = await getCharacterById(id);

    if (!character) return null;

    const entries = Object.entries(character);

    const promises = entries.map(async ([key, value]) => {
      if (isValidUrl(value) && key !== 'url') {
        const response = await axiosInstance.get(value);
        if (response.data) {
          return [key, response.data];
        }
        return [key, value];
      } else if (Array.isArray(value)) {
        const results = await Promise.all(
          value.map(async (url) => {
            if (isValidUrl(url)) {
              const response = await axiosInstance.get(url);
              return response.data;
            }
            return Promise.resolve(url);
          })
        );
        return [key, results];
      }
      return [key, value];
    });
    const resolvedData: any[] = await Promise.all(promises);
    return Object.fromEntries(resolvedData) as CharacterFullData;
  } catch (error) {
    console.error({ error });
    throw error;
  }
};
