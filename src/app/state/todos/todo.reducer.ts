import { createReducer, on } from "@ngrx/store";
import { TodoItem } from "src/app/core/todo/todo-item.model";
import { addTodo, completeTodo, loadTodos, loadTodosFailure, loadTodosSuccess, removeTodo } from "./todo.actions";

export interface TodoState {
    todos: TodoItem[],
    error: string;
    status: 'pending' | 'loading' | 'error' | 'success';
}

export const initialState: TodoState = {
    todos: [],
    error: '',
    status: 'pending'
}

export const todoReducer = createReducer(
    initialState,
    on(addTodo, (state, { description }) => ({
        ...state,
        todos: [...state.todos, { id: Date.now().toString(), description: description, done: false }]
    })),
    on(removeTodo, (state, { id }) => ({
        ...state,
        todos: state.todos.filter((todo) => todo.id !== id)
    })),
    on(completeTodo, (state, { id }) => {
        const todo = state.todos.find(todo => todo.id === id);
        if (todo) {            
            return { 
                ...state, 
                todos: [
                    ...state.todos.filter((todo) => todo.id !== id),
                    {...todo, done: true}
                ]
            };
        }
        return { ...state };
    }),
    on(loadTodos, (state) => ({ ...state, status: 'loading' })),
    on(loadTodosSuccess, (state, { todos }) => ({
        ...state,
        todos: todos,
        error: '',
        status: 'success',
    })),
    on(loadTodosFailure, (state, { error }) => ({
        ...state, 
        error: error, status:'error'
    }))
)