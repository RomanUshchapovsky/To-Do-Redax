import React from 'react';
import {
    Button,
    CssBaseline,
    Typography,
    Container,
} from '@material-ui/core';

// import { ROUTES_PATH } from '../../../../router/constants/index';
import useStyles from './styles';


export default function Activation() {
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    Your Account has been activated
                </Typography>
                <form className={classes.form} noValidate>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Login
                    </Button>
                </form>
            </div>
        </Container>
    );
};