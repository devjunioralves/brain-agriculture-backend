import { type IListTotalByCropsRepository } from '@/data/protocols/IListTotalByCropsRepository'
import { type ITotalByArea } from '@/domain/models/ITotalByArea'
import { type IListTotalByCrops } from '@/domain/usecases/IListTotalByCrops'

export class ListTotalByCrops implements IListTotalByCrops {
  constructor(
    private readonly listTotalByCropsRepository: IListTotalByCropsRepository
  ) {
    this.listTotalByCropsRepository = listTotalByCropsRepository
  }

  async listTotalByCrops(): Promise<ITotalByArea[]> {
    return await this.listTotalByCropsRepository.listTotalByCrops()
  }
}
