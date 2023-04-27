export interface ITodo<T> {
    create(payload: T): boolean
    read(): Array<T>
    update(index: number, newValue: T): boolean
    delete(index: number): boolean
}