const initialState = {
  userId: "",
  userName: "",
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case "user/login":
      return {
        ...state,
        ...action.payload,
      };
    case "user/logout":
      return {
        ...state,
        userId: "",
        userName: "",
      };
    default:
      return state;
  }
}

export default userReducer;
