import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Equipos extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  colores: string;

  @property({
    type: 'string',
    required: true,
  })
  liga: string;

  @property({
    type: 'string',
    required: true,
  })
  pais: string;

  @property({
    type: 'string',
    required: true,
  })
  campeonatos: string;

  @property({
    type: 'string',
    required: true,
  })
  jugadores: string;

  @property({
    type: 'string',
  })
  da?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Equipos>) {
    super(data);
  }
}

export interface EquiposRelations {
  // describe navigational properties here
}

export type EquiposWithRelations = Equipos & EquiposRelations;
