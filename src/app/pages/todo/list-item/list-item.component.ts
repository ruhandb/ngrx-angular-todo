import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { TodoItem } from 'src/app/core/todo/todo-item.model';
import { AppState } from 'src/app/state/app.state';
import { completeTodo, removeTodo } from 'src/app/state/todos/todo.actions';
import { getTodoById } from 'src/app/state/todos/todo.selectors';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  @Input() id!: string;

  public todo$: Observable<TodoItem> = new Observable();

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.todo$ = this.store.select(getTodoById(this.id)) as Observable<TodoItem>;
  }

  removeTodoHandler(id: string) {
    this.store.dispatch(removeTodo({ id: id }));
  }

  completeTodoHandler(id: string) {
    this.store.dispatch(completeTodo({ id: id }));
  }

}
