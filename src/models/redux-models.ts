export interface userModel {
    "id": number,
    "name": string,
    "lastName": string
}
export interface usersArrayModel{
    all_users:userModel[],
}