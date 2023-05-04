import { type IController } from '../../protocols/IController'
import { type IHttpResponse } from '../../protocols/IHttp'
import { ok, serverError } from '../../helpers/HttpHelper'
import { type IListTotalFarm } from '../../../domain/usecases/IListTotalFarm'

export class ListTotalFarmsController implements IController {
  constructor(private readonly listTotalFarms: IListTotalFarm) {
    this.listTotalFarms = listTotalFarms
  }

  async handle(): Promise<IHttpResponse> {
    try {
      const totalFarms = await this.listTotalFarms.listTotalFarms()
      return ok(totalFarms)
    } catch (error) {
      return serverError(error as Error)
    }
  }
}
