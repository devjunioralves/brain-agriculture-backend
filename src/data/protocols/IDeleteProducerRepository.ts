import { type IProducer } from '../../domain/models/IProducer'

export interface IDeleteProducerRepository {
  delete: (id: number) => Promise<IProducer>
}
