import { call, put, all, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* buyMobile() {
  yield put({
    type: "BUY_MOBILE_SUCCESS",
  });
}

function* sellMobile() {
  yield put({
    type: "SELL_MOBILE_SUCCESS",
  });
}

// api call

// https://jsonplaceholder.typicode.com/users

// GET  METHOD ALL USERS FROM API

function* getAllUsers() {
  try {
    let users = yield call(
      axios.get,
      "https://jsonplaceholder.typicode.com/users"
    );

    yield put({
      type: "GET_ALL_USERS_SUCCESS",
      data: users.data,
    });
  } catch (error) {
    yield put({
      type: "GET_ALL_USERS_FAILED",
      message: error.message,
    });
  }
}

// GET METHOD SINGLE USERS FROM API

function* getSingleUsers({ id }) {
  try {
    let users = yield call(
      axios.get,
      "https://jsonplaceholder.typicode.com/users/" + id
    );

    yield put({
      type: "GET_SINGLE_USER_SUCCESS",
      data: users.data,
    });
  } catch (error) {
    yield put({
      type: "GET_SINGLE_USER_FAILED",
      message: error.message,
    });
  }
}

// GET METHOD ADD USERS FROM API

function* addUsers({ payload }) {
  try {
    let users = yield call(
      axios.get,
      "https://jsonplaceholder.typicode.com/users",
      payload
    );

    yield put({
      type: "ADD_USER_SUCCESS",
      data: users.data,
    });
  } catch (error) {
    yield put({
      type: "ADD_USER_FAILED",
      message: error.message,
    });
  }
}

// GET METHOD EDIT USERS FROM API

function* editUsers({ payload, id }) {
  try {
    let users = yield call(
      axios.get,
      "https://jsonplaceholder.typicode.com/users/" + id,
      payload
    );

    yield put({
      type: "EDIT_USER_SUCCESS",
      data: users.data,
    });
  } catch (error) {
    yield put({
      type: "EDIT_USER_FAILED",
      message: error.message,
    });
  }
}

export function* watchUser() {
  yield all([
    takeLatest("BUY_MOBILE", buyMobile),
    takeLatest("SELL_MOBILE", sellMobile),
    takeLatest("GET_ALL_USERS", getAllUsers),
    takeLatest("GET_SINGLE_USER", getSingleUsers),
    takeLatest("ADD_USER", addUsers),
    takeLatest("EDIT_USER", editUsers),
  ]);
}
