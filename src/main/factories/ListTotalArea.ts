import { ListTotalArea } from '@/data/usecases/listTotalArea/ListTotalArea'
import { ReportsRepository } from '@/infra/db/postgres/reportsRepository/ReportsRepository'
import { ListTotalAreaController } from '@/presentation/controllers/Reports/ListTotalArea'
import { type IController } from '@/presentation/protocols/IController'

export const makeListTotalAreaController = (): IController => {
  const reportsRepository = new ReportsRepository()
  const listTotalArea = new ListTotalArea(reportsRepository)
  return new ListTotalAreaController(listTotalArea)
}
