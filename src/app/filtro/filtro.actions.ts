import { createAction, props } from '@ngrx/store';

export type filtroValidos = 'todos' | 'completados' | 'pendientes';

export const SetFiltro = createAction(
    '[Filtro Set Filtro]', props<{ filtro: filtroValidos }>()

);
