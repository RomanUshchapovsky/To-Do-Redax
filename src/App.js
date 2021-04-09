import React, { useState } from "react";
import classnames from 'classnames';


import classes from "./App.module.scss";
import InputField from "./containers/components/InputField/InputField";
import TodoList from "./containers/components/TodoList/TodoList";
import Modal from "./containers/components/Modal/Modal";


const App = () => {
  const [modalActive, setModalActive] = useState(false);

  return (
    <div className={classnames(classes.app)}>
      <div className={classnames(classes.todoListHeader)}>
        <h1> My Todos </h1>
      </div>
      {/* call modal window */}
      <button className={classnames(classes.addToDoButton)} onClick={() => setModalActive(true)}>Add new to do</button>
      <Modal active={modalActive} setActive={setModalActive}>
        <InputField active={modalActive} setActive={setModalActive} />

      </Modal>
      <TodoList />
      {/* <div>
        <button onClick={deleteAll}>Delete All</button>
      </div> */}
    </div>
  );
};

export default App;