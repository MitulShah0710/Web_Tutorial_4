import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Modal from 'react-modal';

const UserProfile = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [showGreeting, setShowGreeting] = useState(false);

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const fetchUserProfile = async () => {
    try {
      const response = await axios.get(`https://express-t4.onrender.com/api/users/${id}`);
      setUser(response.data);
      setShowGreeting(true); // Show the greeting popup
      console.log("User", response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const closeGreeting = () => {
    setShowGreeting(false); // Close the greeting popup
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>User Profile</h1>
      <img src={user.picture} alt={user.name} style={{ width: '200px', height: '200px' }} />
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Age: {user.age}</p>
      <p>Address: {user.address}</p>
      <p>Company: {user.company}</p>
      <p>Phone: {user.phone}</p>
      <p>Balance: {user.balance}</p>
      <p>Gender: {user.gender}</p>

      {/* Greeting Popup */}
      <Modal isOpen={showGreeting} onRequestClose={closeGreeting}>
        <h2>Greeting</h2>
        <p>{user.greeting}</p>
        <button onClick={closeGreeting}>Close</button>
      </Modal>
    </div>
  );
};

export default UserProfile;
