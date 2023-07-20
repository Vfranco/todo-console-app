import { TaskEntity } from "../entities/task.entitie";
import { ICrudBase } from "./crud-base.interface";

export interface ILocalStorageRepository extends ICrudBase<TaskEntity> { }