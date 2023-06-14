import React, { useState } from 'react';
import { Grid, Typography, TextField, Button } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Profile = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      const response = await axios.post('https://express-t4.onrender.com/api/login', {
        username: email,
        password: password
      });
      console.log(response.data); // Handle the response as per your requirement

      navigate("/profile", { state: response.data });

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ display: "flex", height: "100vh", justifyContent: "center", alignItems: "center" }}>
      <Grid container spacing={2} style={{ width: "400px" }}>
        <Grid item xs={12}>
          <Typography variant="h4" style={{ textAlign: "center", marginBottom: "20px" }}>Login</Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} style={{ textAlign: "center" }}>
          <Button variant="contained" color="primary" onClick={handleLogin}>Login</Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default Profile;
