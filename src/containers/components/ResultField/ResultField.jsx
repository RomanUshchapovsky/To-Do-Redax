import React, { useContext } from "react";
import { Container } from "@material-ui/core";

import useStyles from "./styles";
import { Context } from "../../../Context/ContextContainer";

const ResultField = (data) => {
    const { users } = useContext(Context);
    const classes = useStyles();
    // const {todos} = useSelector(state=>state.todosReducer)
    // const data = todos.reduce((acc, val)=>acc[val.userId]?{...acc}:{...acc, [val.userId]:val.name}, {})
    const assigned = Object.keys(users)
    return (
        <Container className={classes.resultBlock} >
            <div className={classes.allToDo}>
                All To Do: {users.length}
            </div>
            <div className={classes.unassignedUsers}>
                {/* Unassigned Users: {users.length-assigned.length} // filter => !user */}
                Unassigned Users: {users.length-assigned.length}
            </div>
            <div className={classes.assignedUsers}>
                {/* Assigned Users: {assigned.length} // -> user */}
                Assigned Users: {assigned.length}
            </div>
        </Container>
    )
}

export default ResultField