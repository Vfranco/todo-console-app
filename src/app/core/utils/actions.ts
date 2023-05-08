import { IActions } from "../../domain/interfaces/actions";

export class Actions implements IActions {

    click(selector: string, callback: any): void {
        const element = document.querySelector(selector);
        element?.addEventListener('click', callback);
    }

    getValue(inputSelector: string): any {
        return (<HTMLInputElement>document.getElementById(inputSelector));
    }

    setValueOnList(selector: string, textNode: string, index: number): void {
        let list = document.getElementById(selector);
        let element = document.createElement("li");
        element.setAttribute("id", index.toString());
        let buttonDelete = document.createElement("button");
        buttonDelete.setAttribute("id", `btn-delete-${index}`);
        buttonDelete.setAttribute("class", "app_list_button")
        buttonDelete.innerHTML = "Eliminar"
        element?.appendChild(document.createTextNode(textNode));
        element.appendChild(buttonDelete);
        list?.appendChild(element);
    }

    removeListValues(selector: string): void {
        let list = document.getElementById(selector);
        if(list !== null)
            list.innerHTML = "";
    }

}