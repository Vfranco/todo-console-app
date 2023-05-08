export interface IComponentManager { 
    setView(template: string, path: string): Promise<void>
}