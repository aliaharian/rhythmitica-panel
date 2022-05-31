import About from "./About";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from "./components/pages/Home";
import { Dispatch, FC } from "react";
interface routerProps {
  setThemeScheme: Dispatch<string>
}
const Router = ({ setThemeScheme }: routerProps): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<Home setThemeScheme={setThemeScheme} />} />
      <Route path="/about" element={<About />} />
    </Routes>
  )
}

export default Router;