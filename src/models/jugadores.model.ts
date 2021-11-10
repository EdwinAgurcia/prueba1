import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Jugadores extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  equipos: string;

  @property({
    type: 'string',
    required: true,
  })
  id: string;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'number',
    required: true,
  })
  edad: number;

  @property({
    type: 'string',
    required: true,
  })
  titulos: string;

  @property({
    type: 'string',
    required: true,
  })
  posicion: string;

  @property({
    type: 'number',
    required: true,
  })
  altura: number;

  @property({
    type: 'number',
  })
  Goles?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Jugadores>) {
    super(data);
  }
}

export interface JugadoresRelations {
  // describe navigational properties here
}

export type JugadoresWithRelations = Jugadores & JugadoresRelations;
