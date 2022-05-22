import { AnyAction, ThunkAction } from "@reduxjs/toolkit"
import { userModel } from "../../models/redux-models"
import userService from "./service"
import { RootState } from "../store"
import userSlice from "./slice"

const userActions = userSlice.actions
export const setUsers = (): ThunkAction<void, RootState, unknown, AnyAction> => {
    return async (dispatch, getState) => {
        if (getState().users.all_users.length === 0) {
            const response: userModel[] = await userService.getAllUsers();
            dispatch(userActions.setUsers(response))
        }
    }
}
export const selectUser = (user: userModel): ThunkAction<void, RootState, unknown, AnyAction> => {
    return async (dispatch, getState) => {
        dispatch(userActions.selectUser(user))

    }
}