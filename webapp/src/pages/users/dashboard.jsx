import React, { useState } from 'react'
import { RiCalendarLine, RiSearch2Line, RiNotification3Line, RiCalendarCheckLine, RiArrowDownSLine, RiMedicineBottleFill, RiCalendarScheduleFill, RiCheckboxCircleFill, RiAlertFill, RiCalendarFill, RiAddFill, RiTimeFill } from '@remixicon/react'
import empty from '../../assets/images/empty-states.png'
import { NavBar, SideBar } from './components/bars'


function Dashboard() {
	const [isEmpty, setIsEmpty] = useState(false);
	const date = new Date();
	// setIsEmpty(false)
	const addHours = (date, hours) => {
		const copy = new Date(date);
		copy.setHours(copy.getHours() + hours)
		return copy;
	}

	const mockDB = [
		{
			name: "Metformin",
			size: "550mg",
			time: addHours(date, -1),
			status: 'completed',
		},
		{
			name: "Metformin",
			size: "550mg",
			time: addHours(date, 4),
			status: 'pending',
		},
		{
			name: "Metformin",
			size: "550mg",
			time: addHours(date, 1),
			status: 'pending',
		},
		{
			name: "Metformin",
			size: "550mg",
			time: addHours(date, 2),
			status: 'pending',
		},
		{
			name: "Metformin",
			size: "550mg",
			time: addHours(date, 1),
			status: 'pending',
		},
		{
			name: "Metformin",
			size: "550mg",
			time: addHours(date, 3),
			status: 'pending',
		},
		{
			name: "Metformin",
			size: "550mg",
			time: addHours(date, 3),
			status: 'pending',
		},
		{
			name: "Metformin",
			size: "550mg",
			time: addHours(date, 2),
			status: 'pending',
		},
		{
			name: "Metformin",
			size: "550mg",
			time: addHours(date, -2),
			status: 'completed',
		},
		{
			name: "Metformin",
			size: "550mg",
			time: addHours(date, -3),
			status: 'missed',
		},
		{
			name: "Metformin",
			size: "550mg",
			time: addHours(date, -2),
			status: 'missed',
		}
	].sort((a, b) => {
		return a.time > b.time ? 1 : -1;
	})


	const totalDaily = mockDB.length;
	const taken = mockDB.filter(item=>item.status === 'completed').length;
	const missed = mockDB.filter(item=>item.status === 'missed').length;
	const active = mockDB.filter(item=>item.status==='pending').length;
	const nextMed = mockDB.filter(item=>item.status==='pending')[0];



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
							<RiMedicineBottleFill color='rgba(51, 92, 255, 1)' className='relative ricon' size={18} />
						</div>
						<div>
							<h3 className='text-md text-gray-500 font-[400]'>Active Medication</h3>
							<p className='text-2xl font-[400]'>{active}</p>
						</div>
					</div>
					<div className='flex items-center w-65 shadow-md rounded-2xl p-3 border-1 border-gray-200'>
						<div className='w-10 h-10 bg-info-pink flex items-center justify-center rounded-full mr-2'>
							<RiCalendarScheduleFill color='rgba(250, 115, 25, 1)' className='relative ricon' size={18} />
						</div>
						<div>
							<h3 className='text-md text-gray-500 font-[400]'>Next Reminder</h3>
							<p className='text-2xl font-[400]'>{nextMed.time.toLocaleTimeString('en-US', {
								hour: 'numeric',
								minute: '2-digit',
								hour12: true
							})}</p>
						</div>
					</div>
					<div className='flex items-center w-65 shadow-md rounded-2xl p-3 border-1 border-gray-200'>
						<div className='w-10 h-10 bg-info-green flex items-center justify-center rounded-full mr-2'>
							<RiCheckboxCircleFill color='rgba(31, 193, 107, 1)' className='relative ricon' size={18} />
						</div>
						<div>
							<h3 className='text-md text-gray-500 font-[400]'>Taken Today</h3>
							<p className='text-2xl font-[400]'>{taken}/{totalDaily}</p>
						</div>
					</div>
					<div className='flex items-center w-65 shadow-md rounded-2xl p-3 border-1 border-gray-200'>
						<div className='w-10 h-10 bg-info-red flex items-center justify-center rounded-full mr-2'>
							<RiAlertFill color='rgba(251, 55, 72, 1)' className='relative ricon' size={18} />
						</div>
						<div>
							<h3 className='text-md text-gray-500 font-[400]'>Missed This Week</h3>
							<p className='text-2xl font-[400]'>{missed}</p>
						</div>
					</div>
				</div>
				<section className='grid grid-cols-[1fr_auto] gap-4 m-5 mt-10'>
					<div className='border-1 border-gray-200 rounded-2xl p-4 h-[400px] relative flex flex-col scrollbar-hide'>
						<div className='flex items-center gap-2 mb-5'>
							<RiCalendarFill size={15} color='rgba(92, 92, 92, 1)' />
							<p className='font-[500] text-lg'>Today Schedule</p>
						</div>
						<div className='w-full h-full relative overflow-auto scrollbar-hide'>
							<table className='w-full table-fixed'>
								<thead className='w-[100%]'>
									<tr className='sticky top-0 bg-[#F7F7F7] z-10'>
										<th className='w-1/4 text-left px-4 py-2 text-gray-300 font-[400]'>Name</th>
										<th className='w-1/4 text-left px-4 py-2 text-gray-300 font-[400]'>Time</th>
										<th className='w-1/4 text-left px-4 py-2 text-gray-300 font-[400]'>Status</th>
										<th className='w-1/4 text-left px-4 py-2 text-gray-300 font-[400]'></th>
									</tr>
								</thead>
								</table>
								<div className="max-h-[300px] overflow-y-auto">
								<table className="w-full table-fixed text-sm font-[500]">
								{isEmpty ?
									<tbody className='absolute top-1/2 left-1/2 -translate-1/2'>
										<tr className='h-[100%] w-[100%]'>
											<td className='h-[100%] w-[100%] flex items-center flex-col justify-center'>
												<img src={empty} alt="" className='mb-5' />
												<p className='text-gray-400 text-sm'>There are no records of schedule yet</p>
												<button className='flex items-center text-oasis-indigo p-2 bg-misc-pink rounded-lg mt-3'>
													<RiAddFill size={15} color='var(--color-oasis-indigo)' className='mr-2' />
													<p>Create Schedule</p>
												</button>
											</td>
										</tr>
									</tbody> :
									<tbody className='text-sm font-[500]'>
										{mockDB.map((item) => (
											<tr>
												<td className='w-1/4 text-left px-4 py-2'><p>{item.name}</p>
												<p className='text-gray-500'>{item.size}</p></td>
												<td className='w-1/4 text-left px-4 py-2 font-[400]'>{item.time.toLocaleTimeString('en-US', {
													hour: 'numeric',
													minute: '2-digit',
													hour12: true,
												})}</td>
												<td className='w-1/4 text-left px-4 py-2'>{
													item.status === 'completed' ?
														<div className='w-fit py-1 px-2 h-fit bg-info-green flex items-center justify-center rounded-full mr-2 text-sm font-[500] font-["Inter",sans-serif] text-[rgba(31,193,107,1)] gap-1'>
															<RiCheckboxCircleFill color='rgba(31, 193, 107, 1)' className='relative ricon' size={12} />
															<p>Completed</p>
														</div> :
														item.status === 'pending' ? <div className='w-fit h-fit py-1 px-2 gap-1 bg-info-blue flex items-center justify-center rounded-full text-sm font-[500] mr-2 text-[rgba(51,92,255,1)]'>
															<RiTimeFill color='rgba(51, 92, 255, 1)' className='relative ricon' size={12} />
															<p>Pending</p>
														</div> :
															<div className='w-fit h-fit py-1 px-2 gap-1 bg-info-red flex items-center justify-center rounded-full text-sm font-[500] mr-2 text-[rgba(251,55,72,1)]'>
																<RiAlertFill color='rgba(251, 55, 72, 1)' className='relative ricon' size={12} />
																<p>Missed</p>
															</div>
												}</td>
												<td className='w-1/4 text-left px-4 py-2'>{
													item.status !== 'missed' ? 
													<button className='border border-gray-300 w-[70%] text-sm p-2 rounded-xl text-gray-700 shadow-md'>{item.status === 'completed' ? "Undo" : "Mark as Taken"}</button>:
													<button className='border border-gray-300 w-[70%] text-sm p-2 rounded-xl text-gray-400' disabled>Undo</button>
													}</td>
											</tr>
										))}
									</tbody>
								}
							</table>
							</div>
						</div>
					</div>
					<SideBar />
				</section>
			</div>
		</div>
	)
}

export default Dashboard