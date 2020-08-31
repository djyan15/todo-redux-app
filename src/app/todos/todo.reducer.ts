import { createReducer, on } from '@ngrx/store';
import { addTodo, toggle, editar, borrar, toggleAll, borrarCompletados } from './todo.actions';
import { Todo } from './models/todo.model';


export const initialState: Todo[] = [
  new Todo('Salvar el mundo'),
  new Todo('Derrotar a Thanos'),
  new Todo('Recolectar las gemas del infinito'),
];

const _todoReducer = createReducer(initialState,
  on(addTodo, (state, { texto }) => [...state, new Todo(texto)]),
  on(toggle, (state, { id }) => {


    return state.map(todo => {

      if (todo.id === id) {
        return {
          ...todo,
          completado: !todo.completado,
        }
      }

      return todo;

    });
  }),
  on(editar, (state, { id, texto }) => {


    return state.map(todo => {

      if (todo.id === id) {
        return {
          ...todo,
          texto
        }
      }

      return todo;

    });
  }),
  on(borrar, (state, { id }) => {


    return state.filter(x => x.id !== id);
  }),
  on(toggleAll, (state, { completado }) => {
    return state.map(todo => {

      return {
        ...todo,
        completado,
      };

    });

  }),
  on(borrarCompletados, (state) => {


    return state.filter(x => !x.completado);
  }),
);

export function todoReducer(state, action) {
  return _todoReducer(state, action);
}
