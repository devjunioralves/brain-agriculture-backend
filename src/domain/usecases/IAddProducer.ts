import { type IProducer } from '../models/IProducer'

export interface IProducerModel {
  producer_name: string
  cpf_cnpj: string
  farm_name: string
  state: string
  city: string
  total_area: number
  arable_area: number
  vegetation_area: number
  crops: string
}

export interface IAddProducer {
  add: (data: IProducerModel) => Promise<IProducer>
}
