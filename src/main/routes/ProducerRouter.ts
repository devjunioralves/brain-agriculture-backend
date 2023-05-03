import { type Router } from 'express'
import { adaptRoute } from '../adapters/ExpressRoutesAdapter'
import { makeAddProducerController } from '../factories/AddProducer'

export default (router: Router): void => {
  router.post('/producer', adaptRoute(makeAddProducerController()))
}
