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

const userSlice = createSlice({
  name: "users",
  initialState: initialUserState,
  reducers: {
    setUserInfo: (state, action: PayloadAction<userModel>) => {
      state.userInfo = action.payload;
    },
    getRolesList: (state, action: PayloadAction<roleModel[]>) => {
      state.rolesList = action.payload;
    },
    getUsersList: (state, action: PayloadAction<usersResponseModel>) => {
      state.usersListResponse = action.payload;
    },
    getCountriesList: (state, action: PayloadAction<countryModel[]>) => {
      state.countriesList = action.payload;
    },
  },
});

export default userSlice;
