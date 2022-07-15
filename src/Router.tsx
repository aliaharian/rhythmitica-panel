import About from "./About";
import { Routes, Route, Link, Navigate, Outlet } from "react-router-dom";
import Home from "./components/pages/Home";
import React, { Suspense } from "react";
import { routerProps } from "./app/models/router";
import UsersList from "./components/pages/users/UsersList";

const MainLayout = React.lazy(
  () => import("./components/templates/MainLayout")
);
const Login = React.lazy(
  () => import("./components/pages/auth/Login")
);

const Router = ({ setThemeScheme }: routerProps): JSX.Element => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route element={<MainLayout />}>
            <Route path="/users">
              <Route path="list" element={<UsersList />} />
              <Route path="create" element={<About />} />
            </Route>

            <Route
              path="/dashboard"
              element={<Home setThemeScheme={setThemeScheme} />}
            />
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Route>

        <Route element={<PublicRoute />}>
          <Route path="/auth">
            <Route path="login" element={<Login />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
};

export default Router;

export const PrivateRoute = () => {
  const token = localStorage.getItem(process.env.REACT_APP_AUTH_STORAGE || "");
  console.log("ok!", token);
  if (token) {
    return <Outlet />;
  } else {
    return <Navigate to="/auth/login" />;
  }
};

export const PublicRoute = () => {
  const token = localStorage.getItem(process.env.REACT_APP_AUTH_STORAGE || "");
  console.log("ok!", token);
  if (!token) {
    return <Outlet />;
  } else {
    return <Navigate to="/dashboard" />;
  }
};
