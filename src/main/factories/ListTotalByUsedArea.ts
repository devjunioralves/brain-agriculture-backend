import { ListTotalByUsedArea } from '@/data/usecases/listTotalByUsedArea/ListTotalByUsedArea'
import { ReportsRepository } from '@/infra/db/postgres/reportsRepository/ReportsRepository'
import { ListTotalByUsedAreaController } from '@/presentation/controllers/Reports/ListTotalByUsedArea'
import { type IController } from '@/presentation/protocols/IController'

export const makeListTotalByUsedAreaController = (): IController => {
  const reportsRepository = new ReportsRepository()
  const listTotalByUsedArea = new ListTotalByUsedArea(reportsRepository)
  return new ListTotalByUsedAreaController(listTotalByUsedArea)
}
