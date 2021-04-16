import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Grid,
  Typography,
  Container,
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import { ROUTES_PATH } from '../../../../router/constants/index';
import useStyles from './styles';
import { actions } from '../../store/actions';


export default function SignIn(data) {
  const classes = useStyles();
  const dispatch = useDispatch();


  const submitForm = () => {
    // if (email === "" || password === "") {
    //   setError("Fields are required");
    //   return;
    // }
    // props.login({ email, password });
  };

  const handleSubmit = async (data) => {

    dispatch(
      actions.SIGN_IN.REQUEST(
        {
          ...data,
          email: data.auht.email,
          password: data.auth.password,
        }
      )
    );
  };

  return (
    <Container component="main" maxWidth="xs" onSubmit={handleSubmit}>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
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
                  <TextField
                    variant="outlined"
                    margin="normal"
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
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                  />

                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    component={ Link } to={ROUTES_PATH.ACTIVATION}
                    onClick={submitForm}
                    // onClick={() => dispatch(push(ROUTES_PATH.ACTIVATION))}
                  >
                    Sign In
                  </Button>
                  <Grid container>
                    <Grid item xs>
                      <Link href="#" variant="body2" to={ROUTES_PATH.FORGOT}>
                        Forgot password?
                      </Link>
                    </Grid>
                    <Grid item>
                      <Link href="#" variant="body2" to={ROUTES_PATH.SIGN_UP}>
                        {"Don't have an account? Sign Up"}
                      </Link>
                    </Grid>
                  </Grid>
                </Form>
              </div>
            );
          }}
        </Formik>
      </div>
    </Container>
  );
};