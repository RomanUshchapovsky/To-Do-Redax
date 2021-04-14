// import React from "react";
import { ROUTES_PATH } from "./constants";

export const privateRouter = [
  {
    path: "/",
    exact: true,
    component: null,
    children: [],
  },
];

export const publicRouter = [
  {
    path: SIGN_IN,
    exact: true,
    component: null,
    children: [],
  },
  {
    path: SIGN_UP,
    exact: true,
    component: null,
    children: [],
  },
  {
    path: RESET,
    exact: true,
    component: null,
    children: [],
  },
  {
    path: FORGOT,
    exact: true,
    component: null,
    children: [],
  },
  {
    path: ACTIVATION,
    exact: true,
    component: null,
    children: [],
  },
];
