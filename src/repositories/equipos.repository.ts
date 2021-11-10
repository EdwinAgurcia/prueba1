import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {EncuentrosDataSource} from '../datasources';
import {Equipos, EquiposRelations} from '../models';

export class EquiposRepository extends DefaultCrudRepository<
  Equipos,
  typeof Equipos.prototype.nombre,
  EquiposRelations
> {
  constructor(
    @inject('datasources.encuentros') dataSource: EncuentrosDataSource,
  ) {
    super(Equipos, dataSource);
  }
}
