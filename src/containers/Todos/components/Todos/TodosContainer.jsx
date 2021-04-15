import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Container, Grid } from "@material-ui/core";

import useStyles from "./styles";
import Todo from "./Todo";
import { actions } from "../../store/actions";
import InputField from "../InputField/InputField";

const TodosContainer = (props) => {
  const classes = useStyles();
  const [isInput, toggleFieldStatus] = useState(false);
  const dispatch = useDispatch();

  const toggleField = () => {
    toggleFieldStatus((isInput) => !isInput);
  };
  const deleteTodo = () => {
    dispatch(actions.REMOVE_TODO.REQUEST(props.id, () => {}));
  };
  const editTodo = () => {
    dispatch(
      actions.UPDATE_TODO.REQUEST({ ...props }, () => {
        toggleField();
      })
    );
  };

  return (
    <Grid className={classes.todoList}>
      {isInput ? (
        <InputField toggleField={toggleField} {...props} />
      ) : (
        <Todo toggleField={toggleField} {...props} />
      )}
      <Container>
        <Button
          variant="contained"
          className={classes.editTodo}
          onClick={editTodo}
        >
          Edit
        </Button>
        <Button
          variant="contained"
          className={classes.deleteTodo}
          onClick={deleteTodo}
        >
          X
        </Button>
      </Container>
    </Grid>
  );
};

export default TodosContainer;
