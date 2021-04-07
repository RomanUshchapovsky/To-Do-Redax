import React, { useState } from "react";
import { useDispatch } from "react-redux";


import { actions } from "../../store/actions";
import InputField from "../InputField/InputField";


const TodoContainer = props => {
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
                <div onClick={toggleField}> {props.text} </div>
            }

            <div className='DeleteTodo' onClick={deleteTodo}> X </div>
        </div >
    );
};

export default TodoContainer