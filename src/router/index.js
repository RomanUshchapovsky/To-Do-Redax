import React from 'react';
import { ROUTES_PATH, ROUTES_LABEL } from './constants';

import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import ListAltIcon from '@material-ui/icons/ListAlt';

import Main from '../containers/Main/Main';
import ForgotPassword from '../containers/Auth/components/ForgotPassword/ForgotPassword';
import Activation from '../containers/Auth/components/Activation/Activation';
import ResetPassword from '../containers/Auth/components/ResetPassword/ResetPassword';
import SignUp from '../containers/Auth/components/SignUp/SignUp';
import SignIn from '../containers/Auth/components/SignIn/SignIn';


export const privateRouter = () =>
  [
    {
      path: ROUTES_PATH.TODO,
      exact: true,
      component: Main,
      label: ROUTES_LABEL.TODO,
      icon: <ListAltIcon />,
    },
    {
      path: ROUTES_PATH.CALENDAR,
      exact: true,
      component: () => <div>CALENDAR</div>,
      label: ROUTES_LABEL.CALENDAR, 
      icon: <CalendarTodayIcon />,
    },
  ]

export const publicRouter = [
  {
    path: ROUTES_PATH.SIGN_IN,
    exact: true,
    component: SignIn,
  },
  {
    path: ROUTES_PATH.SIGN_UP,
    exact: true,
    component: SignUp,
  },
  {
    path: `${ROUTES_PATH.RESET}/:token`,
    exact: true,
    component: ResetPassword,
  },
  {
    path: ROUTES_PATH.FORGOT,
    exact: true,
    component: ForgotPassword,
  },
  {
    path: `${ROUTES_PATH.ACTIVATION}/:token`,
    exact: true,
    component: Activation,
  },
];