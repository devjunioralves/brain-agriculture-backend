import { type IController } from '../../protocols/IController'
import { type IHttpResponse } from '../../protocols/IHttp'
import { ok, serverError } from '../../helpers/HttpHelper'
import { type IListTotalArableArea } from '@/domain/usecases/IListTotalArableArea'

export class ListTotalArableAreaController implements IController {
  constructor(private readonly listTotalArableArea: IListTotalArableArea) {
    this.listTotalArableArea = listTotalArableArea
  }

  async handle(): Promise<IHttpResponse> {
    try {
      const totalArableArea =
        await this.listTotalArableArea.listTotalArableArea()
      return ok(totalArableArea)
    } catch (error) {
      return serverError(error as Error)
    }
  }
}
