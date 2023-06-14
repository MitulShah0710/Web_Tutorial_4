import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('https://express-t4.onrender.com/api/users');
      setUsers(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredUsers = users.filter((user) => {
    const { name, email } = user;
    const search = searchTerm.toLowerCase();
    return name.toLowerCase().includes(search) || email.toLowerCase().includes(search);
  });

  return (
    <div>
      <h1>User List</h1>
      <input type="text" placeholder="Search" value={searchTerm} onChange={handleSearch} />
      {filteredUsers.length === 0 ? (
        <p>No users found.</p>
      ) : (
        filteredUsers.map((user) => (
          <div key={user._id}>
            <Link to={`/user/${user._id}`}>
              <img src={user.picture} alt={user.name} />
              <p>{user.name}</p>
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default UserList;
