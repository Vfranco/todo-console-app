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

    waitForKey(keyCode: number): Promise<void> {
        return new Promise(resolve => {
            process.stdin.on(Localizables.data, (data) => {
                console.log(data[0]);
                if (data[0] === keyCode) {
                    resolve();
                    process.stdin.pause();
                }
            });
        });
    }
}