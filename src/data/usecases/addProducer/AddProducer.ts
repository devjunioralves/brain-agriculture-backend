import { type IAddProducerRepository } from '@/data/protocols/IAddProducerRepository'
import { type IProducer } from '@/domain/models/IProducer'
import {
  type IAddProducer,
  type IProducerModel,
} from '@/domain/usecases/IAddProducer'

export class AddProducer implements IAddProducer {
  constructor(private readonly addProducerRepository: IAddProducerRepository) {
    this.addProducerRepository = addProducerRepository
  }

  async add(data: IProducerModel): Promise<IProducer> {
    return await this.addProducerRepository.add(data)
  }
}
