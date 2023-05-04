import { type IListTotalFarmsRepository } from '@/data/protocols/IListTotalFarmsRepository'
import { AppDataSource } from '../helpers/PostgreSQLHelper'
import { Producer } from '../producerRepository/entity/Producer'
import { type IListTotalFarmsByStateRepository } from '@/data/protocols/IListTotalFarmsByStateRepository'
import { type IFarmsByState } from '@/domain/models/IFarmsByState'
import { type IListTotalArableAreaRepository } from '@/data/protocols/IListTotalArableArea'
import { type IListTotalAreaRepository } from '@/data/protocols/IListTotalArea'
import { type IListTotalByUsedAreaRepository } from '@/data/protocols/IListTotalByUsedArea'
import { type ITotalByArea } from '@/domain/models/ITotalByArea'
import { type ITotalByCrops } from '@/domain/models/ITotalByCrops'
import { type IListTotalByCropsRepository } from '@/data/protocols/IListTotalByCropsRepository'

export class ReportsRepository
  implements
    IListTotalFarmsRepository,
    IListTotalFarmsByStateRepository,
    IListTotalArableAreaRepository,
    IListTotalAreaRepository,
    IListTotalByUsedAreaRepository,
    IListTotalByCropsRepository
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

  async listTotalByCrops(): Promise<ITotalByCrops[]> {
    const producerRepository = AppDataSource.getRepository(Producer)

    const totalByCrops = await producerRepository.query(
      "SELECT SUM(CASE WHEN string_to_array(crops, ',') @> ARRAY['Soja'] THEN 1 ELSE 0 END) AS soja, SUM(CASE WHEN string_to_array(crops, ',') @> ARRAY['Algodao'] THEN 1 ELSE 0 END) AS algodao, SUM(CASE WHEN string_to_array(crops, ',') @> ARRAY['Milho'] THEN 1 ELSE 0 END) AS milho, SUM(CASE WHEN string_to_array(crops, ',') @> ARRAY['Cafe'] THEN 1 ELSE 0 END) AS cafe, SUM(CASE WHEN string_to_array(crops, ',') @> ARRAY['Cana'] THEN 1 ELSE 0 END) AS cana FROM producer"
    )

    return [
      {
        name: 'Soja',
        value: totalByCrops[0].soja,
      },
      {
        name: 'Algodao',
        value: totalByCrops[0].algodao,
      },
      {
        name: 'Milho',
        value: totalByCrops[0].milho,
      },
      {
        name: 'Café',
        value: totalByCrops[0].cafe,
      },
      {
        name: 'Cana',
        value: totalByCrops[0].cana,
      },
    ]
  }
}
