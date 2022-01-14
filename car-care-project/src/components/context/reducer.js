const reducer = (state, action) => {
  if (action.type === "SET_SUBMITTED") {
    return { ...state, submitted: true };
  }
  if (action.type === "SET_LOGGED") {
    return { ...state, logged: true };
  }
  if (action.type === "SET_LOGOUT") {
    return { ...state, logged: false };
  }
};

export default reducer;
