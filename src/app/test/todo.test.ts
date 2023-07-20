import { InMemoryRepository } from "../core/data/in-memory.repository";
import { TodoService } from "../core/services/todo.service";
import { TaskEntity } from "../domain/entities/task.entitie";

describe('App Todo Test', () => {

    let todoService = new TodoService(new InMemoryRepository);

    it('create should return a boolean value', () => {
        let newValue: TaskEntity = {
            taskName: "valor"
        }
        expect(todoService.create(newValue)).toBe(true);
    });

    it('read should return a list of tasks', () => {
        let newValue: TaskEntity = {
            taskName: "valor"
        }
        todoService.create(newValue);
        expect(todoService.read().length).toBeGreaterThan(0);
    });

    it('update should update a value and return true', () => {
        let createValue: TaskEntity = {
            taskName: "valor"
        }
        let valueToUpdate = "nuevo valor";

        todoService.create(createValue);
        expect(todoService.update(1, valueToUpdate)).toBe(true);
    });

    it('delete should remove a item from list and return true', () => {
        let createValue: TaskEntity = {
            taskName: "valor"
        }
        todoService.create(createValue);
        expect(todoService.delete(0)).toBe(true);
    });
})