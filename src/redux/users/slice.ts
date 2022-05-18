import { userModel, usersArrayModel } from "../../models/redux-models";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialUserState: usersArrayModel = {
    all_users: []
}

const userSlice = createSlice({
    name: "users",
    initialState: initialUserState,
    reducers: {
        setUsers: (state, action: PayloadAction<userModel[]>) => {
            state.all_users = action.payload
        }
    }
})

export default userSlice;