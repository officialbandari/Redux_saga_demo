export const buyMobile = () => {
  return {
    type: "BUY_MOBILE",
  };
};

export const sellMobile = () => {
  return {
    type: "SELL_MOBILE",
  };
};

export const getAllUsers = () => {
  return {
    type: "GET_ALL_USERS",
  };
};

export const getSingleUser = (id) => {
  return {
    type: "GET_SINGLE_USER",
    id,
  };
};

export const addUser = (payload) => {
  return {
    type: "ADD_USER",
    payload,
  };
};

export const editUser = (payload, id) => {
  return {
    type: "EDIT_USER",
    id,
    payload,
  };
};

export const deleteUser = (id) => {
  return {
    type: "DELETE_USER",
    id,
  };
};
