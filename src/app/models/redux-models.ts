import { usersResponseModel } from "./user";

export interface userModel {
  address: string;
  avatar: string;
  birth_date: string;
  city: string;
  country: string;
  created_at: string;
  created_at_p: string;
  email: string;
  family: string;
  gender: string;
  id: number;
  is_active: string;
  name: string;
  permissions: permissionsModel[];
  phone_number: string;
  // roles: []
  // site: {id: 7, url: "https://kids.rhythmitica.com", name: "rhythmitica kids", active: "1",…}
  // site_id: "7"
  // skype_id: null
  // star: "0"
  timezone: string;
  updated_at: string;
}
export interface permissionsModel {
  id: number;
  name: string;
  slug: string;
  protected: string;
}
export interface usersSliceModel {
  userInfo?: userModel;
  rolesList?: roleModel[];
  countriesList?: countryModel[];
  usersListResponse?: any;
}
export interface blogSliceModel {
  blogCategories?: any[];
  createPostResponse?:any;
}
export interface usersSliceModel {
  userInfo?: userModel;
  rolesList?: roleModel[];
  countriesList?: countryModel[];
  usersListResponse?: any;
}
export interface appSliceModel {
  apiLoading: boolean;
}

export interface countryModel {
  id: number;
  countryName: string;
}
export interface roleModel {
  id: number;
  name: string;
  slug: string;
}
