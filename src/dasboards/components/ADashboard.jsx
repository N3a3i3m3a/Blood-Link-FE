import React from 'react';
import DashboardStatsGrid from '../components/DashboardStatsGrid';
import TransactionChart from '../components/DonationChart';
import DonorProfilePieChart from '../components/DonorProfilePieChart';
// import PopularProducts from '../components/PopularHospital';
import RecentDoners from '../components/RecentDoners';

export default function ADashboard() {
  return (
    <div className="flex flex-col gap-4 w-3xl ">
      <DashboardStatsGrid />
      <div className="flex flex-row  w-full lg:flex-row pr-20 p-5 w-fit gap-20">
        
          <TransactionChart />
        
        
          <DonorProfilePieChart />
        
      </div>
      <div className="w-full mt-5">
        <RecentDoners />
        {/* <PopularProducts /> */}
      </div>
    </div>
  );
}
