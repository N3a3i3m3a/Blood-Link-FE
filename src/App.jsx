import React, { Fragment } from 'react';
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

import HLayout from './hos-dashboard/components/shared/HLayout'
// import Notifications from './hos-dashboard/hpages/Notifications'
import HDashboard from './hos-dashboard/hpages/HDashboard'
// import ExistingRequest from './hos-dashboard/hpages/ExistingRequest'
import BloodRequest from './hos-dashboard/hpages/BloodRequest'
import RecentAppointments from './hos-dashboard/hpages/RecentAppointments'
import ConfirmNewPass from './pages/ConfirmNewPass';
import AddHospital from './pages/AddHospital';
import { DonorProvider } from './Forms/DonorContext'

const App = () => {
  return (
    <DonorProvider>
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
          <Route path="/ConfirmNewPassword" element={<ConfirmNewPass/>} />
        </Route>
        <Route path="/Hospital" element={<Hospital/>}/>
        
        

        <Route  element={<AdminLay/>}>
          <Route path="/ADashboard" element={<ADashboard/>}/>
          <Route path="/requests" element={<Requests/>}/>
          <Route path="/hospitals" element={<Hospital/>}/>
          <Route path="/donation" element={<Donation />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="donors" element={<Donors />} />
          <Route path="/AddHospital" element={<AddHospital/>}/>
        </Route>
              

        <Route element={<HLayout />}>
                    <Route path="/RequestBlood" element={<RequestBlood />} />
                    <Route path="/HDashboard" element={<HDashboard />} />
                    <Route path="bloodrequest" element={<BloodRequest />} />
                    <Route path="/RecentAppointments" element={<RecentAppointments/>}/>
                   
    
                </Route>
      </Routes>
      <Routes>
        <Route path="/DonorProfile" element={<DonorProfile />} />
        <Route path="/BookAppointment" element={<BookAppointment />} />
      </Routes>
      

    </Router>
    </DonorProvider>
    
  );
};

export default App;
