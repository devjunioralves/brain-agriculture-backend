import { type ITotalByArea } from '../models/ITotalByArea'

export interface IListTotalByUsedArea {
  listTotalByUsedArea: () => Promise<ITotalByArea[]>
}
