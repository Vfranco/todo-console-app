import { TaskEntity } from "../entities/task.entitie"

export interface ITodoService {
  create(payload: TaskEntity): boolean
  read(): Array<TaskEntity>
  update(index: number, newValue: string): boolean
  delete(index: number): boolean
}