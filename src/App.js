import './App.css';
import AppBar from '../src/components/Appbar';
import Profile from './components/Profile';
import Homepage from './components/Homepage';
import { Grid } from '@mui/material';
import UserProfile from './components/UserProfile';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export const logoColor = "#4C1582"

function App() {
  return (
    <div className="App">
      <Grid container spacing={0}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <AppBar />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Router>
            <Routes>
              <Route path="/" element={<Profile />} />
              <Route path="/profile" element={<Homepage />} />
              <Route path="/user/:id" element={<UserProfile />} />
            </Routes>
          </Router>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{ marginTop: "50px" }}>
          {/* <Footer /> */}
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
