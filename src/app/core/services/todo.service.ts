import { TaskEntity } from "../../domain/entities/task.entitie";
import { ICrudBase } from "../../domain/interfaces/crud-base.interface";
import { ITodoService } from "../../domain/interfaces/todo-service.interface";

export class TodoService implements ITodoService {

    private storage: ICrudBase<TaskEntity>

    constructor(repository: ICrudBase<TaskEntity>) {
        this.storage = repository
    }

    create(payload: TaskEntity): boolean {
        return this.storage.create(payload)
    }

    read(): Array<TaskEntity> {
        return this.storage.read()
    }

    update(index: number, newValue: string): boolean {
        return this.storage.update(index, newValue)
    }

    delete(index: number): boolean {
        return this.storage.delete(index)
    }
}