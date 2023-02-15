import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './pages/todo/todo.component';
import { ListComponent } from './pages/todo/list/list.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { todoReducer } from './state/todos/todo.reducer';
import { TodoEffects } from './state/todos/todo.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { InputComponent } from './pages/todo/input/input.component';
import { ListItemComponent } from './pages/todo/list-item/list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    ListComponent,
    InputComponent,
    ListItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({ todos: todoReducer }),
    EffectsModule.forRoot([TodoEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }