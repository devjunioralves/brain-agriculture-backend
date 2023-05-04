import { type IController } from '../../protocols/IController'
import { type IHttpResponse } from '../../protocols/IHttp'
import { ok, serverError } from '../../helpers/HttpHelper'
import { type IListTotalArea } from '@/domain/usecases/IListTotalArea'

export class ListTotalAreaController implements IController {
  constructor(private readonly listTotalArea: IListTotalArea) {
    this.listTotalArea = listTotalArea
  }

  async handle(): Promise<IHttpResponse> {
    try {
      const totalArea = await this.listTotalArea.listTotalArea()
      return ok(totalArea)
    } catch (error) {
      return serverError(error as Error)
    }
  }
}
