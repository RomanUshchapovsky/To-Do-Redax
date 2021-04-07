import React from "react";
import "./App.css";
import InputField from "./containers/components/InputField/InputField";
import TodoList from "./containers/components/TodoList/TodoList";



const App = () => {
  // useEffect(() => {
  //   persistTodos();
  // }, [persistTodos]);

  return (
    <div className="App">
      <h1> Todos </h1>
      <InputField/>
      <TodoList />
      {/* <div>
        <button onClick={deleteAll}>Delete All</button>
      </div> */}
    </div>
  );
};

export default App;