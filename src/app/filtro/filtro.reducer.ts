import { Action, createReducer, on } from '@ngrx/store';
import { filtroValidos, SetFiltro } from './filtro.actions';




export const initialState: filtroValidos = 'todos';

const _filtroReducer = createReducer(initialState,
    on(SetFiltro, (state, {filtro}) => filtro),

);

export function filtroReducer(state, action) {
    return _filtroReducer(state, action);
}

