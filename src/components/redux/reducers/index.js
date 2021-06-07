const initialState = {
  noOfMobiles: 10,
  users: [],
  user: {},
};

const mobileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "BUY_MOBILE_SUCCESS":
      return {
        ...state,
        noOfMobiles: state.noOfMobiles - 1,
      };

    case "SELL_MOBILE_SUCCESS":
      return {
        ...state,
        noOfMobiles: state.noOfMobiles + 1,
      };

    // get method all users from API
    case "GET_ALL_USERS_SUCCESS":
      return {
        ...state,
        users: action.data,
      };

    case "GET_ALL_USERS_FAILED":
      return {
        ...state,
        message: action.message,
      };

    // get method single user from API

    case "GET_SINGLE_USER_SUCCESS":
      return {
        ...state,
        users: action.data,
      };

    case "GET_SINGLE_USER_FAILED":
      return {
        ...state,
        message: action.message,
      };

    // get method add user to API

    case "ADD_USER_SUCCESS": {
      let users = [...state.users];
      users.push(action.data);
      return {
        ...state,
        users,
      };
    }

    case "ADD_USER_FAILED":
      return {
        ...state,
        message: action.message,
      };

    // get method EDIT user to API

    case "EDIT_USER_SUCCESS": {
      let users = [...state.users];
      let findIndexId = users.findIndex((user) => user.id === action.data.id);
      users[findIndexId] = action.data;
      return {
        ...state,
        users,
      };
    }

    case "EDIT_USER_FAILED":
      return {
        ...state,
        message: action.message,
      };

    default:
      return state;
  }
};

export default mobileReducer;
