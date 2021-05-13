const initialState = {
  users: [],
  userEdit: undefined
}

export const reducer = (state = initialState, action) => {
  switch(action.type) {

    case "GET_USERS":
      return {
        ...state,
        users: action.payload
      }

    case "EDIT_USER":
      return {
        ...state,
        userEdit: action.payload
      }

    default:
      return state;
  }
}