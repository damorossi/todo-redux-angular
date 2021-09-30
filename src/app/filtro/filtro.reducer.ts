import { createReducer, on } from "@ngrx/store";
import { setFilter, filtrosValidos } from './filtro.actions';


export const initialState: filtrosValidos = filtrosValidos.TODOS;

const _filtroReducer =  createReducer(
    initialState,
    on(setFilter, ( state, { filter }) => {
        
        let returnValue;
        if( filtrosValidos.COMPLETADOS === filter ||
             filtrosValidos.PENDIENTES === filter ||
             filtrosValidos.TODOS === filter ) {
            returnValue = filter;
        } else {
            returnValue = filtrosValidos.TODOS;
        }
        return returnValue;
    })
);

export function filtroReducer(state, action) {
    return _filtroReducer(state, action);
}
