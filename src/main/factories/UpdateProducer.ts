import { UpdateProducer } from '../../data/usecases/updateProducer/UpdateProducer'
import { ProducerRepository } from '../../infra/db/postgres/producerRepository/ProducerRepository'
import { UpdateProducerController } from '../../presentation/controllers/Producers/UpdateProducer'
import { type IController } from '../../presentation/protocols/IController'

export const makeUpdateProducerController = (): IController => {
  const producerRepository = new ProducerRepository()
  const addProducer = new UpdateProducer(producerRepository)
  return new UpdateProducerController(addProducer)
}
