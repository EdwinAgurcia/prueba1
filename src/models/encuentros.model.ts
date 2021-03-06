import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Encuentros extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  equipo1: string;

  @property({
    type: 'string',
    required: true,
  })
  equipo2: string;

  @property({
    type: 'string',
    required: true,
  })
  empate: string;

  @property({
    type: 'string',
    required: true,
  })
  ganados: string;

  @property({
    type: 'string',
    required: true,
  })
  perdidos: string;

  @property({
    type: 'string',
    required: true,
  })
  goles: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Encuentros>) {
    super(data);
  }
}

export interface EncuentrosRelations {
  // describe navigational properties here
}

export type EncuentrosWithRelations = Encuentros & EncuentrosRelations;
