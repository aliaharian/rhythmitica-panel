/* eslint-disable import/no-anonymous-default-export */
import { postModel } from "@/app/models/post";
import { userFilterModel } from "@/app/models/user";
import { LoginFormInitialValues } from "../../models/auth";
import Api from "../../service/Api";

async function getBlogCategories() {
  let response = await Api()?.get("/v1.0/blog/cats");
  return response?.data;
}
async function createPost({
  title,
  body,
  brief,
  draft,
  selectedCategory,
  banner,
}: postModel) {
  var formData = new FormData();
  formData.append("banner", banner[0]);
  formData.append("title", title);
  formData.append("body", body);
  formData.append("brief", brief);
  formData.append("cat_id", selectedCategory);
  formData.append("active", draft ? "0" : "1");
  formData.append("json", "{}");

  let response = await Api()?.post("/admin/blog/posts", formData);
  return response?.data;
}

export default {
  getBlogCategories,
  createPost,
};
