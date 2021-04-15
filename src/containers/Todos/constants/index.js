import { createActionConstants } from "../../../shared/utils/actionCreator";

export const type = [
  "FETCH_TODO",
  "FETCH_TODOS",
  "CREATE_TODO",
  "UPDATE_TODO",
  "REMOVE_TODO",
  "SIGN_IN", 
  "SIGN_UP", 
  "RESET", 
  "FORGOT", 
  "ACTIVATION"
];
export const actionTypes = createActionConstants(type); 
