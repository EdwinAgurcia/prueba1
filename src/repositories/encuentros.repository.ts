import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {EncuentrosDataSource} from '../datasources';
import {Encuentros, EncuentrosRelations} from '../models';

export class EncuentrosRepository extends DefaultCrudRepository<
  Encuentros,
  typeof Encuentros.prototype.equipo1,
  EncuentrosRelations
> {
  constructor(
    @inject('datasources.encuentros') dataSource: EncuentrosDataSource,
  ) {
    super(Encuentros, dataSource);
  }
}
