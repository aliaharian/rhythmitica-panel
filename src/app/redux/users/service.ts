/* eslint-disable import/no-anonymous-default-export */
import Api from "../../service/Api";
export default {
    async getAllUsers() {
        let response = await Api().get('users?page=1')
        return response.data.data;
    }
}