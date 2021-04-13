import { createActionConstants } from '../../shared/utils/actionCreator';

export const type = ["FETCH_TODO", "FETCH_TODOS", 'CREATE_TODO', 'UPDATE_TODO', 'REMOVE_TODO'];
export const actionTypes = createActionConstants(type);  