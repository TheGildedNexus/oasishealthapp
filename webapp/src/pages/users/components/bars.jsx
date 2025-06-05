import React, { useEffect, useRef, useState } from 'react'
import { RiHome4Line, RiMedicineBottleLine, RiCalendarLine, RiBankCardLine, RiSettings2Line, RiCustomerServiceLine, RiArrowRightSLine, RiVerifiedBadgeFill, RiInformation2Fill } from '@remixicon/react'

import whatsapp from '../../../assets/images/whatsapp.png'
import docnurse from '../../../assets/images/docnurse.png'
import logo from '../../../assets/images/logo-transparent.png'
import linepath from '../../../assets/icons/line-path.png'
import avatar from '../../../assets/images/Avatar.png'


export function SideBar() {
	return (

		<div className='w-[447px] flex flex-col gap-3'>
			<div className='bg-info-yellow flex flex-col gap-3 relative p-5'>
				<h2 className='text-2xl font-[500]'>Need Medical Advice?</h2>
				<p className='text-sm/[20px] tracking-[0.25%] max-w-[351px] text-gray-500 font-[400]'>Chat with licensed doctors anytime you're unsure about a does, side effects, or next steps.</p>
				<button className='flex items-center p-2 bg-oasis-indigo rounded-lg w-[45%] justify-center'>
					<p className='text-oasis-white text-sm'>Connect with a Doctor Now</p>
					<RiArrowRightSLine size={20} color='var(--color-oasis-white)' className='ml-3' />
				</button>
				<img src={docnurse} alt="" width={94} className='absolute bottom-0 right-2' />
			</div>
			<div className='relative p-5 bg-misc-white'>
				<div className='flex items-center gap-2 border-b border-b-gray-300 pb-5 pt-5 mb-5'>
					<RiInformation2Fill size={20} color='rgba(92, 92, 92, 1)' />
					<h3 className='text-gray-600 font-[500] text-lg'>Don't Miss Out on any Schedule</h3>
				</div>
				<div className='flex flex-col gap-3'>
					<p className='text-sm text-gray-700 font-[600]'>Get Notified on Whatsapp</p>
					<p className='text-gray-400 text-sm'>Upgrade to Premium for WhatsApp notifications</p>
					<button className='flex items-center p-2 pl-5 pr-5 bg-oasis-indigo rounded-lg w-fit justify-center'>
						<p className='text-oasis-white text-sm'>Upgrade Now</p>
						<RiArrowRightSLine size={20} color='var(--color-oasis-white)' className='ml-3' />
					</button>
				</div>
				<img src={whatsapp} alt="" width={136} className='absolute bottom-0 right-2' />
			</div>
		</div>
	)
}

export function NavBar() {
	const [activeTab, setActiveTab] = useState('dashboard');
	const [fetchingTab, setFetchingTab] = useState(null);
	const fetchedTabs = useRef(new Set());

	const changeActiveTab = async (e) => {
		const tabId = e.target.id;

		if (activeTab === tabId || fetchingTab === tabId) return; // same tab or already fetching

		setFetchingTab(tabId);

		if (!fetchedTabs.current.has(tabId)) {
			// Simulate fetch delay
			// await new Promise((resolve) => setTimeout(resolve, 2000));
			// If using real fetch:
			// const res = await fetch(`/api/${tabId}`);
			// await res.json();

			fetchedTabs.current.add(tabId);
		}
		
    setActiveTab(tabId);
    setFetchingTab(null);
	};
	// Mock fetch test
	// window.fetch = async () => {
	// 	await new Promise((resolve) => setTimeout(resolve, 2000)); // simulate 2 sec delay
	// 	return {
	// 		ok: true,
	// 		json: async () => ({ done: true }),
	// 	};
	// };


	useEffect(() => {
		 const tabs = document.querySelectorAll('.tab');
    tabs.forEach((tab) => tab.classList.remove('active'));

    if (activeTab) {
      const currentTab = document.getElementById(activeTab);
      currentTab?.classList.add('active');
    }
	}, [activeTab])

	return (
		<div className='bg-oasis-indigo w-80 h-[100vh] flex flex-col overflow-hidden sticky'>
			<img src={linepath} alt="" className='fixed top-[-5px] h-[100vh] left-[-2px] w-80 z-99 pointer-events-none' />
			<div className='m-5 mt-10 pb-10 flex border-b-1 border-gray-500'>
				<img src={logo} alt="" />
				<div className='ml-3'>
					<h2 className='text-oasis-pink text-2xl font-[400]'>Oasis</h2>
					<p className='text-oasis-white'>Your Health Reminder</p>
				</div>
			</div>
			<div className='h-[100%]'>
				<div className='relative flex items-center h-[40px]'>
					<div className='w-70 flex ml-5 h-[100%] items-center p-3 rounded-2xl tab active' id='dashboard' onClick={changeActiveTab}>
						<RiHome4Line size={18} className='fill-oasis-yellow icon pointer-events-none' />
						<h3 className='ml-3 text-oasis-yellow text-lg/[20px] tracking-[0.25%] font-["Inter"] pointer-events-none'>Dashboard</h3>
					</div>
				</div>
				<div className='relative flex items-center h-[40px]'>
					<div className='w-70 flex ml-5 h-[100%] items-center p-3 rounded-2xl tab' id='medications' onClick={changeActiveTab}>
						<RiMedicineBottleLine size={18} className='fill-oasis-yellow icon pointer-events-none' />
						<h3 className='ml-3 text-oasis-yellow text-lg/[20px] tracking-[0.25%] font-["Inter"] pointer-events-none'>Medications</h3>
					</div>
				</div>
				<div className='relative flex items-center h-[40px]'>
					<div className='w-70 flex ml-5 h-[100%] items-center p-3 rounded-2xl tab' id='schedule' onClick={changeActiveTab}>
						<RiCalendarLine size={18} className='fill-oasis-yellow icon pointer-events-none' />
						<h3 className='ml-3 text-oasis-yellow text-lg/[20px] tracking-[0.25%] font-["Inter"] pointer-events-none'>Schedule</h3>
					</div>
				</div>
				<div className='relative flex items-center h-[40px]'>
					<div className='w-70 flex ml-5 h-[100%] items-center p-3 rounded-2xl tab' id='subscriptions' onClick={changeActiveTab}>
						<RiBankCardLine size={18} className='fill-oasis-yellow icon pointer-events-none' />
						<h3 className='ml-3 text-oasis-yellow text-lg/[20px] tracking-[0.25%] font-["Inter"] pointer-events-none'>Subscriptions</h3>
					</div>
				</div>
			</div>
			<footer className=''>
				<div>
					<div className='w-70 flex ml-5 h-[100%] items-center p-3 rounded-2xl'>
						<RiSettings2Line size={18} className='fill-oasis-yellow' />
						<h3 className='ml-3 text-oasis-yellow text-lg/[20px] tracking-[0.25%] font-["Inter"]'>Settings</h3>
					</div>
					<div className='w-70 flex ml-5 h-[100%] items-center p-3 rounded-2xl'>
						<RiCustomerServiceLine size={18} className='fill-oasis-yellow' />
						<h3 className='ml-3 text-oasis-yellow text-lg/[20px] tracking-[0.25%] font-["Inter"]'>Support</h3>
					</div>
				</div>
				<div className='flex justify-center items-center border-t-1 border-gray-500 mb-10 pt-10 m-5'>
					<div>
						<img src={avatar} alt="" width={50} />
					</div>
					<div className='ml-3'>
						<div className='flex items-center text-oasis-pink text-xl'>
							Sophia Williams
							<RiVerifiedBadgeFill size={14} color='rgba(71, 194, 255, 1)' className='ml-1' />
						</div>
						<div className='text-oasis-white text-sm'>sophiawilliams@gmail.com</div>
					</div>
					<RiArrowRightSLine size={30} className='fill-oasis-yellow ml-2' />
				</div>
			</footer>
		</div>
	)
}