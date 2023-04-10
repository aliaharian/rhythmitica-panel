import { useAppDispatch, useAppSelector } from "../../app/redux/hooks";
import { userModel } from "../../app/models/redux-models";
import { Link } from "react-router-dom";
import { Dispatch } from "react";

interface homeProps {
  setThemeScheme: Dispatch<string>;
}
const Home = ({ setThemeScheme }: homeProps) => {
  const Dispatch = useAppDispatch();
  const userInfo = useAppSelector((state) => state.users.userInfo);
  const handleSelectUser = (user: userModel) => {
    console.log(user);
  };
  console.log('dvsvsvsvdsvdsdsds',userInfo)
  return (
    <header className="App-header">
      <button
        onClick={() => {
          setThemeScheme("green");
        }}
      >
        green Theme
      </button>
      <button
        onClick={() => {
          setThemeScheme("orange");
        }}
      >
        orange Theme
      </button>
      <button
        onClick={() => {
          setThemeScheme("light");
        }}
      >
        light Theme
      </button>

      <button
        onClick={() => {
          setThemeScheme("pink");
        }}
      >
        pink Theme
      </button>

      <p>
        <Link to="/">home</Link> / <Link to="/about">about</Link> /{" "}
        <Link to="/users">users</Link>
      </p>
    </header>
  );
};

export default Home;
