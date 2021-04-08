import React from "react";
import classnames from 'classnames';


import classes from "./App.module.scss";
import InputField from "./containers/components/InputField/InputField";
import TodoList from "./containers/components/TodoList/TodoList";



const App = () => {
  // useEffect(() => {
  //   persistTodos();
  // }, [persistTodos]);

  return (
    <div className={classnames(classes.app)}>
      <div className={classnames(classes.todoListHeader)}>
        <h1> My Todos </h1>
      </div>

      <InputField />
      <TodoList />
      {/* <div>
        <button onClick={deleteAll}>Delete All</button>
      </div> */}
    </div>
  );
};

export default App;