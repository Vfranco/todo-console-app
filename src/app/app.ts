import { InMemoryRepository } from "./core/data/in-memory.repository";
import { LocalStorageRepository } from "./core/data/local-storage.repository";
import { TodoService } from "./core/services/todo.service";
import { Actions } from "./core/utils/actions";
import { ComponentManager } from "./core/utils/component.manager";
import { IWebView } from "./domain/interfaces/webview.interface";
import { TodoWebView } from "./ui/todoweb/todo.web.view";

export class Application {
    private webView: IWebView;

    constructor(webView: IWebView) {
        this.webView = webView
    }

    startWeb(): void {
        this.webView.webApp();
    }
}

// Gestor de dependencias
export const app = new Application(
    new TodoWebView(
        new ComponentManager,
        new Actions,
        new TodoService(
            // new InMemoryRepository
            new LocalStorageRepository
        )
    )
);