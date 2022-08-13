/* eslint-disable import/no-anonymous-default-export */
import { userFilterModel } from "@/app/models/user";
import { LoginFormInitialValues } from "../../models/auth";
import Api from "../../service/Api";


async function getBlogCategories() {
  let response = await Api()?.get("/v1.0/blog/cats");
  return response?.data;
}

export default {

  getBlogCategories,
};
