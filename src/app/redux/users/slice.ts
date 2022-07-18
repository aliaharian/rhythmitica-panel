import { roleModel, userModel, usersSliceModel } from "../../models/redux-models";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialUserState: usersSliceModel = {
  userInfo: undefined,
  rolesList : undefined
};

const userSlice = createSlice({
  name: "users",
  initialState: initialUserState,
  reducers: {
    setUserInfo: (state, action: PayloadAction<userModel>) => {
      state.userInfo = action.payload;
    },
    getRolesList: (state, action: PayloadAction<roleModel[]>) => {
      console.log('action.payload',action.payload)
      state.rolesList = action.payload;
    },
  },
});

export default userSlice;
