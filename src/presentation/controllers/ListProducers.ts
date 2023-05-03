import { type IListProducer } from '@/domain/usecases/IListProducer'
import { type IController } from '../protocols/IController'
import { type IHttpResponse } from '../protocols/IHttp'
import { ok, serverError } from '../helpers/HttpHelper'

export class ListProducerController implements IController {
  constructor(private readonly listProducer: IListProducer) {
    this.listProducer = listProducer
  }

  async handle(): Promise<IHttpResponse> {
    try {
      const producers = await this.listProducer.list()
      return ok(producers)
    } catch (error) {
      return serverError(error as Error)
    }
  }
}
