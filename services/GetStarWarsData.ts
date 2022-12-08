import { apiClient } from "../lib/axios";
import { Character, People } from "../types/People";
import { Films, SpecificFilm } from "../types/Films";
import { Starships, SpecificStarShip } from "../types/Starships";
import { Vehicles, SpecificVehicle } from "../types/Vehicles";
import { Speices, SpecificKind } from "../types/Speices";
import { Planets, SpecificPlanet } from "../types/Planets";

const dataFullInfo = async (type: number) => {
  const tab = [
    "people",
    "films",
    "starships",
    "vehicles",
    "species",
    "planets",
  ];
  const response = await apiClient.get(`/${tab[type]}`);
  if (type === 0) return response.data as People;
  if (type === 1) return response.data as Films;
  if (type === 2) return response.data as Starships;
  if (type === 3) return response.data as Vehicles;
  if (type === 4) return response.data as Speices;
  if (type === 5) return response.data as Planets;
  else return null;
};
const dataSpecificInfo = async (type: number, id: number) => {
  const tab = ["people", "films", "starships", "vehicles", "species"];
  const response = await apiClient.get(`/${tab[type]}/${id}`);
  if (type === 0) return response.data as Character;
  if (type === 1) return response.data as SpecificFilm;
  if (type === 2) return response.data as SpecificStarShip;
  if (type === 3) return response.data as SpecificVehicle;
  if (type === 4) return response.data as SpecificKind;
  if (type === 5) return response.data as SpecificPlanet;
};

export const DataServices = { dataFullInfo, dataSpecificInfo };
