import React, { useEffect, useState } from 'react';
import { IoBagHandle, IoPieChart, IoPeople, IoCart } from 'react-icons/io5';
import axios from 'axios';

export default function DashboardStatsGrid() {
  const [donorsCount, setDonorsCount] = useState(0);
  const [hospitalsCount, setHospitalsCount] = useState(0);
  const [requestsCount, setRequestsCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const donorsResponse = await axios.get('https://blood-link-be.onrender.com/api/donor/getDonor');
        const hospitalsResponse = await axios.get('https://blood-link-be.onrender.com/api/hospital/list');
        const requestsResponse = await axios.get('https://blood-link-be.onrender.com/api/hospital/listOfBloodRequest');

        setDonorsCount(donorsResponse.data.number_of_donors);
        setHospitalsCount(hospitalsResponse.data.number_of_hospitals);
        setRequestsCount(requestsResponse.data.number_of_requests);

        setLoading(false);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex gap-4">
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
          <IoBagHandle className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">Total donors</span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">{donorsCount}</strong>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-orange-600">
          <IoPieChart className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">Total Register</span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">{hospitalsCount}</strong>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-yellow-400">
          <IoPeople className="text-2xl text-white" />
        </div>
        <div className="">
          <span className="text-sm text-gray-500 font-light">Total hospitals</span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">{hospitalsCount}</strong>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-600">
          <IoCart className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">Total Requests</span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">{requestsCount}</strong>
          </div>
        </div>
      </BoxWrapper>
    </div>
  );
}

function BoxWrapper({ children }) {
  return <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center">{children}</div>;
}
