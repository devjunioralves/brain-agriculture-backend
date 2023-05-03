import { type IProducer } from '../../../domain/models/IProducer'
import {
  type IProducerModel,
  type IAddProducer,
} from '../../../domain/usecases/IAddProducer'
import { type IAddProducerRepository } from '../../protocols/IAddProducerRepository'

export class AddProducer implements IAddProducer {
  constructor(private readonly addProducerRepository: IAddProducerRepository) {
    this.addProducerRepository = addProducerRepository
  }

  async add(data: IProducerModel): Promise<IProducer> {
    return await this.addProducerRepository.add(data)
  }
}
