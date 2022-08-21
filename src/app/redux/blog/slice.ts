import {
  blogSliceModel,
  countryModel,
  roleModel,
  userModel,
  usersSliceModel,
} from "../../models/redux-models";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialBlogState: blogSliceModel = {
  blogCategories: undefined,
  createPostResponse: undefined,
};

const blogSlice = createSlice({
  name: "blog",
  initialState: initialBlogState,
  reducers: {
    getBlogCategories: (state, action: PayloadAction<any[]>) => {
      state.blogCategories = action.payload;
    },
    createPost: (state, action: PayloadAction<any>) => {
      state.createPostResponse = action.payload;
      window.location.href = "/";
    },
  },
});

export default blogSlice;
