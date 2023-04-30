import { IView } from "../../domain/interfaces/view.interface";
import { Localizables } from "../constants/localizables.app";
import { MenuApp } from "../constants/menu";

export class View implements IView {

    appTitle(): void {
        console.log(Localizables.appTitle);
        console.log();
    }

    buildMenu(): void {
        Object.values(MenuApp).forEach((option, index) => console.log(`${index + 1} - ${option}`));
    }

    putWhiteSpace(): void {
        console.log();
    }

    showData(data: any): void {
        console.table(data);
    }

    showMessage(msg: string): void {
        console.log(msg);
    }

    clearScreen(): void {
        console.clear();
    }
}