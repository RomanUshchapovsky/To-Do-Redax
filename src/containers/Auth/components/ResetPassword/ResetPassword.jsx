import React from 'react';
import {
  Button,
  CssBaseline,
  TextField,
  Typography,
  Container,
} from '@material-ui/core';


// import { ROUTES_PATH } from "../../../../../router/constants/index";
import useStyles from "./styles";


export default function ResetPassword() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
        ResetPassword
        </Typography>
        <form className={classes.form} noValidate>
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
          />
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
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Reset
          </Button>
        </form>
      </div>
    </Container>
  );
}