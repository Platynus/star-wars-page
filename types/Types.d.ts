import { Films } from "./Films";
import { People } from "./People";
import { Planets } from "./Planets";
import { Spieces } from "./Spieces";
import { Starships } from "./Starships";
import { Vehicles } from "./Vehicles";

export type Breadcrumb = {
  Film: Films[];
  People: People[];
  Planet: Planets[];
  Spieces: Spieces[];
  Starship: Starships[];
  Vehicle: Vehicles[];
};
