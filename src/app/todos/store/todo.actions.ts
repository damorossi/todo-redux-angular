import { createAction, props } from '@ngrx/store';

export const createTodo = createAction('[TODO] Crear Todo',
    props<{task: string}>()
    );