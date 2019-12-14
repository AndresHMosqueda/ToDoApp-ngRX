import * as fromTodo from './todo.actions';
import { Todo } from '../model/todo.model';


const todo1 = new Todo('Vencer a Tanos')
const todo2 = new Todo('Salvar el mundo')

todo2.completado = true;

const initialState: Todo[] = [todo1, todo2];

export function todoReducer(state = initialState, action: fromTodo.Actions): Todo[] {
    switch (action.type) {
        case fromTodo.ADD_TODO:
            const todo = new Todo(action.texto) 
            return [...state, todo];
            
        case fromTodo.TOGGLE_ALL_TODO:
            return state.map(todoEdit => {
                return {
                    ...todoEdit,
                    completado: action.completado
                }
            })

        case fromTodo.TOGGLE_TODO:
            return state.map(todoEdit => {
                if(todoEdit.id === action.id) {
                    return {
                        ...todoEdit,
                        completado: !todoEdit.completado
                    }
                } else {
                    return todoEdit;
                }
            })

         case fromTodo.EDIT_TODO:
                    return state.map(todoEdit => {
                        if(todoEdit.id === action.id) {
                            return {
                                ...todoEdit,
                                texto: action.texto
                            }
                        } else {
                            return todoEdit;
                        }
                    })

        case fromTodo.REMOVE_TODO:
            return state.filter(todoEdit => todoEdit.id !== action.id)

        case fromTodo.REMOVE_ALL_TODO:
            return state.filter(todoEdit => !todoEdit.completado)

        default:
            return state;
    }
}