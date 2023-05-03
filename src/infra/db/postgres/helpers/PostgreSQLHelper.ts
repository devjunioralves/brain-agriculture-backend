import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { Producer } from '../producerRepository/entity/Producer'

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'brain',
  synchronize: true,
  logging: false,
  entities: [Producer],
  migrations: [],
  subscribers: [],
})
