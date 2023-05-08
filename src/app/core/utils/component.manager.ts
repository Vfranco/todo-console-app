import { IComponentManager } from "../../domain/interfaces/components.manager";

export class ComponentManager implements IComponentManager {

    async setView(selector: string, template: string): Promise<void> {
        let root: HTMLElement = document.getElementById(selector)!;
        let response = await fetch(`./src/app/ui/todoweb/${template}.html`);
        let htmlResponse = await response.text();
        root.innerHTML = htmlResponse;
    }
}