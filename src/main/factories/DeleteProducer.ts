import { DeleteProducer } from '../../data/usecases/deleteProducer/DeleteProducer'
import { ProducerRepository } from '../../infra/db/postgres/producerRepository/ProducerRepository'
import { DeleteProducerController } from '../../presentation/controllers/Producers/DeleteProducer'
import { type IController } from '../../presentation/protocols/IController'

export const makeDeleteProducerController = (): IController => {
  const producerRepository = new ProducerRepository()
  const addProducer = new DeleteProducer(producerRepository)
  return new DeleteProducerController(addProducer)
}
