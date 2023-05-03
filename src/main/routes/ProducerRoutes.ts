import { type Router } from 'express'
import { adaptRoute } from '../adapters/ExpressRoutesAdapter'
import { makeAddProducerController } from '../factories/AddProducer'
import { makeDeleteProducerController } from '../factories/DeleteProducer'
import { makeListOneProducerController } from '../factories/ListOneProducer'
import { makeListProducerController } from '../factories/ListProducer'
import { makeUpdateProducerController } from '../factories/UpdateProducer'

export default (router: Router): void => {
  router.post('/producer', adaptRoute(makeAddProducerController()))
  router.delete('/producer/:id', adaptRoute(makeDeleteProducerController()))
  router.get('/producer/:id', adaptRoute(makeListOneProducerController()))
  router.get('/producer', adaptRoute(makeListProducerController()))
  router.patch('/producer/:id', adaptRoute(makeUpdateProducerController()))
}
