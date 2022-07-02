import { useAppDispatch, useAppSelector } from "../../app/redux/hooks";
import { selectUser, setUsers } from "../../app/redux/users/actions";
import { userModel } from "../../app/models/redux-models";
import { Link } from "react-router-dom";
import { Dispatch } from "react";

interface homeProps {
  setThemeScheme: Dispatch<string>;
}
const Home = ({ setThemeScheme }: homeProps) => {
  const Dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.users.all_users);
  const selectedUser = useAppSelector((state) => state.users.selectedUser);
  console.log(users);
  const handleSelectUser = (user: userModel) => {
    console.log(user);
    Dispatch(selectUser(user));
  };
  return (
    <header className="App-header">
      {selectedUser.id === 0 ? (
        <p>not selected</p>
      ) : (
        <>
          <img src={selectedUser.avatar} />
          <p>
            {selectedUser.first_name} {selectedUser.last_name}
          </p>
        </>
      )}
      <button onClick={() => Dispatch(setUsers())}>click</button>
      <button
        onClick={() => {
          setThemeScheme("dark");
        }}
      >
        dark Theme
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
          setThemeScheme("blue");
        }}
      >
        blue Theme
      </button>
      <ul>
        {users.map((user) => (
          <li key={user.id} onClick={() => handleSelectUser(user)}>
            {user.first_name}
          </li>
        ))}
      </ul>
      <p>
        <Link to="/">home</Link> / <Link to="/about">about</Link> /{" "}
        <Link to="/users">users</Link>
      </p>
    </header>
  );
};

export default Home;
