import { type IListTotalByUsedAreaRepository } from '@/data/protocols/IListTotalByUsedArea'
import { type ITotalByArea } from '@/domain/models/ITotalByArea'
import { type IListTotalByUsedArea } from '@/domain/usecases/IListTotalByUsedArea'

export class ListTotalByUsedArea implements IListTotalByUsedArea {
  constructor(
    private readonly listTotalByUsedAreaRepository: IListTotalByUsedAreaRepository
  ) {
    this.listTotalByUsedAreaRepository = listTotalByUsedAreaRepository
  }

  async listTotalByUsedArea(): Promise<ITotalByArea[]> {
    return await this.listTotalByUsedAreaRepository.listTotalByUsedArea()
  }
}
