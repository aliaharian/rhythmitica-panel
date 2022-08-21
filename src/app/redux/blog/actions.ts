import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import userService from "./service";
import { RootState } from "../store";
import blogSlice from "./slice";
import { postModel } from "@/app/models/post";

const blogActions = blogSlice.actions;

export const getBlogCategories = (): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {
  return async (dispatch, getState) => {
    const response = await userService.getBlogCategories();
    dispatch(blogActions.getBlogCategories(response));
  };
};

export const createPost = ({
  title,
  body,
  brief,
  draft,
  selectedCategory,
  banner
}: postModel): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch, getState) => {
    const response = await userService.createPost({
      title,
      body,
      brief,
      draft,
      selectedCategory,
      banner
    });
    dispatch(blogActions.createPost(response));
  };
};
