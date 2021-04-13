import React, { useContext } from "react";
import { Container } from "@material-ui/core";

import useStyles from "./styles";
import { Context } from "../../../Context/ContextContainer";

const AllUsers = () => {
    const classes = useStyles();
    const { users } = useContext(Context);
    return (
        <Container className={classes.allUsers}>
            AllUsers: {users.map(user => <div key={user.id}>{user.name}, </div>)}
        </Container>
    )
}

export default AllUsers