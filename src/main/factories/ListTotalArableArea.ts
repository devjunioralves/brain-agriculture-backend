import { ListTotalArableArea } from '@/data/usecases/listTotalArableArea/ListTotalArableArea'
import { ReportsRepository } from '@/infra/db/postgres/reportsRepository/ReportsRepository'
import { ListTotalArableAreaController } from '@/presentation/controllers/Reports/ListTotalArableArea'
import { type IController } from '@/presentation/protocols/IController'

export const makeListTotalArableAreaController = (): IController => {
  const reportsRepository = new ReportsRepository()
  const listTotalArableArea = new ListTotalArableArea(reportsRepository)
  return new ListTotalArableAreaController(listTotalArableArea)
}
