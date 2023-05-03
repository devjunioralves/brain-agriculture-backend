import { type IController } from '../../protocols/IController'
import { type IHttpRequest, type IHttpResponse } from '../../protocols/IHttp'
import { badRequest, ok, serverError } from '../../helpers/HttpHelper'
import { type IUpdateProducer } from '../../../domain/usecases/IUpdateProducer'
import { MissingParamError } from '../../errors/MissingParamError'

export class UpdateProducerController implements IController {
  constructor(private readonly updateProducer: IUpdateProducer) {
    this.updateProducer = updateProducer
  }

  async handle(httpRequest: IHttpRequest): Promise<IHttpResponse> {
    try {
      const requiredFields = [
        'id',
        'cpf_cnpj',
        'producer_name',
        'farm_name',
        'city',
        'state',
        'total_area',
        'arable_area',
        'vegetation_area',
      ]

      for (const field of requiredFields) {
        if (!httpRequest.body[field]) {
          return badRequest(new MissingParamError(field))
        }
      }

      const producer = await this.updateProducer.update({
        id: httpRequest.body.id,
        cpf_cnpj: httpRequest.body.cpf_cnpj,
        producer_name: httpRequest.body.producer_name,
        farm_name: httpRequest.body.farm_name,
        city: httpRequest.body.city,
        state: httpRequest.body.state,
        total_area: httpRequest.body.total_area,
        arable_area: httpRequest.body.arable_area,
        vegetation_area: httpRequest.body.vegetation_area,
      })
      return ok(producer)
    } catch (error) {
      return serverError(error as Error)
    }
  }
}
