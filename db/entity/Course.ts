import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm'
import { User } from './User'
import exp from 'constants'

export const entityName = 'courses'
export const usersCoursesJoinTableName = "usersCourses"

@Entity(entityName)
export class Course {
  @PrimaryGeneratedColumn()
  id: number

  @Column("varchar", { length: 30 })
  name: string

  @Column()
  created_at: Date

  @Column()
  updated_at: Date

  @ManyToMany(()=> User, (user) => user.courses)
  @JoinTable({name: usersCoursesJoinTableName})
  users: User[]

}
