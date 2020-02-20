import React, { useState, useEffect } from 'react';
import handlers from '../handlers';
import Users from '../components/Users';

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
      <Users users={users} />
    </div>
  );
}

export default Authors;