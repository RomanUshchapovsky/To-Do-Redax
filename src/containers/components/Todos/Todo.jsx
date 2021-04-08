import React from 'react'
import classnames from 'classnames';

import classes from "./Todos.module.scss"

export default ({ toggleField, text, todo_completed_date, image_url }) => {
    return (
        <div className={classnames(classes.todosListBlock)} onClick={toggleField}>

            <div className={classnames(classes.todosListItem1)}><img src={image_url} alt="Todo image" /></div>
            <div className={classnames(classes.todosListItem2)}>{text}</div>
            <div className={classnames(classes.todosListItem3)}>{todo_completed_date}</div>
        </div>
    )
}

