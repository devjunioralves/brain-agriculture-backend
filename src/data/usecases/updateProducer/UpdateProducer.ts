import { type IProducer } from '../../../domain/models/IProducer'
import { type IUpdateProducer } from '../../../domain/usecases/IUpdateProducer'
import { type IUpdateProducerRepository } from '../../protocols/IUpdateProducerRepository'

export class UpdateProducer implements IUpdateProducer {
  constructor(
    private readonly updateProducerRepository: IUpdateProducerRepository
  ) {
    this.updateProducerRepository = updateProducerRepository
  }

  async update(data: IProducer): Promise<IProducer> {
    return await this.updateProducerRepository.update(data)
  }
}
