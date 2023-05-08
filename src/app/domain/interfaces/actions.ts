export interface IActions {
    click(selector: string, callback: any): void
    getValue(inputSelector: string): any
    setValueOnList(selector: string, textNode: string, index: number): void
    removeListValues(selector: string): void
}