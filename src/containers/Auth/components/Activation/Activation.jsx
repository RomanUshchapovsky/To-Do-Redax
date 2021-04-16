import React from 'react';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router'
import {
    Button,
    CssBaseline,
    Typography,
    Container,
} from '@material-ui/core';

import { ROUTES_PATH } from '../../../../router/constants/index';
import useStyles from './styles';


export default function Activation() {
    const classes = useStyles();
    const dispatch = useDispatch();

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
                        onClick={() => dispatch(push(ROUTES_PATH.TODO))}
                    >
                        Login
                    </Button>
                </form>
            </div>
        </Container>
    );
};