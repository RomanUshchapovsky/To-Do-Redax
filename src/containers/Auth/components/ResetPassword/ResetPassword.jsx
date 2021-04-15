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



export default function ResetPassword() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const handleSubmit = async (data) => {

    // console.log("auth", data.auht.email);
    dispatch(
      actions.RESET.REQUEST(
        {
          ...data,
          email: data.auht.email,
          password: data.auth.password,
        }
      )
    );
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          ResetPassword
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
                    label="Old Password"
                    name="email"
                    autoComplete="email"
                    autoFocus
                  >
                    <Field />
                  </ TextField>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="New Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
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
                    Reset
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