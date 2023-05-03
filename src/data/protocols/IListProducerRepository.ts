import { type IProducer } from '@/domain/models/IProducer'

export interface IListProducerRepository {
  list: () => Promise<IProducer[]>
}
