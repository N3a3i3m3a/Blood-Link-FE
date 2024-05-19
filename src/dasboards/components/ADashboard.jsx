import React from 'react'
import DashboardStatsGrid from './DashboardStatsGrid'
import TransactionChart from './DonationChart'
import DonorProfilePieChart from './DonorProfilePieChart'
// import PopularProducts from '../components/PopularHospital'
import RecentDoners from './RecentDoners'

export default function ADashboard() {
	return (
		<div className="flex flex-col w-fit  gap-4">
			<DashboardStatsGrid />
			<div className="flex flex-row gap-4 ">
				<TransactionChart />
				<DonorProfilePieChart />
			</div>
			<div className="flex flex-row gap-4 ">
				<RecentDoners />
				{/* <PopularProducts /> */}
			</div>
		</div>
	)
}
