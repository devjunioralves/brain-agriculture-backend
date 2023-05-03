import { type IProducer } from '../models/IProducer'

export interface IListProducer {
  list: () => Promise<IProducer[]>
}
