import { type IListTotalAreaRepository } from '@/data/protocols/IListTotalArea'
import { type IListTotalArea } from '@/domain/usecases/IListTotalArea'

export class ListTotalArea implements IListTotalArea {
  constructor(
    private readonly listTotalAreaRepository: IListTotalAreaRepository
  ) {
    this.listTotalAreaRepository = listTotalAreaRepository
  }

  async listTotalArea(): Promise<number> {
    return await this.listTotalAreaRepository.listTotalArea()
  }
}
