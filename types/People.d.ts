export type People = {
  count: number;
  next: string;
  previous: null;
  results: Character[];
};
export type Character = {
  name: string;
  height: number;
  mass: string;
  hair_color: string;
  skin_color: string;
  birth_year: string;
  eye_color: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
};
