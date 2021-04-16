import { actionTypes } from "../constants";
import initialState from "./store";

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_TODOS.REQUEST:
    case actionTypes.FETCH_TODO.REQUEST:
    case actionTypes.CREATE_TODO.REQUEST:
    case actionTypes.UPDATE_TODO.REQUEST:
      return { ...state, loading: true, error: null };
    case actionTypes.REMOVE_TODO.REQUEST:
      return { ...state, loading: true, error: null };
// -------------
    case actionTypes.CREATE_TODO.SUCCESS:
      return {
        ...state,
        loading: false,
        todos: [...state.todos].concat(action.payload),
      };
    case actionTypes.UPDATE_TODO.SUCCESS: 
      const todoIdx = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
      );
      const newTodos = [...state.todos];
      newTodos[todoIdx] = action.payload;
      return { ...state, loading: false, todos: newTodos, selectedTodo: null };
    case actionTypes.REMOVE_TODO.SUCCESS:
      return {
        ...state,
        loading: false,
        todos: [...state.todos].filter((t) => t.id !== action.payload),
      };
// ---------------------------------------------
    case actionTypes.FETCH_TODOS.FAILURE:
    case actionTypes.FETCH_TODO.FAILURE:
    case actionTypes.CREATE_TODO.FAILURE:
    case actionTypes.UPDATE_TODO.FAILURE:
    case actionTypes.REMOVE_TODO.FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
