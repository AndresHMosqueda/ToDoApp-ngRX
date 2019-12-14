import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from 'src/app/model/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { ToggleTodoAction, EditTodoAction, RemoveTodoAction } from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: []
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @ViewChild('txtInputFisico') txtInputFisico: ElementRef;

  chField: FormControl;
  txtField: FormControl;

  editando: boolean;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {

    this.chField = new FormControl(this.todo.completado);
    this.txtField = new FormControl(this.todo.texto, Validators.required);
    this.chField.valueChanges.subscribe( () => {
      const accion = new ToggleTodoAction(this.todo.id)
      this.store.dispatch(accion)

    })
    console.log(this.todo);
  }

  editar() {
    this.editando = true;

    setTimeout(() => {
      this.txtInputFisico.nativeElement.select();
    }, 1)
  }

  terminarEdicion() {
    this.editando = false;

    if(this.txtField.invalid) return;

    if(this.txtField.value === this.todo.texto) return;

    const accion = new EditTodoAction(this.todo.id, this.txtField.value)
    this.store.dispatch(accion);
  }

  deleteTodo() {
    const accion = new RemoveTodoAction(this.todo.id);
    this.store.dispatch(accion)
  }

}
