import defaultActionTypes from "../constants";

export const createActions = (types) => {
  const actionConstants = {};

  types.forEach((t) => {
    actionConstants[t] = {};

    defaultActionTypes.forEach((c) => {
      actionConstants[t][c] = (payload = {}, callback, options) => ({
        type: `${t}_${c}`,
        payload,
        callback,
        options,
      });
    });
  });

  return actionConstants;
};
// ----------------
export const createActionConstants = (types) => {
  const actionConstants = {};

  types.forEach((t) => {
    actionConstants[t] = {};

    defaultActionTypes.forEach((c) => {
      actionConstants[t][c] = `${t}_${c}`;
    });
  });

  return actionConstants;
};
