import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Alayout from './components/Alayout';
import LandingPage from './pages/LandingPage';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Resetpass from './pages/Resetpass';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import Contact from './components/Contact';
import OTP from './pages/OTP';
import AdminLay from './components/AdminLay';
import RequestBlood from './Forms/RequestBlood';
import BookAppointment from './Forms/BookAppointment';
import DonorProfile from './Forms/DonorProfile';

import Donors from './pages/Donors'
import Hospital from './pages/Hospital'
import Requests from './pages/Requests'
import Donation from './pages/Donation'
import Messages  from './pages/Messages'
import ADashboard from "./dasboards/components/ADashboard"



const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Process" element={<Process />} />
          <Route path="/Contact" element={<Contact />} />
        </Route>
        <Route element={<Alayout />}>
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Resetpass" element={<Resetpass />} />
          <Route path="/OTP" element={<OTP />} />
          <Route path="/RequestBlood" element={<RequestBlood />} />
          <Route path="/BookAppointment" element={<BookAppointment />} />

        </Route>
        <Route path="/Hospital" element={<Hospital/>}/>
        <Route path="/DonorProfile" element={<DonorProfile/>} />
        

        <Route  element={<AdminLay/>}>
          <Route path="/ADashboard" element={<ADashboard/>}/>
          <Route path="/requests" element={<Requests/>}/>
          <Route path="/hospitals" element={<Hospital/>}/>
          <Route path="/donation" element={<Donation />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="donors" element={<Donors />} />
        </Route>
              


      </Routes>

    </Router>
  );
};

export default App;
