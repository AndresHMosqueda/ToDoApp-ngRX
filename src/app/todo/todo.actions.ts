import { Action } from '@ngrx/store';

export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const TOGGLE_ALL_TODO = 'TOGGLE_ALL_TODO'
export const EDIT_TODO = 'EDIT_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const REMOVE_ALL_TODO = 'REMOVE_ALL_TODO'

//Clase para crear acciones
export class AddTodoAction implements Action {
    public readonly type = ADD_TODO;
    constructor(public texto: string) { }
}

export class ToggleTodoAction implements Action {
    public readonly type = TOGGLE_TODO;
    constructor(public id: number ) { }
}

export class ToggleAllTodoAction implements Action {
    public readonly type = TOGGLE_ALL_TODO;
    constructor(public completado: boolean ) { }
}

export class EditTodoAction implements Action {
    public readonly type = EDIT_TODO;
    constructor(public id: number, public texto: string) { }
}

export class RemoveTodoAction implements Action {
    public readonly type = REMOVE_TODO;
    constructor(public id: number) { }
}

export class RemoveAllTodoAction implements Action {
    public readonly type = REMOVE_ALL_TODO;
    
}

//definir un tipo de acciones validas para el reducer
export type Actions = AddTodoAction 
                     | ToggleTodoAction
                     | EditTodoAction
                     | RemoveTodoAction
                     | ToggleAllTodoAction
                     | RemoveAllTodoAction;