import { TodoService } from "./core/services/todo.service";
import { View } from "./core/utils/view.manager";
import { TodoView } from "./ui/todo/todo.view";

export class Application {
    private view: TodoView;

    constructor(view: TodoView) {
        this.view = view;
    }

    start(): void {
        this.view.app()
    }
}

// Gestor de dependencias
export const app = new Application(
    new TodoView(
        new View,
        new TodoService
    )
);