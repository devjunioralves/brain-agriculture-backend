import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class Producer {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  producer_name: string

  @Column()
  cpf_cnpj: string

  @Column()
  farm_name: string

  @Column()
  state: string

  @Column()
  city: string

  @Column()
  total_area: number

  @Column()
  arable_area: number

  @Column()
  vegetation_area: number

  @Column()
  crops: string
}
