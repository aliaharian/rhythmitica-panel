/* eslint-disable import/no-anonymous-default-export */
import { userFilterModel } from "@/app/models/user";
import { LoginFormInitialValues } from "../../models/auth";
import Api from "../../service/Api";
async function getAllUsers() {
  let response = await Api()?.get("users?page=1");
  return response?.data.data;
}
async function login(credentials: LoginFormInitialValues) {
  let response = await Api()?.post("/auth/login", {
    email: credentials.email,
    password: credentials.password,
  });
  return response?.data;
}
async function getRolesList() {
  let response = await Api()?.get("/admin/roles");
  return response?.data;
}
async function getUsersList({ page = 0, role }: userFilterModel) {
  let response = await Api()?.get(`/admin/users/filter?page=${page}`);
  return response?.data;
}
async function getCountriesList() {
  let response = await Api()?.get("/admin/countries/countriesList");
  return response?.data;
}
export default {
  getAllUsers,
  login,
  getRolesList,
  getCountriesList,
  getUsersList
};
