import { FilmeModel } from './filmes.model';

export interface VeiculosModel {
  id: number;
  name: string;
  model: string;
  manufacturecer: string;
  cost_in_credits: number;
  length: number;
  max_atmosphering_speed: number;
  crew: number;
  passengers: number;
  cargo_capacity: number;
  consumables: number;
  vehicles_class: string;
  films: FilmeModel[];
  created: Date;
  edited: Date;
  url: string;
}
