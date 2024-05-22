import React from 'react';
import DashboardStatsGrid from '../components/DashboardStatsGrid';
import TransactionChart from '../components/DonationChart';
import DonorProfilePieChart from '../components/DonorProfilePieChart';
// import PopularProducts from '../components/PopularHospital';
import RecentDoners from '../components/RecentDoners';

export default function ADashboard() {
  return (
    <div className="w-full overflow-x-hidden p-4 max-w-7xl mx-auto">
      <div className="flex flex-col gap-4">
        <DashboardStatsGrid />
        <div className="flex flex-row gap-4">
          <TransactionChart />
          <DonorProfilePieChart />
        </div>
        <div className="flex flex-row gap-4">
          <RecentDoners />
          {/* <PopularProducts /> */}
        </div>
      </div>
    </div>
  );
}
