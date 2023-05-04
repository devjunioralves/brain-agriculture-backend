import { type IController } from '../../protocols/IController'
import { type IHttpResponse } from '../../protocols/IHttp'
import { ok, serverError } from '../../helpers/HttpHelper'
import { type IListTotalFarmsByState } from '@/domain/usecases/IListTotalFarmsByState'

export class ListTotalFarmsByStateController implements IController {
  constructor(private readonly listTotalFarmsByState: IListTotalFarmsByState) {
    this.listTotalFarmsByState = listTotalFarmsByState
  }

  async handle(): Promise<IHttpResponse> {
    try {
      const totalFarmsByState =
        await this.listTotalFarmsByState.listTotalFarmsByState()
      return ok(totalFarmsByState)
    } catch (error) {
      return serverError(error as Error)
    }
  }
}
