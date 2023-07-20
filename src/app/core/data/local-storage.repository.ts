import { TaskEntity } from "../../domain/entities/task.entitie";
import { ILocalStorageRepository } from "../../domain/interfaces/local-storage.repository.interface";

export class LocalStorageRepository implements ILocalStorageRepository {
  private data: Array<TaskEntity> = []

  constructor() {
    const data = localStorage.getItem('tasks')
    if (data) {
      this.data = JSON.parse(data)
    }
  }

  create(payload: TaskEntity): boolean {
    this.data.push(payload)
    localStorage.setItem('tasks', JSON.stringify(this.data))
    return true
  }

  read(): Array<TaskEntity> {
    return this.data
  }

  update(index: number, newValue: string): boolean {
    this.data[index].taskName = newValue
    localStorage.setItem('tasks', JSON.stringify(this.data))
    return true
  }

  delete(index: number): boolean {
    this.data.splice(index, 1)
    localStorage.setItem('tasks', JSON.stringify(this.data))
    return true
  }
}