import { type IController } from '../../protocols/IController'
import { type IHttpRequest, type IHttpResponse } from '../../protocols/IHttp'
import { badRequest, ok, serverError } from '../../helpers/HttpHelper'
import { type IListOneProducer } from '../../../domain/usecases/IListOneProducer'
import { MissingParamError } from '../../errors/MissingParamError'

export class ListOneProducerController implements IController {
  constructor(private readonly listOneProducer: IListOneProducer) {
    this.listOneProducer = listOneProducer
  }

  async handle(httpRequest: IHttpRequest): Promise<IHttpResponse> {
    try {
      const requiredFields = ['id']

      for (const field of requiredFields) {
        if (!httpRequest.params[field]) {
          return badRequest(new MissingParamError(field))
        }
      }

      const producer = await this.listOneProducer.listOne(httpRequest.params.id)
      return ok(producer)
    } catch (error) {
      return serverError(error as Error)
    }
  }
}
