import {
	HiOutlineViewGrid,
	HiOutlineUsers,
	HiOutlineDocumentText,
	HiOutlineAnnotation,
	HiOutlineQuestionMarkCircle,
	HiOutlineCog
} from 'react-icons/hi'
import { BiSolidDonateBlood } from "react-icons/bi";
import { FaHospital } from "react-icons/fa";

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/ADashboard',
		icon: <HiOutlineViewGrid />
	},
	{
		key: 'donors',
		label: 'Donors',
		path: '/donors',
		icon: <BiSolidDonateBlood />
	},
	{
		key: 'orders',
		label: 'Hospitals',
		path: '/hospitals',
		icon: <FaHospital />
	},
	{
		key: 'request',
		label: 'Blood Requests',
		path: '/Requests',
		icon: <HiOutlineUsers />
	},
	{
		key: 'donation',
		label: 'Matched Donation',
		path: '/donation',
		icon: <HiOutlineDocumentText />
	},
	{
		key: 'messages',
		label: 'Messages',
		path: '/messages',
		icon: <HiOutlineAnnotation />
	}
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	// {
	// 	key: 'settings',
	// 	label: 'Settings',
	// 	path: '/settings',
	// 	icon: <HiOutlineCog />
	// },
	// {
	// 	key: 'support',
	// 	label: 'Help & Support',
	// 	path: '/support',
	// 	icon: <HiOutlineQuestionMarkCircle />
	// }
]
