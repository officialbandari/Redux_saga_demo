import { applyMiddleware, createStore } from "redux";

import createSagaMiddleware from "redux-saga";
import { watchUser } from "../saga/users.saga";

import mobileReducer from "./reducers/index";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  mobileReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(watchUser);
