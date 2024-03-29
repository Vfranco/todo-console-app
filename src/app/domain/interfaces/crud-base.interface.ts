export interface ICrudBase<T> {
    create(payload: T): boolean
    read(): Array<T>
    update(index: number, newValue: string): boolean
    delete(index: number): boolean
}