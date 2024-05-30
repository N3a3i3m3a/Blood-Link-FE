import React, { useEffect, useState } from 'react';
import { IoBagHandle, IoPieChart, IoPeople, IoCart } from 'react-icons/io5';
import axios from 'axios';

export default function DashboardStatsGrid() {
  const [confirmedCount, setConfirmedCount] = useState(0);
  const [donorsCount, setDonorsCount] = useState(0);
  const [hospitalsCount, setHospitalsCount] = useState(0);
  const [requestsCount, setRequestsCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const confirmedResponse = await axios.get('https://blood-link-be.onrender.com/api/appointment/getComfirmedAppointments');
        const donorsResponse = await axios.get('https://blood-link-be.onrender.com/api/donor/count');
        const hospitalsResponse = await axios.get('https://blood-link-be.onrender.com/api/hospital/count');
        const requestsResponse = await axios.get('https://blood-link-be.onrender.com/api/hospital/bloodRequestCount');

        setConfirmedCount(confirmedResponse.data.numberOfConfirmedAppointments);
        setDonorsCount(donorsResponse.data.numberOfAllDonors);
        setHospitalsCount(hospitalsResponse.data.numberOfHospitals);
        setRequestsCount(requestsResponse.data.numberOfRequests);

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
    <div className="flex flex-wrap gap-4">
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
          <IoBagHandle className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">Total matched donations</span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">{confirmedCount}</strong>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-orange-600">
          <IoPieChart className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">Total registered donors</span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">{donorsCount}</strong>
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
          <span className="text-sm text-gray-500 font-light">Total hospitals requests</span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">{requestsCount}</strong>
          </div>
        </div>
      </BoxWrapper>
    </div>
  );
}

function BoxWrapper({ children }) {
  return <div className="bg-white rounded-sm p-4 border border-gray-200 flex-1">{children}</div>;
}
