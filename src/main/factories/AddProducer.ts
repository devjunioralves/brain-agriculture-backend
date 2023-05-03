import { AddProducer } from '../../data/usecases/addProducer/AddProducer'
import { ProducerRepository } from '../../infra/db/postgres/producerRepository/ProducerRepository'
import { AddProducerController } from '../../presentation/controllers/Producers/AddProducer'
import { type IController } from '../../presentation/protocols/IController'

export const makeAddProducerController = (): IController => {
  const producerRepository = new ProducerRepository()
  const addProducer = new AddProducer(producerRepository)
  return new AddProducerController(addProducer)
}
