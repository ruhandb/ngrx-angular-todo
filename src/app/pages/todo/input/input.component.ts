import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { addTodo } from 'src/app/state/todos/todo.actions';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  
  constructor(private store: Store<AppState>) {}
  
  saveTodo(description: string) {
    this.store.dispatch(addTodo({ description: description }));
  }
}
