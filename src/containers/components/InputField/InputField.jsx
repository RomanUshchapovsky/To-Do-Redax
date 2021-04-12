import React from "react";
import { useDispatch } from "react-redux";
import classnames from 'classnames';
import { Formik, Form, Field } from 'formik';
import moment from 'moment';
import { Button, Box } from "@material-ui/core";

import useStyles from "./styles";
import styles from "./InputField.module.scss";
import { actions } from "../../store/actions";
import { FORM } from '../../constants/formHelper';
import { FORM_HELP_TEXT } from '../../constants/messages';


export default (props, setActive) => {
  const classes = useStyles(); 

  const dispatch = useDispatch()
  const handleSubmit = async (data, { resetForm }) => {
    if (props && props.id) {
      const { toggleField } = props;
      dispatch(actions.UPDATE_TODO.REQUEST({ ...data }, () => {
        resetForm();
        toggleField();
      }))
    } else {
      dispatch(actions.CREATE_TODO.REQUEST({ ...data, 
        todo_completed_date: moment(new Date(data.todo_completed_date)).format("MM/DD/YYYY"), 
        id: new Date().getTime() }, () => resetForm()))
    }
  };
  const setFormikInitialState = () => {
    console.log(props && props.id ? { ...FORM, initialValues: { ...props } } : { ...FORM })
    return props && props.id ? { ...FORM, initialValues: { ...props } } : { ...FORM }
  }

  return (
    <Formik
      onSubmit={handleSubmit}
      {...setFormikInitialState()}
    >
      {({ handleChange, values, setFieldValue }) => {

        return <div>
          <Form className={classnames(styles.formBlock)}>

            <Field className={classnames(styles.formItem)}
              type="text"
              name="text"
              placeholder={FORM_HELP_TEXT.placeholder.text}
            />

            <Field className={classnames(styles.formItem)}
              type="date"
              name="todo_completed_date"
              placeholder={FORM_HELP_TEXT.placeholder.todo_completed_date}
            />

            {/* <Field className={classnames(styles.formItem)}
            type="file"
            name="file"
            placeholder={FORM_HELP_TEXT.placeholder.image_url}
            onChange={e => {
              handleChange(e)
              
              const file = e.target.files[0];

              if (file) {
                const reader = new FileReader();
                reader.onloadend = () => {
                  setFieldValue("image_url", reader.result, false);
                };
                reader.readAsDataURL(file);
              } else {
                // TODO
              }

            }}
          /> */}
            <div>
              <Box>Dropdown</Box>
              <Button variant="contained" className={classes.formButton} type="submit" >Save</Button >
              <Button variant="contained" className={classes.formButton} type="reset" >Сlear Form</Button >
            </div>
          </Form>
        </div>
      }}
    </Formik>
  );
};