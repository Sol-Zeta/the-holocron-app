export interface CharacterSubobject {
  name?: string;
  title?: string;
}

// type CharacterSubobject = Subobject | Subobject[]

export interface Character {
  id?: string;
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
}

export interface CharacterFullData {
  id?: string;
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: CharacterSubobject;
  films: CharacterSubobject[];
  species: CharacterSubobject[];
  vehicles: CharacterSubobject[];
  starships: CharacterSubobject[];
  created: string;
  edited: string;
  url: string;
}

export interface SwapiCharactersResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Character[];
}

export interface SwapiCharacterResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Character[];
}
