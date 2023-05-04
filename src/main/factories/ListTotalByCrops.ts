import { ListTotalByCrops } from '@/data/usecases/listTotalByCrops/ListTotalByCrops'
import { ReportsRepository } from '@/infra/db/postgres/reportsRepository/ReportsRepository'
import { ListTotalByCropsController } from '@/presentation/controllers/Reports/ListTotalByCrops'
import { type IController } from '@/presentation/protocols/IController'

export const makeListTotalByCropsController = (): IController => {
  const reportsRepository = new ReportsRepository()
  const listTotalByCrops = new ListTotalByCrops(reportsRepository)
  return new ListTotalByCropsController(listTotalByCrops)
}
