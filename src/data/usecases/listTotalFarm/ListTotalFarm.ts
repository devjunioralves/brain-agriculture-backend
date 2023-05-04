import { type IListTotalFarmsRepository } from '@/data/protocols/IListTotalFarmsRepository'
import { type IListTotalFarm } from '../../../domain/usecases/IListTotalFarm'

export class ListTotalFarm implements IListTotalFarm {
  constructor(
    private readonly listTotalFarmsRepository: IListTotalFarmsRepository
  ) {
    this.listTotalFarmsRepository = listTotalFarmsRepository
  }

  async listTotalFarms(): Promise<number> {
    return await this.listTotalFarmsRepository.listTotalFarms()
  }
}
