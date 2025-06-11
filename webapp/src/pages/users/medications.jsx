import React, { useState } from 'react'
import { RiCalendarLine, RiMedicineBottleFill, RiCalendarScheduleFill, RiCheckboxCircleFill, RiAlertFill, RiCalendarFill, RiAddFill, RiTimeFill, RiProgress2Fill, RiSearch2Line } from '@remixicon/react'
import empty from '../../assets/images/empty-states.png'
import { NavBar, ProgressBar, SideBar, TopBar } from './components/bars'
import { mockDb } from './components/misc';



function Medications() {
	const [isEmpty, setIsEmpty] = useState(true);
	const date = new Date();
	// setIsEmpty(false)

	return (
		<div className='grid grid-cols-[auto_1fr] gap-4'>
			<NavBar />
			<div className='flex flex-col'>
				<TopBar tab='Medications' />
				<div className='flex justify-between items-center m-5'>
					<div>
						<h1 className='text-2xl font-[400]'>Welcome Sophie {/* Replace with real user data */}</h1>
						<h2 className='text-sm text-gray-500'>Track your meds, Stay on schedule</h2>
					</div>
				</div>
				<div className='flex items-center justify-between px-5'>
					<div className='flex items-center mt-5 bg-gray-200 rounded-xl justify-between p-2 w-[300px] text-sm text-gray-400' id="tab">
						<button className='w-1/4 text-center medfilterbtn shadow-sm'>All</button>
						<button className='w-1/4 text-center'>Active</button>
						<button className='w-1/4 text-center'>Completed</button>
					</div>
					<div className='flex items-center gap-3'>
						<div className='flex w-fit px-3 py-2 border border-gray-300 rounded-lg items-center'>
							<RiSearch2Line size={11} className='text-gray-500 mr-1' />
							<input type="text" placeholder='Search...' className='text-sm outline-0 h-[100%]' />
						</div>
						<div className='flex justify-evenly items-center w-40 p-2 text-sm rounded-lg text-white bg-oasis-indigo'>
							<RiAddFill size={15} />
							<p>Add Medication</p>
						</div>
					</div>
				</div>
				{isEmpty ?
					<div className='w-full h-full flex items-center flex-col justify-center'>
								<img src={empty} alt="" className='mb-5' />
								<p className='text-gray-400 text-sm'>There are no records of medication yet</p>
								<button className='flex items-center text-oasis-indigo p-2 bg-misc-pink rounded-lg mt-3'>
									<RiAddFill size={15} color='var(--color-oasis-indigo)' className='mr-2' />
									<p>Add Medication</p>
								</button>
					</div> : <div></div>}
			</div>
		</div>
	)
}

export default Medications