import { type IProducer } from '@/domain/models/IProducer'

export interface IUpdateProducerRepository {
  update: (data: IProducer) => Promise<IProducer>
}
