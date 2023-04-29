import { TodoEntitie } from "../../domain/entities/todo.entitie";
import { ITodoRepository } from "../data/todo.repository";

export class TodoService implements ITodoRepository {

    private dataBase: Array<TodoEntitie> = []

    create(payload: TodoEntitie): boolean {
        this.dataBase.push(payload)
        return true;
    }

    read(): TodoEntitie[] {
        return this.dataBase;
    }

    update(index: number, newValue: string): boolean {
        this.dataBase[index].taskName = newValue;
        return true;
    }

    delete(index: number): boolean {
        return true;
    }
}