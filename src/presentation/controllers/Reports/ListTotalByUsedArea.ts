import { type IController } from '../../protocols/IController'
import { type IHttpResponse } from '../../protocols/IHttp'
import { ok, serverError } from '../../helpers/HttpHelper'
import { type IListTotalByUsedArea } from '@/domain/usecases/IListTotalByUsedArea'

export class ListTotalByUsedAreaController implements IController {
  constructor(private readonly listTotalByUsedArea: IListTotalByUsedArea) {
    this.listTotalByUsedArea = listTotalByUsedArea
  }

  async handle(): Promise<IHttpResponse> {
    try {
      const totalByUsedArea =
        await this.listTotalByUsedArea.listTotalByUsedArea()
      return ok(totalByUsedArea)
    } catch (error) {
      return serverError(error as Error)
    }
  }
}
