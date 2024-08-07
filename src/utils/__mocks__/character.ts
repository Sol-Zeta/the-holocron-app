import { Character } from "../../types";

export const MOCK_CHARACTER: Character = {
  name: 'Anakin Skywalker',
  height: '188',
  mass: '84',
  hair_color: 'blond',
  skin_color: 'fair',
  eye_color: 'blue',
  birth_year: '41.9BBY',
  gender: 'male',
  homeworld: 'https://swapi.trileuco.com/api/planets/1/',
  films: [
    'https://swapi.trileuco.com/api/films/4/',
    'https://swapi.trileuco.com/api/films/5/',
    'https://swapi.trileuco.com/api/films/6/',
  ],
  species: [],
  vehicles: [
    'https://swapi.trileuco.com/api/vehicles/44/',
    'https://swapi.trileuco.com/api/vehicles/46/',
  ],
  starships: [
    'https://swapi.trileuco.com/api/starships/39/',
    'https://swapi.trileuco.com/api/starships/59/',
    'https://swapi.trileuco.com/api/starships/65/',
  ],
  created: '2014-12-10T16:20:44.310000Z',
  edited: '2014-12-20T21:17:50.327000Z',
  url: 'https://swapi.trileuco.com/api/people/11/',
};
