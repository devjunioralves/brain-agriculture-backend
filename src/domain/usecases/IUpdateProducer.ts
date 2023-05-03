import { type IProducer } from '../models/IProducer'

export interface IUpdateProducer {
  update: (data: IProducer) => Promise<IProducer>
}
