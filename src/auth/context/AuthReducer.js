import types from "../types/types";

const AuthReducer = (state = {}, action) => {
  switch (action.type) {

    case types.login:
      return {
        logged: true,
        user: action.payload,
      };

    case  types.logout:
      return {
        logged: false,
      };

    default:
      return state;
  }
}

export default AuthReducer;
