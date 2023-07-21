import scanf from 'scanf';
import { Actions } from "../../core/constants/actions";
import { Localizables } from "../../core/constants/localizables.app";
import { TaskEntity } from "../../domain/entities/task.entitie";
import { IView } from "../../domain/interfaces/view.interface";
import { ITodoService } from '../../domain/interfaces/todo-service.interface';

export class TodoView {
    private viewManager: IView;
    private taskManager: ITodoService;

    constructor(view: IView, taskManager: ITodoService) {
        this.viewManager = view;
        this.taskManager = taskManager;
    }

    app(): void {
        this.viewManager.clearScreen();
        this.viewManager.appTitle();
        this.viewManager.buildMenu();
        this.viewManager.putWhiteSpace();

        this.viewManager.showMessage(Localizables.selectOption);

        const readOption = scanf('%s');
        this.getOptionByUser(readOption)
    }

    getOptionByUser(option: string): void {
        switch (option) {
            case Actions.CREATE:
                this.createAction();
                this.app();
                break;
            case Actions.READ:
                this.readAction();
                this.app();
                break;
            case Actions.UPDATE:
                this.updateAction();
                this.app();
                break;
            case Actions.DELETE:
                this.deleteAction();
                this.app();
                break;
            case Actions.OUT:
                this.goOutApplication();
                break;
            default:
                break;
        }
    }

    createAction(): void {
        this.viewManager.showMessage(Localizables.inputTask);
        const taskInputName: string = scanf('%S');
        const taskData: TaskEntity = {
            taskName: taskInputName
        }
        this.taskManager.create(taskData);
    }

    readAction(): void {
        this.viewManager.showData(this.taskManager.read());
        this.viewManager.showMessage(Localizables.enter);
        scanf('%s');
    }

    updateAction(): void {
        this.viewManager.showData(this.taskManager.read());
        this.viewManager.showMessage(Localizables.inputToUpdateTask);
        const index = scanf('%s');
        this.viewManager.showMessage(Localizables.inputNewValueTask);
        const newValue = scanf('%S');
        this.taskManager.update(Number(index), newValue);
    }

    deleteAction(): void {
        this.viewManager.showData(this.taskManager.read());
        this.viewManager.showMessage(Localizables.deleteMessage);
        const index = scanf('%s');
        this.taskManager.delete(Number(index));
    }

    goOutApplication(): void {
        this.viewManager.showMessage(Localizables.outApplication);
    }
}