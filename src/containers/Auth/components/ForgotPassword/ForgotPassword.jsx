import React from 'react';
import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import {
  Button,
  CssBaseline,
  TextField,
  Typography,
  Container,
} from '@material-ui/core';


import { ROUTES_PATH } from '../../../../router/constants/index';
import useStyles from './styles';
import { actions } from '../../store/actions';


export default function ForgotPassword(data) {
  const classes = useStyles();
  const dispatch = useDispatch();
  // console.log("auth", data);

  const handleSubmit = async (data) => {

    dispatch(
      actions.FORGOT.REQUEST(
        {
          ...data,
          email: data.email,
          password: data.id,
        }
      )
    )
  };

  return (
    <Container component="main" maxWidth="xs" onSubmit={handleSubmit}>
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Forgot Password
        </Typography>

        <Formik onSubmit={handleSubmit} >
          {() => {
            return (
              <div>
                <Form className={classes.form}>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                  >
                    <Field />
                  </ TextField>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                  >
                    Receive
                  </Button>
                </Form>
              </div>
            );
          }}
        </Formik>
      </div>
    </Container>
  );
};