import { type IListTotalFarmsRepository } from '@/data/protocols/IListTotalFarmsRepository'
import { AppDataSource } from '../helpers/PostgreSQLHelper'
import { Producer } from '../producerRepository/entity/Producer'
import { type IListTotalFarmsByStateRepository } from '@/data/protocols/IListTotalFarmsByStateRepository'
import { type IFarmsByState } from '@/domain/models/IFarmsByState'
import { type IListTotalArableAreaRepository } from '@/data/protocols/IListTotalArableArea'
import { type IListTotalAreaRepository } from '@/data/protocols/IListTotalArea'

export class ReportsRepository
  implements
    IListTotalFarmsRepository,
    IListTotalFarmsByStateRepository,
    IListTotalArableAreaRepository,
    IListTotalAreaRepository
{
  async listTotalFarmsByState(): Promise<IFarmsByState[]> {
    const producerRepository = AppDataSource.getRepository(Producer)
    const totalFarmsByState = await producerRepository.query(
      'SELECT state, COUNT(state) FROM producer GROUP BY state'
    )
    return totalFarmsByState
  }

  async listTotalFarms(): Promise<number> {
    const producerRepository = AppDataSource.getRepository(Producer)
    const totalFarms = await producerRepository.count()
    return totalFarms
  }

  async listTotalArableArea(): Promise<number> {
    const producerRepository = AppDataSource.getRepository(Producer)
    const totalArableArea = await producerRepository.query(
      'SELECT SUM(arable_area) FROM producer'
    )
    return totalArableArea
  }

  async listTotalArea(): Promise<number> {
    const producerRepository = AppDataSource.getRepository(Producer)
    const totalArea = await producerRepository.query(
      'SELECT SUM(total_area) FROM producer'
    )
    return totalArea
  }
}
