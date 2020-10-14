import React from "react";
import { useState } from "react";

const MyComponent2 = () => {
  const [users, setUsers] = useState(users);

  const onInputChange = (event) => {
    setUsers(event.target.users);
  };

  return <input onChange={onInputChange} users={users} />;
};

export default MyComponent2;
