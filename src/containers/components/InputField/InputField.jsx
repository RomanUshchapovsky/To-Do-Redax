import React from "react";
import { useDispatch } from "react-redux";
import { actions } from "../../store/actions";
import { Formik, Form, Field } from 'formik';
import { FORM } from '../../constants/formHelper';
import { FORM_HELP_TEXT } from '../../constants/messages';

export default props => {
  const dispatch = useDispatch()


  const handleSubmit = async (data, { resetForm }) => {
    if (props && props.id) {
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
    return props && props.id ? { ...FORM, initialValues: { ...props } } : { ...FORM }
  }

  return (
    <Formik
      onSubmit={handleSubmit}
      {...setFormikInitialState()}

    >
      {({ handleChange, values, setFieldValue }) => {
        return <Form className="Form">
          <Field type="text"
            name="text"
            placeholder={FORM_HELP_TEXT.placeholder.text}
          />

          <Field type="date"
            name="date"
            placeholder={FORM_HELP_TEXT.placeholder.todo_completed_date}
          />

          <Field type="file"
            name="file"
            defaultValue={values.image_url}
            placeholder={FORM_HELP_TEXT.placeholder.image_url}
            onChange={e => {
              const file = e.target.files[0];

              if (file) {
                const reader = new FileReader();
                reader.onloadend = e => {
                  setFieldValue("image_url", reader.result, false);
                  handleChange(e)
                };
                reader.readAsDataURL(file);
              } else {
                // TODO
              }

            }}
          />

          <button type="submit">Save</button>
        </Form>
      }}
    </Formik>
  );
};