import { type ITotalByCrops } from '../models/ITotalByCrops'

export interface IListTotalByCrops {
  listTotalByCrops: () => Promise<ITotalByCrops[]>
}
