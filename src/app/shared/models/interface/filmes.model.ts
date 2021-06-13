import { NavesModel } from './naves.model';
import { PersonagensModel } from './personagens.model';
import { PlanetasModel } from './planetas.model';
import { VeiculosModel } from './veiculos.model';

export interface FilmeModel {
  id: number;
  title: string;
  episoe_id: number;
  opening_crawl: string;
  director: string;
  producer: String;
  release_date: Date;
  characteres: PersonagensModel[];
  planets: PlanetasModel[];
  starship: NavesModel[];
  veicles: VeiculosModel[];
  created: Date;
  edited: Date;
  url: string;
}
