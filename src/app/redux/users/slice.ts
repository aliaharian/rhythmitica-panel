import { userModel, usersArrayModel } from "../../models/redux-models";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialUserState: usersArrayModel = {
    all_users: [],
    selectedUser: { first_name: "", last_name: "", id: 0 }
};

const userSlice = createSlice({
    name: "users",
    initialState: initialUserState,
    reducers: {
        setUsers: (state, action: PayloadAction<userModel[]>) => {
            state.all_users = action.payload
        },
        selectUser: (state, action: PayloadAction<userModel>) => {
            state.selectedUser = action.payload
        }
    }
})

export default userSlice;