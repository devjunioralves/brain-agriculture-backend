import { type IListTotalFarmsByStateRepository } from '@/data/protocols/IListTotalFarmsByStateRepository'
import { type IFarmsByState } from '@/domain/models/IFarmsByState'
import { type IListTotalFarmsByState } from '@/domain/usecases/IListTotalFarmsByState'

export class ListTotalFarmsByState implements IListTotalFarmsByState {
  constructor(
    private readonly listTotalFarmsByStateRepository: IListTotalFarmsByStateRepository
  ) {
    this.listTotalFarmsByStateRepository = listTotalFarmsByStateRepository
  }

  async listTotalFarmsByState(): Promise<IFarmsByState[]> {
    return await this.listTotalFarmsByStateRepository.listTotalFarmsByState()
  }
}
