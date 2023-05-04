import { type ITotalByArea } from '@/domain/models/ITotalByArea'

export interface IListTotalByUsedAreaRepository {
  listTotalByUsedArea: () => Promise<ITotalByArea[]>
}
