import { FilmeModel } from './filmes.model';

export interface NavesModel {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: number;
  length: number;
  max_atmosphering_speed: number;
  crew: string;
  passenger: number;
  cargo_capacity: number;
  consumables: number;
  hyperdrive_rating: number;
  MGLT: number;
  starship_class: string;
  pilots: [];
  filmes: FilmeModel[];
  created: Date;
  edited: Date;
  url: string;
}
