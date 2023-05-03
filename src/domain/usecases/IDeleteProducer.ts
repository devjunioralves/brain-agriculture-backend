import { type IProducer } from '../models/IProducer'

export interface IDeleteProducer {
  delete: (id: number) => Promise<IProducer>
}
