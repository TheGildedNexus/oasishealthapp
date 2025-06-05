import React, { useState } from 'react'
import { RiCalendarLine, RiSearch2Line, RiNotification3Line, RiCalendarCheckLine, RiArrowDownSLine, RiMedicineBottleFill, RiCalendarScheduleFill, RiCheckboxCircleFill, RiAlertFill, RiCalendarFill, RiAddFill } from '@remixicon/react'
import empty from '../../assets/images/empty-states.png'
import { NavBar, SideBar } from './components/bars'


function Dashboard() {
	const [isEmpty, setIsEmpty] = useState(true);

	return (
		<div className='grid grid-cols-[auto_1fr] gap-4'>
			<NavBar />
			<div className=''>
				<div className='flex justify-between items-center m-5 border-b-1 border-gray-300 pb-5'>
					<h1 className='text-3xl'>Dashboard</h1>
					<div className='flex items-center justify-evenly w-70 '>
						<RiSearch2Line size={15} />
						<RiNotification3Line size={15} />
						<div className='flex items-center justify-evenly cursor-pointer w-45 border-1 border-gray-200 p-2 rounded-xl'>
							<RiCalendarCheckLine size={15} />
							<h3 className='text-sm font-[400]'>Quick Actions</h3>
							<RiArrowDownSLine size={15} />
						</div>
					</div>
				</div>
				<div className='flex justify-between items-center m-5'>
					<div>
						<h1 className='text-2xl font-[400]'>Good Evening, Sophie✨ {/* Replace with real user data */}</h1>
						<h2 className='text-sm text-gray-500'>Here's your medication overview for today</h2>
					</div>
					<div className='flex justify-evenly items-center w-45 p-2 h-10 text-sm rounded-xl text-white bg-oasis-indigo'>
						<RiCalendarLine size={15} />
						<p>See All Schedule</p>
					</div>
				</div>
				<div className='flex justify-between items-center m-5 mt-10'>
					<div className='flex items-center w-65 shadow-md rounded-2xl p-3 border-1 border-gray-200'>
						<div className='w-10 h-10 bg-info-blue flex items-center justify-center rounded-full mr-2'>
							<RiMedicineBottleFill color='rgba(51, 92, 255, 1)' className='relative ricon' size={18}/>
						</div>
						<div>
							<h3 className='text-md text-gray-500 font-[400]'>Active Medication</h3>
							<p className='text-2xl font-[400]'>0</p>
						</div>
					</div>
					<div className='flex items-center w-65 shadow-md rounded-2xl p-3 border-1 border-gray-200'>
						<div className='w-10 h-10 bg-info-pink flex items-center justify-center rounded-full mr-2'>
							<RiCalendarScheduleFill color='rgba(250, 115, 25, 1)' className='relative ricon' size={18}/>
						</div>
						<div>
							<h3 className='text-md text-gray-500 font-[400]'>Next Reminder</h3>
							<p className='text-2xl font-[400]'>0:00</p>
						</div>
					</div>
					<div className='flex items-center w-65 shadow-md rounded-2xl p-3 border-1 border-gray-200'>
						<div className='w-10 h-10 bg-info-green flex items-center justify-center rounded-full mr-2'>
							<RiCheckboxCircleFill color='rgba(31, 193, 107, 1)' className='relative ricon' size={18}/>
						</div>
						<div>
							<h3 className='text-md text-gray-500 font-[400]'>Taken Today</h3>
							<p className='text-2xl font-[400]'>0/0</p>
						</div>
					</div>
					<div className='flex items-center w-65 shadow-md rounded-2xl p-3 border-1 border-gray-200'>
						<div className='w-10 h-10 bg-info-red flex items-center justify-center rounded-full mr-2'>
							<RiAlertFill color='rgba(251, 55, 72, 1)' className='relative ricon' size={18}/>
						</div>
						<div>
							<h3 className='text-md text-gray-500 font-[400]'>Missed This Week</h3>
							<p className='text-2xl font-[400]'>0</p>
						</div>
					</div>
				</div>
				<section className='grid grid-cols-[1fr_auto] gap-4 m-5 mt-10'>
					<div className='border-1 border-gray-200 rounded-2xl p-4 min-h-[400px] overflow-auto relative flex flex-col'>
						<div className='flex items-center gap-2 mb-5'>
						<RiCalendarFill size={15} color='rgba(92, 92, 92, 1)'/>
						<p className='font-[500] text-lg'>Today Schedule</p>
						</div>
						<div>
							<table className='w-[100%]'>
							<thead className='w-[100%]'>
							<tr className='flex items-center w-[100%] justify-evenly bg-[#F7F7F7] p-3 rounded-xl'>
								<th className='w-[100%] text-left text-gray-300 font-[400]'>Name</th>
								<th className='w-[100%] text-left text-gray-300 font-[400]'>Time</th>
								<th className='w-[100%] text-left text-gray-300 font-[400]'>Status</th>
							</tr>
							</thead>
							</table>
						</div>
						<div className='relative w-[100%] h-[100%]'>
						{isEmpty ? <div className='absolute top-1/2 left-1/2 -translate-1/2 flex items-center flex-col justify-center'>
							<img src={empty} alt="" className='mb-5'/>
							<p className='text-gray-400 text-sm'>There are no records of schedule yet</p>
							<button className='flex items-center text-oasis-indigo p-2 bg-misc-pink rounded-lg mt-3'>
								<RiAddFill size={15} color='var(--color-oasis-indigo)' className='mr-2'/>
								<p>Create Schedule</p>
							</button>
						</div> : <div></div>}
						</div>
					</div>
					<SideBar />
				</section>
			</div>
		</div>
	)
}

export default Dashboard