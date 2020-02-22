import React, { useState, useEffect } from 'react';
import handlers from '../utility/handlers';
import UserList from '../components/UserList';

function Authors() {
  async function loadAuthors() {
    let users = await handlers.getUsers();
    setUsers(users);
  }

  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadAuthors();
  }, []);

  return (
    <div>
      <h1>Authors</h1>
      <UserList users={users} />
    </div>
  );
}

export default Authors;