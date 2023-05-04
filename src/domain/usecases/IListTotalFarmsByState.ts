import { type IFarmsByState } from '../models/IFarmsByState'

export interface IListTotalFarmsByState {
  listTotalFarmsByState: () => Promise<IFarmsByState[]>
}
