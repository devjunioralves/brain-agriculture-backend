import { type IAddProducer } from '../../../domain/usecases/IAddProducer'
import { MissingParamError } from '../../errors/MissingParamError'
import { badRequest, ok, serverError } from '../../helpers/HttpHelper'
import { type IController } from '../../protocols/IController'
import { type IHttpRequest, type IHttpResponse } from '../../protocols/IHttp'

export class AddProducerController implements IController {
  constructor(private readonly addProducer: IAddProducer) {
    this.addProducer = addProducer
  }

  async handle(httpRequest: IHttpRequest): Promise<IHttpResponse> {
    try {
      const requiredFields = [
        'cpf_cnpj',
        'producer_name',
        'farm_name',
        'city',
        'state',
        'total_area',
        'arable_area',
        'vegetation_area',
        'crops',
      ]

      for (const field of requiredFields) {
        if (!httpRequest.body[field]) {
          return badRequest(new MissingParamError(field))
        }
      }

      const producers = await this.addProducer.add({
        cpf_cnpj: httpRequest.body.cpf_cnpj,
        producer_name: httpRequest.body.producer_name,
        farm_name: httpRequest.body.farm_name,
        city: httpRequest.body.city,
        state: httpRequest.body.state,
        total_area: httpRequest.body.total_area,
        arable_area: httpRequest.body.arable_area,
        vegetation_area: httpRequest.body.vegetation_area,
        crops: httpRequest.body.crops,
      })
      return ok(producers)
    } catch (error) {
      return serverError(error as Error)
    }
  }
}
