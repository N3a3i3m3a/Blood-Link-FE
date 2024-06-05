import {
	HiOutlineViewGrid,
	HiOutlineUsers,
	// HiOutlineDocumentText,
	// HiOutlineAnnotation,
	HiOutlineQuestionMarkCircle,
	HiOutlineCog
} from 'react-icons/hi'
import { BiSolidDonateBlood } from "react-icons/bi";
import { FaHospital } from "react-icons/fa";

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/HDashboard',
		icon: <HiOutlineViewGrid />
	},
	{
		key: 'blood-request',
		label: 'Blood Request',
		path: '/bloodrequest',
		icon: <BiSolidDonateBlood />
	},
	
	// {
	// 	key: 'requests',
	// 	label: 'Requests',
	// 	path: '/requestss',
	// 	icon: <HiOutlineUsers />
	// },
	// {
	// 	key: 'messages',
	// 	label: 'Messages',
	// 	path: '/Hmessages',
	// 	icon: <HiOutlineAnnotation />
	// }
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	{
		key: 'settings',
		label: 'Settings',
		path: '/settings',
		icon: <HiOutlineCog />
	},
	{
		key: 'support',
		label: 'Help & Support',
		path: '/support',
		icon: <HiOutlineQuestionMarkCircle />
	}
]
