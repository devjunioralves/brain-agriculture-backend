import { ListTotalFarm } from '@/data/usecases/listTotalFarm/ListTotalFarm'
import { ReportsRepository } from '@/infra/db/postgres/reportsRepository/ReportsRepository'
import { ListTotalFarmsController } from '@/presentation/controllers/Reports/ListTotalFarms'
import { type IController } from '@/presentation/protocols/IController'

export const makeListTotalFarmsController = (): IController => {
  const reportsRepository = new ReportsRepository()
  const listTotalFarms = new ListTotalFarm(reportsRepository)
  return new ListTotalFarmsController(listTotalFarms)
}
