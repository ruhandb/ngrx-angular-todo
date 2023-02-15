import { createAction, props } from "@ngrx/store";
import { TodoItem } from "src/app/core/todo/todo-item.model";

export const addTodo = createAction(
    '[Todo Page] Add Todo',
    props<{ description: string }>()
);

export const removeTodo = createAction(
    '[Todo Page] Remove Todo',
    props<{ id: string }>()
);

export const completeTodo = createAction(
    '[Todo Page] Complete Todo',
    props<{ id: string }>()
);

export const loadTodos = createAction("[Todo Page] Load Todos");

export const loadTodosSuccess = createAction(
    "[Todo API] Todo Load Success",
    props<{ todos: TodoItem[] }>()
)

export const loadTodosFailure = createAction(
    "[Todo API] Todo Load Failure",
    props<{ error: string }>()
)