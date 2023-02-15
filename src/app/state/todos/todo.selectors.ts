import { createSelector } from "@ngrx/store";
import { TodoItem } from "src/app/core/todo/todo-item.model";
import { AppState } from "../app.state";
import { TodoState } from "./todo.reducer";

export const selectTodos = (state: AppState) => state.todos;
export const selectAllTodos = createSelector(
    selectTodos,
    (todoState: TodoState) => todoState.todos
);
export const selectAllTodosIds = createSelector(
    selectTodos,
    (todoState: TodoState) => todoState.todos.map(todo => todo.id)
);

export const getTodoById = (id: string) => createSelector(
    selectAllTodos, 
    (todos: TodoItem[]) => todos ? todos.find((item: TodoItem) => item.id === id) : {}
);