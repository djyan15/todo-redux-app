import { createAction, props } from '@ngrx/store';

export const addTodo = createAction(
    '[TODO] Crear Todo',
    props<{ texto: string }>()


);
export const toggle = createAction(
    '[TODO] Toggle Todo',
    props<{ id: number }>()


);
export const editar = createAction(
    '[TODO] Editar Todo',
    props<{ id: number, texto: string }>()
);

export const borrar = createAction(
    '[TODO] Borrar Todo',
    props<{ id: number }>()


);

export const toggleAll = createAction(
    '[TODO] Toggle ALL Todo',
    props<{ completado: boolean }>()


);
export const borrarCompletados = createAction(
    '[TODO] Borrar todos los completados'


);
