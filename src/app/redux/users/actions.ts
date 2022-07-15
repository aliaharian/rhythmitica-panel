import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import { userModel } from "../../models/redux-models";
import userService from "./service";
import { RootState } from "../store";
import userSlice from "./slice";
import { LoginFormInitialValues } from "../../models/auth";

const userActions = userSlice.actions;
export const setUsers = (): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {
  return async (dispatch, getState) => {
    if (getState().users.all_users.length === 0) {
      const response: userModel[] = await userService.getAllUsers();
      dispatch(userActions.setUsers(response));
    }
  };
};
export const selectUser = (
  user: userModel
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch, getState) => {
    dispatch(userActions.selectUser(user));
  };
};
export const login = (
  credentials: LoginFormInitialValues
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch, getState) => {
    const response = await userService.login(credentials);
    localStorage.setItem(
      process.env.REACT_APP_AUTH_STORAGE || "",
      JSON.stringify(response.data.token)
    );
    console.log(response);
  };
};
