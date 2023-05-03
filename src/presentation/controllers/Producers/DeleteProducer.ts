import { type IDeleteProducer } from '../../../domain/usecases/IDeleteProducer'
import { MissingParamError } from '../../errors/MissingParamError'
import { badRequest, ok, serverError } from '../../helpers/HttpHelper'
import { type IController } from '../../protocols/IController'
import { type IHttpRequest, type IHttpResponse } from '../../protocols/IHttp'

export class DeleteProducerController implements IController {
  constructor(private readonly deleteProducer: IDeleteProducer) {
    this.deleteProducer = deleteProducer
  }

  async handle(httpRequest: IHttpRequest): Promise<IHttpResponse> {
    try {
      const requiredFields = ['id']

      for (const field of requiredFields) {
        if (!httpRequest.params[field]) {
          return badRequest(new MissingParamError(field))
        }
      }

      const producer = await this.deleteProducer.delete(httpRequest.params.id)
      return ok(producer)
    } catch (error) {
      return serverError(error as Error)
    }
  }
}
