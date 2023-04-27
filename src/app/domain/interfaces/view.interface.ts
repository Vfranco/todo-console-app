export interface IView {
    appTitle(): void
    buildMenu(): void
    putWhiteSpace(): void
    showData(data: any): void
    showMessage(msg: string): void
    waitForKey(key: number): Promise<void>
}