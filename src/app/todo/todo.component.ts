import { Component, OnInit } from '@angular/core';
import { ToggleAllTodoAction } from './todo.actions';
import { AppState } from '../app.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: []
})
export class TodoComponent implements OnInit {

  completado = false;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  toggleAll(){
    this.completado = !this.completado;
   const accion = new ToggleAllTodoAction(this.completado);
   this.store.dispatch(accion); 
  }

}
