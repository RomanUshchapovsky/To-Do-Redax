import { createSelector } from "reselect";

export const getTodosReducer = (state) => state.todosReducer;

export const getAllTodos = () =>
  createSelector(
    getTodosReducer,
    (state) => state.todos,
  );

  // export const getSelectedTodo = () =>
  // createSelector(
  //   getTodosReducer,
  //   (state) => state.selectedTodo,
  // );