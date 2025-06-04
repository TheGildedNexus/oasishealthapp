import React from 'react'
import { RiHome4Line, RiMedicineBottleLine, RiCalendarLine, RiBankCardLine, RiSettings2Line, RiCustomerServiceLine, RiArrowRightSLine } from '@remixicon/react'
import linepath from '../../assets/icons/line-path.png'
import logo from '../../assets/images/logo-transparent.png'


function Dashboard() {
	return (
		<div className='grid grid-cols-[auto_1fr] gap-4'>
			<div className='bg-oasis-indigo w-70 h-[100vh] overflow-hidden'>
				<img src={linepath} alt="" className='fixed top-[-100px] left-[-20px]'/>
				<div className='m-5 mt-10 pb-10 flex border-b-1 border-gray-500'>
					<img src={logo} alt="" />
					<div className='ml-3'>
						<h2 className='text-oasis-pink text-2xl font-[400]'>Oasis</h2>
						<p className='text-oasis-white'>Your Health Reminder</p>
					</div>
				</div>
				<div className='relative'>
				<div className='w-60 flex ml-5 h-[100%] items-center mt-5 p-3 rounded-2xl active'>
					<RiHome4Line size={18} className='fill-oasis-yellow icon' />
					<h3 className='ml-3 text-oasis-yellow text-lg/[20px] tracking-[0.25%'>Dashboard</h3>
				</div>
				</div>
				<div className='relative'>
				<div className='w-[100%] flex items-center mt-5 pl-10'>
					<RiMedicineBottleLine size={18} className='fill-oasis-yellow icon' />
					<h3 className='ml-3 text-oasis-yellow text-lg/[20px] tracking-[0.25%'>Medications</h3>
				</div>
				</div>
				<div className='relative'>
				<div className='w-[100%] flex items-center mt-5 pl-10'>
					<RiCalendarLine size={18} className='fill-oasis-yellow icon' />
					<h3 className='ml-3 text-oasis-yellow text-lg/[20px] tracking-[0.25%'>Schedule</h3>
				</div>
				</div>
				<div className='relative'>
				<div className='w-[100%] flex items-center mt-5 pl-10'>
					<RiBankCardLine size={18} className='fill-oasis-yellow icon' />
					<h3 className='ml-3 text-oasis-yellow text-lg/[20px] tracking-[0.25%'>Subscriptions</h3>
				</div>
				</div>
				<footer>
					<div>
						<div>
							<RiSettings2Line size={18} className='fill-oasis-yellow'/>
						</div>
						<div>
							<RiCustomerServiceLine size={18} className='fill-oasis-yellow' />
						</div>
					</div>
					<div>
						<div></div>
						<div>
							<div></div>
							<div></div>
						</div>
						<RiArrowRightSLine size={18} className='fill-oasis-yellow'/>
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