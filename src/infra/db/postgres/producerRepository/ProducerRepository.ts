import { type IAddProducerRepository } from '../../../../data/protocols/IAddProducerRepository'
import { type IDeleteProducerRepository } from '../../../../data/protocols/IDeleteProducerRepository'
import { type IListOneProducerRepository } from '../../../../data/protocols/IListOneProducerRepository'
import { type IListProducerRepository } from '../../../../data/protocols/IListProducerRepository'
import { type IUpdateProducerRepository } from '../../../../data/protocols/IUpdateProducerRepository'
import { type IProducer } from '../../../../domain/models/IProducer'
import { type IProducerModel } from '../../../../domain/usecases/IAddProducer'
import { AppDataSource } from '../helpers/PostgreSQLHelper'
import { Producer } from './entity/Producer'

export class ProducerRepository
  implements
    IAddProducerRepository,
    IDeleteProducerRepository,
    IListOneProducerRepository,
    IListProducerRepository,
    IUpdateProducerRepository
{
  async add(producer: IProducerModel): Promise<IProducer> {
    const producerRepository = AppDataSource.getRepository(Producer)
    const createdProducer = producerRepository.create({
      ...producer,
    })
    const saved = await producerRepository.save(createdProducer)
    return {
      id: saved.id,
      producer_name: saved.producer_name,
      cpf_cnpj: saved.cpf_cnpj,
      farm_name: saved.farm_name,
      state: saved.state,
      city: saved.city,
      total_area: saved.total_area,
      arable_area: saved.arable_area,
      vegetation_area: saved.vegetation_area,
      crops: saved.crops,
    }
  }

  async delete(id: number): Promise<IProducer> {
    const producerRepository = AppDataSource.getRepository(Producer)
    const producer = await producerRepository.findOne({
      where: {
        id,
      },
    })
    if (producer) {
      await producerRepository.delete(id)
      return producer
    }
    return null
  }

  async listOne(id: number): Promise<IProducer> {
    const producerRepository = AppDataSource.getRepository(Producer)
    const producer = await producerRepository.findOne({
      where: {
        id,
      },
    })
    if (producer) {
      return producer
    }
    return null
  }

  async list(): Promise<IProducer[]> {
    const producerRepository = AppDataSource.getRepository(Producer)
    const producers = await producerRepository.find()
    return producers
  }

  async update(data: IProducer): Promise<IProducer> {
    const producerRepository = AppDataSource.getRepository(Producer)
    const producer = await producerRepository.findOne({
      where: {
        id: data.id,
      },
    })
    if (producer) {
      producer.producer_name = data.producer_name
      producer.cpf_cnpj = data.cpf_cnpj
      producer.farm_name = data.farm_name
      producer.state = data.state
      producer.city = data.city
      producer.total_area = data.total_area
      producer.arable_area = data.arable_area
      producer.vegetation_area = data.vegetation_area
      producer.crops = data.crops
      await producerRepository.save(producer)
      return producer
    }
    return null
  }
}
