import { type Router } from 'express'
import { adaptRoute } from '../adapters/ExpressRoutesAdapter'
import { makeListTotalByCropsController } from '../factories/ListTotalByCrops'
import { makeListTotalAreaController } from '../factories/ListTotalArea'
import { makeListTotalByUsedAreaController } from '../factories/ListTotalByUsedArea'
import { makeListTotalFarmsController } from '../factories/ListTotalFarms'
import { makeListTotalFarmsByStateController } from '../factories/ListTotalFarmsByState'

export default (router: Router): void => {
  router.get(
    '/reports/total-by-crops',
    adaptRoute(makeListTotalByCropsController())
  )
  router.get('/reports/total-area', adaptRoute(makeListTotalAreaController()))
  router.get(
    '/reports/total-by-area',
    adaptRoute(makeListTotalByUsedAreaController())
  )
  router.get('/reports/total-farms', adaptRoute(makeListTotalFarmsController()))
  router.get(
    '/reports/total-farms-by-state',
    adaptRoute(makeListTotalFarmsByStateController())
  )
}
