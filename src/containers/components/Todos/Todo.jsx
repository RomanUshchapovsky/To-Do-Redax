import React from 'react'
import { Container } from "@material-ui/core";


import useStyles from "./styles";

export default ({ toggleField, text, todo_completed_date, image_url }) => {
    const classes = useStyles();

    return (
        <Container className={classes.todosListBlock}>
            <div className={classes.todosListImg}>
                <img src={image_url} alt="Todo" />
            </div>
            <div className={classes.todosListText}>
                <p>{text}</p>
            </div>
            <div className={classes.todosListDate}>
                <p>{todo_completed_date}</p>
            </div>
        </Container>
    )
}