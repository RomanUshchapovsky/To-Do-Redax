import React from "react";
import { useSelector } from "react-redux";
import { Container } from "@material-ui/core";

import useStyles from "./styles";
import TodosContainer from "../Todos/TodosContainer";
import store from "../../store";

const TodoList = () => {
  const classes = useStyles();
  const todos = useSelector(store.selectors.getAllTodos());

  return (
    <Container className={classes.todoList}>
      {Array.isArray(todos) && todos.length
        ? todos.map((todo, idx) => (
            <TodosContainer key={`${todo.id}-${idx}`} {...todo} />
          ))
        : null}
    </Container>
  );
};

export default TodoList;
