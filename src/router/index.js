import React from 'react';
import { ROUTES_PATH, ROUTES_LABEL } from './constants';

import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import ListAltIcon from '@material-ui/icons/ListAlt';

import Main from '../containers/components/Main/Main';
import Activation from '../containers/components/Auth/components/Activation/Activation';
import SignIn from '../containers/components/Auth/components/SignIn/SignIn';
import SignUp from '../containers/components/Auth/components/SignUp/SignUp';
import ResetPassword from '../containers/components/Auth/components/ResetPassord/ResetPassword';
import ForgotPassword from '../containers/components/Auth/components//ForgotPassword/ForgotPassword';


export const privateRouter = () =>
  [
    {
      path: ROUTES_PATH.TODO,
      exact: true,
      component: Main,
      children: [],
      label: ROUTES_LABEL.TODO,
      icon: <ListAltIcon />,
    },
    {
      path: ROUTES_PATH.CALENDAR,
      exact: true,
      component: () => <div>CALENDAR</div>,
      children: [],
      label: ROUTES_LABEL.CALENDAR, 
      icon: <CalendarTodayIcon />,
    },
  ]

export const publicRouter = [
  {
    path: ROUTES_PATH.SIGN_IN,
    exact: true,
    component: SignIn,
    children: [],
  },
  {
    path: ROUTES_PATH.SIGN_UP,
    exact: true,
    component: SignUp,
    children: [],
  },
  {
    path: `${ROUTES_PATH.RESET}/:token`,
    exact: true,
    component: ResetPassword,
    children: [],
  },
  {
    path: ROUTES_PATH.FORGOT,
    exact: true,
    component: ForgotPassword,
    children: [],
  },
  {
    path: `${ROUTES_PATH.ACTIVATION}/:token`,
    exact: true,
    component: Activation,
    children: [],
  },
];