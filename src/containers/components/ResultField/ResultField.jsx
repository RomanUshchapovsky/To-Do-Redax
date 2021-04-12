import React from "react";
import { Container } from "@material-ui/core";

import useStyles from "./styles";

const ResultField = () => {
    const classes = useStyles();
    return (
        <Container absolute className={classes.resultBlock} >
            <div className={classes.allToDo}>
                All To Do: { }
            </div>
            <div className={classes.unassignedUsers}>
                Unassigned Users: { }
            </div>
            <div className={classes.assignedUsers}>
            Assigned Users: { }
            </div>

        </Container>


    )
}

export default ResultField