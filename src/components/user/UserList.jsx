import React from 'react';
import Card from '../UI/Card';
import './UserList.css'
const UserList = (props) => {
  return (
    <Card>
      <ul className='userlist'>
        {props.users.map((user) => (
          <li className='userlist-li' key={user.id}>
            {user.name} {user.age} years old
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default UserList;