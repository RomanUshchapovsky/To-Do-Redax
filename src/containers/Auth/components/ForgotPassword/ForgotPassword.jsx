import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Typography,
  Container,
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';


// import { ROUTES_PATH } from "../../../../../router/constants/index";
import useStyles from "./styles";
// import { actions } from '../../../../Todos/store/actions';


export default function ForgotPassword(data) {
  const classes = useStyles();
  const dispatch = useDispatch();
  console.log("auth", data);
  const handleSubmit = async (data) => {

    // dispatch(
    //   actions.SIGN_IN.REQUEST(
    //     {
    //       ...data,
    //       email: data.email,
    //       password: data.id,
    //     }
    //   )
    // );
    // if (props.isAuth) {
    //   return <Redirect to={'/profile'} />
    // }
    console.log("auth", data);
  };

  return (
    <Container component="main" maxWidth="xs" onSubmit={handleSubmit}>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
         Forgot Password
        </Typography>
        <form className={classes.form} noValidate>
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
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
              Receive
          </Button>
        </form>
      </div>
    </Container>
  );
}