import { ListTotalFarmsByState } from '@/data/usecases/listTotalFarmsByState/ListTotalFarmsByState'
import { ReportsRepository } from '@/infra/db/postgres/reportsRepository/ReportsRepository'
import { ListTotalFarmsByStateController } from '@/presentation/controllers/Reports/ListTotalFarmsByState'
import { type IController } from '@/presentation/protocols/IController'

export const makeListTotalFarmsByStateController = (): IController => {
  const reportsRepository = new ReportsRepository()
  const listTotalFarmsByState = new ListTotalFarmsByState(reportsRepository)
  return new ListTotalFarmsByStateController(listTotalFarmsByState)
}
