
import './App.css';
import { useState } from 'react';
import AddUser from "./components/user/AddUser";
import UserList from './components/user/UserList';

function App() {
const  [userList,setUserList]=  useState([]);
  const HandleUserChange=(uName,uAge)=>{
    setUserList((preUser)=>{
      return [{name:uName,age:uAge,id:Math.random().toString()},...preUser]
    })

  };
  return (
    <div className="App">
      <h1>My Login </h1>
      <header className="App-header">
        <AddUser onAddUser={HandleUserChange}/>
        <UserList users={userList} />
      </header>
    </div>
  );
}

export default App;
