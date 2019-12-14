import * as fromFilter from './filter.actions';


const initialState: fromFilter.filtrosValidos = 'todos'

export function filterReducer(state =initialState, action: fromFilter.acciones): fromFilter.filtrosValidos {
    switch(action.type as any){
        case fromFilter.SET_FILTER:
            return action.filtro;
            default:
                return state;

    }

}