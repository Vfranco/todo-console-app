import { TaskEntity } from "../../domain/entities/task.entitie";
import { IActions } from "../../domain/interfaces/actions";
import { IComponentManager } from "../../domain/interfaces/components.manager";
import { IWebView } from "../../domain/interfaces/webview.interface";
import { ITodoService } from "../../domain/interfaces/todo-service.interface";

export class TodoWebView implements IWebView {

    private components: IComponentManager;
    private actions: IActions;
    private taskManager: ITodoService;
    private index = 0

    constructor(components: IComponentManager, actions: IActions, taskManager: ITodoService) {
        this.components = components;
        this.actions = actions;
        this.taskManager = taskManager;
    }

    async webApp(): Promise<void> {
        await this.components.setView('root', 'todo.webview');
        this.addTask()
    }

    addTask(): void {
        this.actions.click('#btn-add', (event: any) => {
            const taskInputText = this.actions.getValue('taskName');
            if (taskInputText.value === "") return;
            const task: TaskEntity = { taskName: taskInputText.value };
            this.taskManager.create(task);
            this.readTask(task.taskName, this.index += 1);
            taskInputText.value = "";
            this.deleteTask(this.index);
        });
    }

    readTask(text: string, index: number): void {
        this.actions.setValueOnList("list", text, index);
    }

    deleteTask(index: number): void {
        this.actions.click(`#btn-delete-${index}`, () => {
            this.taskManager.delete(index - 1);
            this.actions.removeListValues("list");
            this.taskManager.read().forEach((item, indexList) => {
                this.readTask(item.taskName, indexList + 1)
                this.deleteTask(indexList + 1);
            });
        });
    }
}