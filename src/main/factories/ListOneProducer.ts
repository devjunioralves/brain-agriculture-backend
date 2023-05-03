import { ListOneProducer } from '../../data/usecases/listOneProducer/ListOneProducer'
import { ProducerRepository } from '../../infra/db/postgres/producerRepository/ProducerRepository'
import { ListOneProducerController } from '../../presentation/controllers/Producers/ListOneProducer'
import { type IController } from '../../presentation/protocols/IController'

export const makeListOneProducerController = (): IController => {
  const producerRepository = new ProducerRepository()
  const addProducer = new ListOneProducer(producerRepository)
  return new ListOneProducerController(addProducer)
}
