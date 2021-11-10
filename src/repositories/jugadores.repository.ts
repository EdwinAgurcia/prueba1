import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {EncuentrosDataSource} from '../datasources';
import {Jugadores, JugadoresRelations} from '../models';

export class JugadoresRepository extends DefaultCrudRepository<
  Jugadores,
  typeof Jugadores.prototype.equipos,
  JugadoresRelations
> {
  constructor(
    @inject('datasources.encuentros') dataSource: EncuentrosDataSource,
  ) {
    super(Jugadores, dataSource);
  }
}
