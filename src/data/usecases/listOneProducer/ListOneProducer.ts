import { type IListOneProducerRepository } from '@/data/protocols/IListOneProducerRepository'
import { type IProducer } from '@/domain/models/IProducer'
import { type IListOneProducer } from '@/domain/usecases/IListOneProducer'

export class ListOneProducer implements IListOneProducer {
  constructor(
    private readonly listOneProducerRepository: IListOneProducerRepository
  ) {
    this.listOneProducerRepository = listOneProducerRepository
  }

  async listOne(id: number): Promise<IProducer> {
    return await this.listOneProducerRepository.listOne(id)
  }
}
