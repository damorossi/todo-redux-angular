import { Action, createReducer, on, State } from "@ngrx/store";
import { Todo } from "../models/todo.model";
import * as todoActions from './todo.actions';


export const initialState: Todo[] =  [
    new Todo('Get a todo list from web'),
    new Todo('Spllit the template in different components'),
    new Todo('Configure Ngrx'),
    new Todo('Implement Acions on Todo list'),
];

const _todoReducer = createReducer(
    initialState,
    on(todoActions.createTodo, (state, { task }) => [...state, new Todo(task)]),
    on(todoActions.toggleTodo, (state, { id }) => {
        return state.map(todo => {
            if(todo.id === id) {
                return {
                    ...todo,
                    completado: !todo.completado
                }
            } else {
                return todo;
            }
        })
    }),
    on(todoActions.toggleAll, (state, { completados }) => {
       return state.map(todo => {
            return {
                ...todo,
                completado: completados
            }
       })
    }),
    on(todoActions.editarTodo, (state, { id, newText }) => {
        return state.map(todo => {
            if(todo.id === id) {
                return {
                    ...todo,
                    texto: newText
                }
            } else {
                return todo;
            }
        })
    }),
    on(todoActions.borrarTodo, (state, { id }) => {
        return  state.filter(todo => todo.id !== id);
    }),
    on(todoActions.clearCompleted, state => {
        return  state.filter(todo => !todo.completado);
    })
);

export function todoReducer(state: Todo[] = initialState, action: Action) {
     return _todoReducer(state, action);   
}