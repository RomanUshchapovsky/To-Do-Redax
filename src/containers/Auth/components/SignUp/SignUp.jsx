import React from 'react';
import { useDispatch } from 'react-redux';
// import { push } from 'connected-react-router'
import { Formik, Form, Field } from 'formik';
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Link,
  Grid,
  Typography,
  Container
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import useStyles from './styles';
import { ROUTES_PATH } from '../../../../router/constants/index';
import { actions } from '../../store/actions';



export default function SignUp() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleSubmit = async (data) => {
    // console.log("auth", data.auht.email);
    dispatch(
      actions.SIGN_UP.REQUEST(
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
      <Button color="primary">Go Back</Button>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>

        <Formik onSubmit={handleSubmit} >
          {() => {
            return (
              <div>
                <Form className={classes.form}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        autoComplete="fname"
                        name="Name"
                        variant="outlined"
                        required
                        fullWidth
                        id="firstName"
                        label="First Name"
                        autoFocus
                      >
                        <Field />
                      </ TextField>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                      >
                        <Field />
                      </ TextField>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                      >
                        <Field />
                      </ TextField>
                    </Grid>
                  </Grid>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    // onClick={() => dispatch(push(ROUTES_PATH.ACTIVATION))}
                  >
                    Sign Up
                  </Button>
                  <Grid container justify="flex-end">
                    <Grid item>
                      <Link href="/" variant="body2" to={ROUTES_PATH.SIGN_IN}>
                        Already have an account? Sign in
                      </Link>
                    </Grid>
                  </Grid>
                </Form>
              </div>
            );
          }}
        </Formik>
      </div >
    </Container >
  );
};