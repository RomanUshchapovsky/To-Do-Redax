import React from "react";
import useStyles from "./styles";
import { CssBaseline, Paper } from "@material-ui/core";
import SignIn from "../components/SignIn/SignIn";

const Auth = ({ children }) => {
  const classes = useStyles();

  return (
    <main className={classes.main}>
      <CssBaseline />
      <Paper className={classes.paper}> <SignIn/> </Paper>
    </main>
  );
};

export default Auth;