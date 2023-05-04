import { type IFarmsByState } from '@/domain/models/IFarmsByState'

export interface IListTotalFarmsByStateRepository {
  listTotalFarmsByState: () => Promise<IFarmsByState[]>
}
