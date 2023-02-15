import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodoItem } from 'src/app/core/todo/todo-item.model';
import { addTodo, loadTodos, removeTodo } from 'src/app/state/todos/todo.actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  //public allTodos$ = this.store.select()
  public todo: string = '';

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(loadTodos());
  }

  addTodo() {
    this.store.dispatch(addTodo({ description: this.todo }));
  }

  removeTodo(todo: TodoItem) {
    this.store.dispatch(removeTodo({ id: todo.id }));
  }

}
