import React from 'react'
import DashboardStatsGrid from '../components/DashboardStatsGrid'
import TransactionChart from '../components/DonationChart'
// import DonorProfilePieChart from '../components/DonorProfilePieChart'
// import PopularProducts from '../components/PopularHospital'
// import RecentRequest from '../components/RecentRequest'

export default function HDashboard() {
	return (
		<div className="flex flex-col gap-4">
			<DashboardStatsGrid />
			<div className="flex flex-row gap-4 w-full">
				<TransactionChart />
				{/* <DonorProfilePieChart /> */}
			</div>
			<div className="flex flex-row gap-4 w-full">
				{/* <RecentRequest /> */}
				{/* <PopularProducts /> */}
			</div>
		</div>
	)
}
