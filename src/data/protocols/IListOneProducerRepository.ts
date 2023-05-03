import { type IProducer } from '@/domain/models/IProducer'

export interface IListOneProducerRepository {
  listOne: (id: number) => Promise<IProducer>
}
