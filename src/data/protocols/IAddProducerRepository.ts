import { type IProducer } from '../../domain/models/IProducer'
import { type IProducerModel } from '../../domain/usecases/IAddProducer'

export interface IAddProducerRepository {
  add: (data: IProducerModel) => Promise<IProducer>
}
