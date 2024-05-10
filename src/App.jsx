import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import LandingPage from './pages/LandingPage';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Alayout from './Auth/Alayout';
import Resetpass from './pages/Resetpass';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<LandingPage />} />
          </Route>
          <Route path="/" element={<Alayout />}>
          <Route path="/Login" element={<Login/>} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Reset" element={<Resetpass/>} />
          </Route>

        </Routes>
      </Router>
    </div>
  );
};

export default App;
