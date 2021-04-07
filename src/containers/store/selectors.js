import { createSelector } from "reselect";

export const getAllTodos = () =>
  createSelector(state => state.todosReducer, (state) => state.todos);