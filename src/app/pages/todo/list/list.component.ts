import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { selectAllTodosIds } from 'src/app/state/todos/todo.selectors';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  public allTodosIds$ = this.store.select(selectAllTodosIds);

  constructor(private store: Store<AppState>) {}
}
