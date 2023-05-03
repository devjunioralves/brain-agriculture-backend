import { type IListProducerRepository } from '@/data/protocols/IListProducerRepository'
import { type IProducer } from '@/domain/models/IProducer'
import { type IListProducer } from '@/domain/usecases/IListProducer'

export class ListProducer implements IListProducer {
  constructor(
    private readonly listProducerRepository: IListProducerRepository
  ) {
    this.listProducerRepository = listProducerRepository
  }

  async list(): Promise<IProducer[]> {
    return await this.listProducerRepository.list()
  }
}
