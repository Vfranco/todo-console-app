import { TodoEntitie } from "../../domain/entities/todo.entitie";
import { ITodo } from "../../domain/interfaces/todo.interface";

export interface ITodoRepository extends ITodo<TodoEntitie> { }