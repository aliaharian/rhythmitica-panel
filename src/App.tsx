import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useAppDispatch, useAppSelector } from './app/redux/hooks';
import { selectUser, setUsers } from './app/redux/users/actions';
import { userModel } from './app/models/redux-models';
import { Link } from "react-router-dom";

function App() {

  const Dispatch = useAppDispatch()
  const users = useAppSelector(state => state.users.all_users)
  const selectedUser = useAppSelector(state => state.users.selectedUser)
  console.log(users)
  const handleSelectUser = (user: userModel) => {
    console.log(user)
    Dispatch(selectUser(user))
  }
  return (
    <div className="App">
      <header className="App-header">
        {
          selectedUser.id === 0 ?
            <p>not selected</p>
            :
            <>
              <img src={selectedUser.avatar} />
              <p>{selectedUser.first_name} {selectedUser.last_name}</p>
            </>
        }
        <button onClick={() => Dispatch(setUsers())}>click</button>
        <ul>
          {users.map(user => <li key={user.id} onClick={() => handleSelectUser(user)}>{user.first_name}</li>)}
        </ul>
        <p>
          <Link to="/">home</Link> / <Link to="/about">about</Link> / <Link to="/users">users</Link>
        </p>
      </header>

    </div>
  );
}

export default App;
