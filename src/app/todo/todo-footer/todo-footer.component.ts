import { Component, OnInit } from '@angular/core';

import * as fromFilter from '../../filter/filter.actions';
import * as fromTodo from '../todo.actions';

import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Todo } from 'src/app/model/todo.model';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {

  pendings: number;

  filtrosValidos: fromFilter.filtrosValidos[] = ['completados','pendientes','todos']
  actualFilter: fromFilter.filtrosValidos;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.subscribe(state => {
      this.countPendings(state.todos)
      this.actualFilter = state.filtro
    })
  }

  cambiarFiltro( newFilter: fromFilter.filtrosValidos){
      const accion = new fromFilter.SetFilterAction(newFilter);
      this.store.dispatch(accion)
  }

  countPendings(todos: Todo[]) {
    this.pendings = todos.filter(todo=> !todo.completado).length;
  }

  borrarTodo(){
    const accion = new fromTodo.RemoveAllTodoAction()
    this.store.dispatch(accion);
  }

}
