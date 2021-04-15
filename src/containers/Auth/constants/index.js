import { createActionConstants } from "../../../shared/utils/actionCreator";

export const type = [
  "SIGN_IN", 
  "SIGN_UP", 
  "RESET", 
  "FORGOT", 
  "ACTIVATION"
];
export const actionTypes = createActionConstants(type); 
