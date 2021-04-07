import React, { useState } from "react";
import { useDispatch } from "react-redux";

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
    return (
        <div className='Todo'>
            { isInput ?
                // <Formik
                //     {...FORM}
                //     initialValues={
                //         { text }
                //     }
                //     onSubmit={handleSubmit}
                // >
                //     {() => {
                //         return <Form>
                //             <Field type="text" name="text" />
                //         </Form>
                //     }}
                // </Formik>
                <InputField toggleField={toggleField} {...props} />
                :
                <Todo toggleField={toggleField} {...props} />
            }

            <div className='DeleteTodo' onClick={deleteTodo}> X </div>
        </div >
    );
};

export default TodosContainer