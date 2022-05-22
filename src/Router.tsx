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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>


  )
}

export default Router;