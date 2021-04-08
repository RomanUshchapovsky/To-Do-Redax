import React from "react";
import { useSelector } from "react-redux";
import classnames from 'classnames';

import classes from "./TodoList.module.scss"
import TodosContainer from "../Todos/TodosContainer";
import store from '../../store';

const TodoList = () => {
  const todos = useSelector(store.selectors.getAllTodos());

  return (
    <div className={classnames(classes.todoList)}>
          {Array.isArray(todos) && todos.length ? todos.map((todo, idx) => (
            <TodosContainer key={`${todo.id}-${idx}`} {...todo} />
          )) : null}
    </div>
  );
};

export default TodoList