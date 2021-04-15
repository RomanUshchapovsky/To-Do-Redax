import React from 'react';
import useStyles from './styles';
import { CssBaseline, Paper } from '@material-ui/core';

import SignIn from '../components/SignIn/SignIn';
import SignUp from '../components/Activation/Activation';
import ResetPassword from '../components/ResetPassword/ResetPassword';
import ForgotPassword from '../components/ForgotPassword/ForgotPassword';
import Activation from '../components/SignIn/SignIn';


const Auth = () => {
  const classes = useStyles();

  return (
    <main className={classes.main}>
      <CssBaseline />
      <Paper className={classes.paper}> <SignIn/> </Paper>
      <Paper className={classes.paper}> <SignUp/> </Paper>
      <Paper className={classes.paper}> <ResetPassword/> </Paper>
      <Paper className={classes.paper}> <ForgotPassword/> </Paper>
      <Paper className={classes.paper}> <Activation/> </Paper>
    </main>
  );
};

export default Auth;