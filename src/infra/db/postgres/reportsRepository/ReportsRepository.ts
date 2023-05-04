import { type IListTotalFarmsRepository } from '@/data/protocols/IListTotalFarmsRepository'
import { AppDataSource } from '../helpers/PostgreSQLHelper'
import { Producer } from '../producerRepository/entity/Producer'

export class ReportsRepository implements IListTotalFarmsRepository {
  list: () => Promise<number>
  async listTotalFarms(): Promise<number> {
    const producerRepository = AppDataSource.getRepository(Producer)
    const totalFarms = await producerRepository.count()
    return totalFarms
  }
}
