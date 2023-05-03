import { ListProducer } from '../../data/usecases/listProducer/ListProducer'
import { ProducerRepository } from '../../infra/db/postgres/producerRepository/ProducerRepository'
import { ListProducerController } from '../../presentation/controllers/Producers/ListProducers'
import { type IController } from '../../presentation/protocols/IController'

export const makeListProducerController = (): IController => {
  const producerRepository = new ProducerRepository()
  const addProducer = new ListProducer(producerRepository)
  return new ListProducerController(addProducer)
}
