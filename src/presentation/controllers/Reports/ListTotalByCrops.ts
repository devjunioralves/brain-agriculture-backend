import { type IController } from '../../protocols/IController'
import { type IHttpResponse } from '../../protocols/IHttp'
import { ok, serverError } from '../../helpers/HttpHelper'
import { type IListTotalByCrops } from '@/domain/usecases/IListTotalByCrops'

export class ListTotalByCropsController implements IController {
  constructor(private readonly listTotalByCrops: IListTotalByCrops) {
    this.listTotalByCrops = listTotalByCrops
  }

  async handle(): Promise<IHttpResponse> {
    try {
      const totalByCrops = await this.listTotalByCrops.listTotalByCrops()
      return ok(totalByCrops)
    } catch (error) {
      return serverError(error as Error)
    }
  }
}
