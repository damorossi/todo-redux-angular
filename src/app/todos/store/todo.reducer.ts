import { Action, createReducer, on, State } from "@ngrx/store";
import { Todo } from "../models/todo.model";
import * as todoActions from './todo.actions';


export const initialState: Todo[] =  [
    new Todo('...'),
    new Todo('...'),
    new Todo('...'),
    new Todo('...'),
];

const _todoReducer = createReducer(
    initialState,
    on(todoActions.createTodo, (state, { task }) => [...state, new Todo(task)])
);

export function todoReducer(state: Todo[] = initialState, action: Action) {
     return _todoReducer(state, action);   
}