import { type IListTotalFarmsRepository } from '@/data/protocols/IListTotalFarmsRepository'
import { AppDataSource } from '../helpers/PostgreSQLHelper'
import { Producer } from '../producerRepository/entity/Producer'
import { type IListTotalFarmsByStateRepository } from '@/data/protocols/IListTotalFarmsByStateRepository'
import { type IFarmsByState } from '@/domain/models/IFarmsByState'
import { type IListTotalArableAreaRepository } from '@/data/protocols/IListTotalArableArea'
import { type IListTotalAreaRepository } from '@/data/protocols/IListTotalArea'
import { type IListTotalByUsedAreaRepository } from '@/data/protocols/IListTotalByUsedArea'
import { type ITotalByArea } from '@/domain/models/ITotalByArea'

export class ReportsRepository
  implements
    IListTotalFarmsRepository,
    IListTotalFarmsByStateRepository,
    IListTotalArableAreaRepository,
    IListTotalAreaRepository,
    IListTotalByUsedAreaRepository
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

  async listTotalByUsedArea(): Promise<ITotalByArea[]> {
    const producerRepository = AppDataSource.getRepository(Producer)
    const totalByUsedArea = await producerRepository.query(
      'SELECT SUM(arable_area) as arable_area, SUM(vegetation_area) as vegetation_area, SUM(total_area) as total_area FROM producer'
    )

    return [
      {
        name: 'Área Agricultável',
        value: totalByUsedArea[0].arable_area,
      },
      {
        name: 'Área de Vegetação',
        value: totalByUsedArea[0].vegetation_area,
      },
    ]
  }
}
