const initialState = {
  userId: "",
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case "user/login":
      return {
        ...state,
        userId: action.payload.userId,
      };
    case "user/logout":
      return {
        ...state,
        userId: "",
      };
    default:
      return state;
  }
}

export default userReducer;
