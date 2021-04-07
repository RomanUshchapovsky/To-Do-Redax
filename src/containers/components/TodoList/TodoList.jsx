import React from "react";
import { useSelector } from "react-redux";
import TodoContainer from "../Todos/TodosContainer";
import store from '../../store';

const TodoList = () => {
  const todos = useSelector(store.selectors.getAllTodos());

  // console.log('todos', todos)

  return (
    <div className='TodoList'>
      {Array.isArray(todos) && todos.length ? todos.map((todo, idx) => (
        <TodoContainer key={`${todo.id}-${idx}`} {...todo} />
      )) : null}
    </div>
  );
};

export default TodoList