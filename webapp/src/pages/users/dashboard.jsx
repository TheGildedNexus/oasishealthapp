import React from 'react'
import { RiHome4Line, RiMedicineBottleLine, RiCalendarLine, RiBankCardLine, RiSettings2Line, RiCustomerServiceLine, RiArrowRightSLine, RiVerifiedBadgeFill } from '@remixicon/react'
import linepath from '../../assets/icons/line-path.png'
import logo from '../../assets/images/logo-transparent.png'


function Dashboard() {
	return (
		<div className='grid grid-cols-[auto_1fr] gap-4'>
			<div className='bg-oasis-indigo w-80 h-[100vh] flex flex-col overflow-hidden'>
				<img src={linepath} alt="" className='fixed top-[-100px] left-[-20px]' />
				<div className='m-5 mt-10 pb-10 flex border-b-1 border-gray-500'>
					<img src={logo} alt="" />
					<div className='ml-3'>
						<h2 className='text-oasis-pink text-2xl font-[400]'>Oasis</h2>
						<p className='text-oasis-white'>Your Health Reminder</p>
					</div>
				</div>
				<div className='h-[100%]'>
					<div className='relative flex items-center h-[40px] mt-5'>
						<div className='w-60 flex ml-5 h-[100%] items-center p-3 rounded-2xl active'>
							<RiHome4Line size={18} className='fill-oasis-yellow icon' />
							<h3 className='ml-3 text-oasis-yellow text-lg/[20px] tracking-[0.25%'>Dashboard</h3>
						</div>
					</div>
					<div className='relative flex items-center h-[40px] mt-5'>
						<div className='w-60 flex ml-5 h-[100%] items-center p-3 rounded-2xl'>
							<RiMedicineBottleLine size={18} className='fill-oasis-yellow icon' />
							<h3 className='ml-3 text-oasis-yellow text-lg/[20px] tracking-[0.25%'>Medications</h3>
						</div>
					</div>
					<div className='relative flex items-center h-[40px] mt-5'>
						<div className='w-60 flex ml-5 h-[100%] items-center p-3 rounded-2xl'>
							<RiCalendarLine size={18} className='fill-oasis-yellow icon' />
							<h3 className='ml-3 text-oasis-yellow text-lg/[20px] tracking-[0.25%'>Schedule</h3>
						</div>
					</div>
					<div className='relative flex items-center h-[40px] mt-5'>
						<div className='w-60 flex ml-5 h-[100%] items-center p-3 rounded-2xl'>
							<RiBankCardLine size={18} className='fill-oasis-yellow icon' />
							<h3 className='ml-3 text-oasis-yellow text-lg/[20px] tracking-[0.25%'>Subscriptions</h3>
						</div>
					</div>
				</div>
				<footer className=''>
					<div>
						<div className='w-60 flex ml-5 h-[100%] items-center p-3 rounded-2xl'>
							<RiSettings2Line size={18} className='fill-oasis-yellow' />
							<h3 className='ml-3 text-oasis-yellow text-lg/[20px] tracking-[0.25%'>Settings</h3>
						</div>
						<div className='w-60 flex ml-5 h-[100%] items-center p-3 rounded-2xl'>
							<RiCustomerServiceLine size={18} className='fill-oasis-yellow' />
							<h3 className='ml-3 text-oasis-yellow text-lg/[20px] tracking-[0.25%'>Support</h3>
						</div>
					</div>
					<div>
						<div>
							{/* <img src={avatar} alt="" /> */}
						</div>
						<div>
							<div>
								Sophia Williams
								<RiVerifiedBadgeFill />
							</div>
							<div>sophiawilliams@gmail.com</div>
						</div>
						<RiArrowRightSLine size={18} className='fill-oasis-yellow' />
					</div>
				</footer>
			</div>
			<div className=''>
				<div>header</div>
				<div>intro</div>
				<div>infoboard</div>
				<div>
					<div>schedule</div>
					<div>advert</div>
				</div>
			</div>
		</div>
	)
}

export default Dashboard