import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import classnames from 'classnames';
import { AppBar, Container, Toolbar, Typography, Button, Grid } from "@material-ui/core";

import useStyles from "./styles";
import InputField from "./containers/components/InputField/InputField";
import TodoList from "./containers/components/TodoList/TodoList";
import Modal from "./containers/components/Modal/Modal";
import ResultField from "./containers/components/ResultField/ResultField";
import AllUsers from "./containers/components/AllUsers/AllUsers";

const UserContext = React.createContext();

const App = () => {
  const classes = useStyles();
  // const dispatch = useDispatch()
  const [modalActive, setModalActive] = useState(false);
//   const { getUsers, setUsers } = useContext(users)
//   const data = {
//     user: user
// }

  return (
    <div>
      <AppBar position="fixed">
        <Container fixed>
          <Toolbar>
            <Typography variant="h1">My Todos </Typography>
          </Toolbar>
        </Container>
      </AppBar>
      {/* call modal window */}
      <Button
        variant="contained"
        className={classes.addToDoButton}
        onClick={() => setModalActive(true)}>
        Add new to do
      </Button>
      <Grid>
        <Modal active={modalActive} setActive={setModalActive}>
          <InputField active={modalActive} setActive={setModalActive} />
        </Modal>
        <Container absolute
          className={classes.TodoListBlock}
        >
          <TodoList />
        </Container>
      </Grid>

     <ResultField />
     <AllUsers />
    </div>
  );
};
export default App;