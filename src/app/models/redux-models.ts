export interface userModel {
    "id": number,
    "first_name": string,
    "last_name": string,
    "avatar"?: string
}
export interface usersArrayModel {
    all_users: userModel[],
    selectedUser: userModel
}