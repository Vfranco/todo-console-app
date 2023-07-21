import { TaskEntity } from "../entities/task.entitie";
import { ICrudBase } from "./crud-base.interface";

export interface IInMemoryRepository extends ICrudBase<TaskEntity> { }