import React from "react";
import { useSelector } from "react-redux";

function UserList() {
  const users = useSelector((state) => state.users.users);

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <strong>{user.name}</strong> ({user.email})
        </li>
      ))}
    </ul>
  );
}

export default UserList;
