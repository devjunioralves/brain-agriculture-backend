import { type ITotalByCrops } from '@/domain/models/ITotalByCrops'

export interface IListTotalByCropsRepository {
  listTotalByCrops: () => Promise<ITotalByCrops[]>
}
