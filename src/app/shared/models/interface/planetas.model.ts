import { FilmeModel } from './filmes.model';
import { PersonagensModel } from './personagens.model';

export interface PlanetasModel {
  name: string;
  rotation_period: number;
  orbital_period: number;
  diameter: number;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: number;
  population: number;
  residents: PersonagensModel[];
  films: FilmeModel[];
  created: Date;
  edited: Date;
  url: string;
}
