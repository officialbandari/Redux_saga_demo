import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  buyMobile,
  sellMobile,
  getAllUsers,
  getSingleUser,
  addUser,
  editUser,
  deleteUser,
} from "./redux/actions/index";

const MobileComponents = ({
  noOfMobiles,
  buyMobile,
  sellMobile,
  getAllUsers,
  getSingleUser,
  users,
  addUser,
  editUser,
  deleteUser,
}) => {
  const style = {
    btn: {
      padding: 20,
      margin: 10,
      borderRadius: 10,
      border: 0,
      cursor: "pointer",
    },
  };
  return (
    <div>
      <h1>
        Number of Mobiles :{noOfMobiles} and User :{users.length} and Details :
        {users.name}
      </h1>
      <button style={style.btn} onClick={() => buyMobile()}>
        Buy Mobiles
      </button>
      <button style={style.btn} onClick={() => sellMobile()}>
        Sell Mobiles
      </button>

      <button style={style.btn} onClick={() => getAllUsers()}>
        Get All Users
      </button>
      <button style={style.btn} onClick={() => getSingleUser()}>
        Get Single User
      </button>
      <button style={style.btn} onClick={() => addUser()}>
        Add User
      </button>
      <button
        style={style.btn}
        onClick={() => editUser({ name: "krishna" }, 1)}
      >
        Edit User
      </button>
      <button style={style.btn}>Delete User</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state.users);
  return {
    noOfMobiles: state.noOfMobiles,
    users: state.users,
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      buyMobile,
      sellMobile,
      getAllUsers,
      getSingleUser,
      addUser,
      editUser,
      deleteUser,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MobileComponents);
