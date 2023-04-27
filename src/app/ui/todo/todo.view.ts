import { Actions } from "../../core/constants/actions";
import { Localizables } from "../../core/constants/localizables.app";
import { ITodoRepository } from "../../core/data/todo.repository";
import { TodoEntitie } from "../../domain/entities/todo.entitie";
import { IView } from "../../domain/interfaces/view.interface";
const scanf = require('scanf');

export class TodoView {
    private viewManager: IView;
    private taskManager: ITodoRepository;

    constructor(view: IView, taskManager: ITodoRepository) {
        this.viewManager = view;
        this.taskManager = taskManager;
    }

    app(): void {
        console.clear();
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
                // TODO: hacer logica de actualización
                break;
            case Actions.DELETE:
                // TODO: hacer logica de eliminación
                break;
            default:
                break;
        }
    }

    createAction(): void {
        this.viewManager.showMessage(Localizables.inputTask);
        const taskName: TodoEntitie = scanf('%s');
        this.taskManager.create(taskName);
    }

    readAction(): void {
        this.viewManager.showData(this.taskManager.read());
        this.viewManager.showMessage(Localizables.enter);
        scanf('%s');
    }
}