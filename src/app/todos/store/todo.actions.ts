import { createAction, props } from '@ngrx/store';

export const createTodo = createAction(
    '[TODO] Crear Todo',
    props<{task: string}>()
    );


    export const toggleTodo = createAction(
        '[TODO] Toggle Todo',
        props<{id: number}>()
    );

    export const editarTodo = createAction(
        '[TODO] Editar Todo',
        props<{id: number, newText: string}>()
    );
    
    export const borrarTodo = createAction(
        '[TODO] Borrar Todo',
        props<{id: number}>()
    );