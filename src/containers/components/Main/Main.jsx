import React, { useState } from "react";
import {
  Container,
  Button,
  Grid,
} from "@material-ui/core";

import useStyles from "./styles";
import InputField from "../InputField/InputField";
import TodoList from "../TodoList/TodoList";
import Modal from "../Modal/Modal";
import ResultField from "../ResultField/ResultField";
import AllUsers from "../AllUsers/AllUsers";
import Header from "../Header/Header";

const Main = () => {
  const classes = useStyles();
  const [modalActive, setModalActive] = useState(false);

  return (
    <Container>
      <Header />
      {/* call modal window */}
      <Button
        variant="contained"
        className={classes.addToDoButton}
        onClick={() => setModalActive(true)}
      >
        Add new to do
      </Button>
      <Grid>
        <Modal active={modalActive} setActive={setModalActive}>
          <InputField />
        </Modal>
        <Container className={classes.TodoListBlock}>
          <TodoList />
        </Container>
      </Grid>
      <ResultField />
      <AllUsers />
    </Container>
  );
};

export default Main;
