import { type IListTotalArableAreaRepository } from '@/data/protocols/IListTotalArableArea'
import { type IListTotalArableArea } from '@/domain/usecases/IListTotalArableArea'

export class ListTotalArableArea implements IListTotalArableArea {
  constructor(
    private readonly listTotalArableAreaRepository: IListTotalArableAreaRepository
  ) {
    this.listTotalArableAreaRepository = listTotalArableAreaRepository
  }

  async listTotalArableArea(): Promise<number> {
    return await this.listTotalArableAreaRepository.listTotalArableArea()
  }
}
