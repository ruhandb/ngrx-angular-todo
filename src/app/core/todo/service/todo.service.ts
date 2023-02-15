import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { TodoItem } from '../todo-item.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  path: string = "http://localhost:8081/v1/todo";

  todosCache: TodoItem[] = [
    {description:"Teste", id:"1", done: false},
    {description:"Teste 2", id:"2", done: false}
  ];

  constructor(private http: HttpClient) { }

  saveTodos(todos: TodoItem[]){
    this.todosCache = todos;
    return of(todos);
  }

  getTodos(): Observable<TodoItem[]> {
    return this.http.get<{ content: TodoItem[] }>(this.path).pipe(map(response => response.content))
    //return of(this.todosCache);
  }
}
