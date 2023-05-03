import { type IProducer } from '../models/IProducer'

export interface IListOneProducer {
  listOne: (id: number) => Promise<IProducer>
}
