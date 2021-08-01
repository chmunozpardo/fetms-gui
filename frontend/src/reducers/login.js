const initialState = {
  authorization: false,
  token: "",
  username: "",
  email: "",
};

export function setToken(token) {
  return {
    type: "SET_TOKEN",
    payload: {
      token: token,
    },
  };
}

export function loginUser(credentials) {
  return {
    type: "LOGIN_USER",
    payload: {
      username: credentials.username,
      email: credentials.email,
    },
  };
}

export function logoutUser() {
  return { type: "LOGOUT_USER" };
}

export function loginReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_TOKEN":
      return {
        ...state,
        token: action.payload.token,
        authorization: true,
      };
    case "LOGIN_USER":
      return {
        ...state,
        username: action.payload.username,
        email: action.payload.email,
      };
    case "LOGOUT_USER":
      return {
        ...state,
        authorization: false,
        token: "",
        username: "",
        email: "",
      };
    default:
      return {
        ...state,
      };
  }
}

export default loginReducer;
