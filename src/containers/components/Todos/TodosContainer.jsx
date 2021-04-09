import React, { useState } from "react";
import { useDispatch } from "react-redux";
import classnames from 'classnames';

import classes from "./Todos.module.scss"
import Todo from './Todo';
import { actions } from "../../store/actions";
import InputField from "../InputField/InputField";


const TodosContainer = props => {
    const [isInput, toggleFieldStatus] = useState(false)
    const dispatch = useDispatch()
    
    const toggleField = () => {
        toggleFieldStatus(isInput => !isInput)
    }

    const deleteTodo = () => {
        dispatch(actions.REMOVE_TODO.REQUEST(props.id, () => {
        }))
    };
    const editTodo = () => {
        dispatch(actions.UPDATE_TODO.REQUEST({ ...props }, () => {
            toggleField();
        }))
    }

    return (
        <div className={classnames(classes.todoList)}>
            { isInput ?
                <InputField toggleField={toggleField} {...props} />
                :
                <Todo toggleField={toggleField} {...props} />
            }
            <div className={classnames(classes.editTodo)} onClick={editTodo}> Edit </div>
            <div className={classnames(classes.deleteTodo)} onClick={deleteTodo}> X </div>
        </div>
    );
};

export default TodosContainer