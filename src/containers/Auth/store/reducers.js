import { actionTypes } from "../constants";
import initialState from "./store";

export default (state = initialState, action) => {
  switch (action.type) {

    case actionTypes.SIGN_IN.REQUEST:
      return { ...state, loading: true, error: null };
    case actionTypes.SIGN_UP.REQUEST:
      return { ...state, loading: true, error: null };
    case actionTypes.RESET.REQUEST:
      return { ...state, loading: true, error: null };
    case actionTypes.FORGOT.REQUEST:
      return { ...state, loading: true, error: null };    
    case actionTypes.ACTIVATION.REQUEST:
      return { ...state, loading: true, error: null };   
// -----------
    case actionTypes.SIGN_IN.SUCCESS:
      return {
        ...state,
        loading: false,
        auth: [...state.auth],
      };
    case actionTypes.ACTIVATION.SUCCESS:
    case actionTypes.SIGN_UP.SUCCESS:
    case actionTypes.RESET.SUCCESS:
    case actionTypes.FORGOT.SUCCESS:  


    case actionTypes.SIGN_IN.FAILURE:
    case actionTypes.SIGN_UP.FAILURE:
    case actionTypes.FORGOT.FAILURE:
    case actionTypes.ACTIVATION.FAILURE:
    case actionTypes.RESET.FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
