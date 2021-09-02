const initialState = {
  username: "",
  userId: "",
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case "user/login":
      return {
        ...state,
        username: action.payload.userName,
        userId: action.payload.userId,
      };
    case "user/logout":
      return {
        ...state,
        username: "",
        userId: "",
      };
    default:
      return state;
  }
}

export default userReducer;
