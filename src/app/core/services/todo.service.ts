import { TodoEntitie } from "../../domain/entities/todo.entitie";
import { ITodo } from "../../domain/interfaces/todo.interface";

export class TodoService implements ITodo<TodoEntitie> {

    create(payload: TodoEntitie): boolean {
        return true;
    }

    read(): TodoEntitie[] {
        return [];
    }

    update(index: number, newValue: TodoEntitie): boolean {
        return true;
    }

    delete(index: number): boolean {
        return true;
    }
}