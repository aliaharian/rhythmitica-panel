import { Navigate, Outlet } from "react-router-dom";
import AccessDenied from "../../components/pages/accessDenied/AccessDenied";
import { middlewareModel } from "../models/router";
import store from "../redux/store";
import { setUserInfo } from "../redux/users/actions";

export const PrivateRoute = () => {
  const token = localStorage.getItem(process.env.REACT_APP_AUTH_STORAGE || "");
  const userInfoState = store.getState().users.userInfo;
  let userInfo;
  if (!userInfoState) {
    const userInfoStorage = localStorage.getItem(
      process.env.REACT_APP_USER_STORAGE || ""
    );
    if (userInfoStorage) {
      userInfo = JSON.parse(userInfoStorage);
      store.dispatch(setUserInfo(userInfo));
    }
  } else {
    userInfo = userInfoState;
  }

  if (token && userInfo) {
    return <Outlet />;
  } else {
    return <Navigate to="/auth/login" />;
  }
};

export const PublicRoute = () => {
  const token = localStorage.getItem(process.env.REACT_APP_AUTH_STORAGE || "");
  const userInfoState = store.getState().users.userInfo;
  const userInfoStorage = localStorage.getItem(
    process.env.REACT_APP_USER_STORAGE || ""
  );
  // return <Outlet />;

  console.log("ok!", token);
  if (!token || (!userInfoState && !userInfoStorage)) {
    return <Outlet />;
  } else {
    return <Navigate to="/dashboard" />;
  }
};

export const MiddlewareRoute = ({ permission }: middlewareModel) => {
  const userPermissions = store.getState().users.userInfo?.permissions;
  if (userPermissions?.find((perm) => perm.slug === permission)) {
    return <Outlet />;
  } else {
    return <AccessDenied/>;
    // return <Navigate to="/access-denied" />;
  }
};
