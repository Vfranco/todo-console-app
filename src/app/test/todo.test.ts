import { TodoService } from "../core/services/todo.service";
import { TodoEntitie } from "../domain/entities/todo.entitie";

describe('App Todo Test', () => {

    let todoService = new TodoService;

    it('create should return a boolean value', () => {
        let newValue: TodoEntitie = {
            taskName : "valor"
        }
        expect(todoService.create(newValue)).toBe(true);
    });

    it('read should return a list of tasks', () => {
        let newValue: TodoEntitie = {
            taskName : "valor"
        }
        todoService.create(newValue);
        expect(todoService.read().length).toBeGreaterThan(0);
    });

    it('update should update a value and return true', () => {
        let createValue: TodoEntitie = {
            taskName : "valor"
        }
        let valueToUpdate = "nuevo valor";

        todoService.create(createValue);
        expect(todoService.update(1, valueToUpdate)).toBe(true);
    });

    it('delete should remove a item from list and return true', () => {
        let createValue: TodoEntitie = {
            taskName : "valor"
        }
        todoService.create(createValue);
        expect(todoService.delete(0)).toBe(true);
    });
})