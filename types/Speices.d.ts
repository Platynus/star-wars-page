export type Speices = {
  count: string;
  next: string;
  previous: string;
  results: SpecificKind[];
};
export type SpecificKind = {
  name: string;
  classification: string;
  designation: string;
  average_height: string;
  skin_colors: string;
  hair_colors: string;
  eye_colors: string;
  average_lifespan: string;
  homeworld: string;
  language: string;
  people: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
};
