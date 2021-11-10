import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'encuentros',
  connector: 'mongodb',
  url: 'mongodb+srv://emac:2706@cluster0.b9nnd.mongodb.net/test',
  host: '0.0.0.0/0',
  port: 27017,
  user: 'emac',
  password: '2706',
  database: 'lab',
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class EncuentrosDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'encuentros';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.encuentros', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
