import React from "react";
import { useDispatch } from "react-redux";
import { actions } from "../../store/actions";
import { Formik, Form, Field } from 'formik';
import { FORM } from '../../constants/formHelper';
import { FORM_HELP_TEXT } from '../../constants/messages';

export default props => {
  const dispatch = useDispatch()

  const handleSubmit = (data, { resetForm }) => {
    if ( props && props.id) {
      const { toggleField } = props;
      dispatch(actions.UPDATE_TODO.REQUEST({ ...data }, () => {
        resetForm();
        toggleField();
      }))
    } else {
      dispatch(actions.CREATE_TODO.REQUEST({ ...data, id: new Date().getTime() }, () => resetForm()))
    }
  };

  const setFormikInitialState = () => {
    return props && props.id ? {...FORM, initialValues: {...props} } : {...FORM}
  }

  return (
    <Formik
      onSubmit={handleSubmit}
      {...setFormikInitialState()}
    >
      {props => {
        return <Form>
          <Field type="text" name="text" placeholder={FORM_HELP_TEXT.placeholder.text} />
        </Form>
      }}
    </Formik>
  );
};