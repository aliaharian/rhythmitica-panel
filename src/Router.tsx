import About from "./About";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/pages/Home";
import React, { Suspense } from "react";
import { routerProps } from "./app/models/router";

const MainLayout = React.lazy(
  () => import("./components/templates/MainLayout")
);

const Router = ({ setThemeScheme }: routerProps): JSX.Element => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home setThemeScheme={setThemeScheme} />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default Router;
