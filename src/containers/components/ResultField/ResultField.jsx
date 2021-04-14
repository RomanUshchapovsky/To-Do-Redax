import React, { useContext } from "react";
import { Container } from "@material-ui/core";
import {useSelector} from 'react-redux'
import useStyles from "./styles";
import { Context } from "../../../Context/ContextContainer";

const ResultField = (data) => {
    const { users } = useContext(Context);
    const classes = useStyles();
    const todosList = useSelector(state=>state.todosReducer.todos)
    // const data = todos.reduce((acc, val)=>acc[val.userId]?{...acc}:{...acc, [val.userId]:val.name}, {})
    const filtered = users.filter(user=>todosList.some(todo=>todo.user.id===user.id))
    return (
        <Container className={classes.resultBlock} >
            <div className={classes.allToDo}>
                All To Do: {todosList.length}
            </div>
            <div className={classes.unassignedUsers}>
                Unassigned Users: {users.length-filtered.length}
            </div>
            <div className={classes.assignedUsers}>
                Assigned Users: {filtered.length}
            </div>
        </Container>
    )
}

export default ResultField