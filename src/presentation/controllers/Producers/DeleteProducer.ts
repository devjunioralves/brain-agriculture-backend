import { type IDeleteProducer } from '@/domain/usecases/IDeleteProducer'
import { MissingParamError } from '@/presentation/errors/MissingParamError'
import { badRequest, ok, serverError } from '@/presentation/helpers/HttpHelper'
import { type IController } from '@/presentation/protocols/IController'
import {
  type IHttpRequest,
  type IHttpResponse,
} from '@/presentation/protocols/IHttp'

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
