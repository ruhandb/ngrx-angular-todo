import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from "@ngrx/store";
import { switchMap, from, map, catchError, of, withLatestFrom, tap } from "rxjs";
import { TodoService } from "src/app/core/todo/service/todo.service";
import { AppState } from "../app.state";
import { addTodo, completeTodo, loadTodos, loadTodosFailure, loadTodosSuccess, removeTodo } from "./todo.actions";
import { selectAllTodos } from "./todo.selectors";

@Injectable()
export class TodoEffects {
    constructor(
        private actions$: Actions,
        private store: Store<AppState>,
        private todoService: TodoService
    ){}

    loadTodos$ = createEffect(() => 
        this.actions$.pipe(
            ofType(loadTodos),
            switchMap(() => from(this.todoService.getTodos())),
            map((todos) => loadTodosSuccess({ todos: todos })),
            tap(obj => console.log("loadTodos", obj)),
            catchError((error) => of(loadTodosFailure({ error })))
        )
    );

    saveTodos$ = createEffect(
        () =>this.actions$.pipe(
            ofType(addTodo, removeTodo, completeTodo),
            withLatestFrom(this.store.select(selectAllTodos)),
            tap(save => console.log("saveTodo", save)),
            switchMap(([action, todos])=> from(this.todoService.saveTodos(todos)))
        ),
        { dispatch: false }
    );
}