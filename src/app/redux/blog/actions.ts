import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import userService from "./service";
import { RootState } from "../store";
import blogSlice from "./slice";


const blogActions = blogSlice.actions;

export const getBlogCategories = (): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {
  return async (dispatch, getState) => {
    const response = await userService.getBlogCategories();
    dispatch(blogActions.getBlogCategories(response.data));
  };
};
