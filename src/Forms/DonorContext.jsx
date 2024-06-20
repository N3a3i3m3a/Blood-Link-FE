// DonorContext.js
import React, { createContext, useState } from 'react';

export const DonorContext = createContext();

export const DonorProvider = ({ children }) => {
  const [donorProfile, setDonorProfile] = useState({
    fullName: '',
    mobileNumber: '',
    nationalID: '',
    email: '',
    province: '',
    district: '',
    sector: '',
    bloodGroup: '',
    age: '',
    gender: '',
    weight: '',
  });

  return (
    <DonorContext.Provider value={{ donorProfile, setDonorProfile }}>
      {children}
    </DonorContext.Provider>
  );
};
