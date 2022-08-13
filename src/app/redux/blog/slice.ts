import {
  countryModel,
  roleModel,
  userModel,
  usersSliceModel,
} from "../../models/redux-models";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { usersResponseModel } from "@/app/models/user";

const initialUserState: usersSliceModel = {
  userInfo: undefined,
  rolesList: undefined,
  countriesList: undefined,
  usersListResponse: undefined,
};

const blogSlice = createSlice({
  name: "blog",
  initialState: initialUserState,
  reducers: {
    getBlogCategories: (state, action: PayloadAction<userModel>) => {
      state.userInfo = action.payload;
    },
  },
});

export default blogSlice;
