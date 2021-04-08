import React from 'react'
import { Formik, Form, Field } from 'formik';

export default ({ toggleField, text, todo_completed_date, image_url }) => {
    return (
        <Formik onClick={toggleField}> 
            <Field>  {text} </Field>
            <Field>  {todo_completed_date}</Field>
            <Field> {image_url}</Field>
      
       
        </Formik >
       

    )
}

