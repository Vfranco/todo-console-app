import { TaskEntity } from "../../domain/entities/task.entitie";
import { IInMemoryRepository } from "../../domain/interfaces/in-memory.repository.interface";

export class InMemoryRepository implements IInMemoryRepository {
  private data: Array<TaskEntity> = []

  create(payload: TaskEntity): boolean {
    this.data.push(payload)
    return true
  }

  read(): Array<TaskEntity> {
    return this.data
  }

  update(index: number, newValue: string): boolean {
    this.data[index].taskName = newValue
    return true
  }

  delete(index: number): boolean {
    this.data.splice(index, 1)
    return true
  }
}

