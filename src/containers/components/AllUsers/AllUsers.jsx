import React from "react";
import { Container } from "@material-ui/core";

import useStyles from "./styles";

const AllUsers = () => {
    const classes = useStyles();
    return (
        <Container absolute className={classes.allUsers} >
         AllUsers:
        </Container>


    )
}

export default AllUsers