import About from "../About";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../components/pages/Home";
import React, { Suspense } from "react";
import { routerProps } from "../app/models/router";
import UsersList from "../components/pages/users/UsersList";
import {
  MiddlewareRoute,
  PrivateRoute,
  PublicRoute,
} from "../app/utils/routeUtils";

const MainLayout = React.lazy(
  () => import("../components/templates/MainLayout")
);
const Login = React.lazy(() => import("../components/pages/auth/Login"));

const CreateBlog = React.lazy(
  () => import("../components/pages/blog/CreateBlog")
);

const Profile = React.lazy(() => import("@/components/pages/profile/Profile"));

const Router = ({ setThemeScheme }: routerProps): JSX.Element => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route element={<MainLayout />}>
            <Route
              path="/users"
              element={<MiddlewareRoute permission="user-manage" />}
            >
              <Route path="list" element={<UsersList />} />
              <Route path="create" element={<About />} />
            </Route>

            <Route
              path="/blog"
              element={<MiddlewareRoute permission="post-manage" />}
            >
              <Route path="create" element={<CreateBlog />} />
            </Route>

            <Route
              path="/dashboard"
              element={<Home setThemeScheme={setThemeScheme} />}
            />
            <Route path="/profile" element={<Profile />} />
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
