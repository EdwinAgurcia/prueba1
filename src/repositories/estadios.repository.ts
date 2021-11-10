import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {EncuentrosDataSource} from '../datasources';
import {Estadios, EstadiosRelations} from '../models';

export class EstadiosRepository extends DefaultCrudRepository<
  Estadios,
  typeof Estadios.prototype.nombre,
  EstadiosRelations
> {
  constructor(
    @inject('datasources.encuentros') dataSource: EncuentrosDataSource,
  ) {
    super(Estadios, dataSource);
  }
}
