import { type IProducer } from '../../../domain/models/IProducer'
import { type IDeleteProducer } from '../../../domain/usecases/IDeleteProducer'
import { type IDeleteProducerRepository } from '../../protocols/IDeleteProducerRepository'

export class DeleteProducer implements IDeleteProducer {
  constructor(
    private readonly deleteProducerRepository: IDeleteProducerRepository
  ) {
    this.deleteProducerRepository = deleteProducerRepository
  }

  async delete(id: number): Promise<IProducer> {
    return await this.deleteProducerRepository.delete(id)
  }
}
