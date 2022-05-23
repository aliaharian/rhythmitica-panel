import About from "./About";
import App from "./App";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
const Router = () => {
  return (
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
      </Routes>
  )
}

export default Router;