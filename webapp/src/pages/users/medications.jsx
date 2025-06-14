import React, { useEffect, useState, useRef } from 'react'
import { RiAddFill, RiSearch2Line, RiMore2Line, RiPencilFill, RiShutDownLine, RiDeleteBin6Line, RiApps2AddLine, RiNotificationBadgeLine } from '@remixicon/react'
import empty from '../../assets/images/empty-states.png'
import { NavBar, ProgressBar, SideBar, TopBar } from './components/bars'
import { mockDb } from './components/misc';
import { Chevron, DayPicker, getDefaultClassNames } from 'react-day-picker';
import { CustomDayButton } from './components/calendar';
import DatePicker from 'react-date-picker';

function Medications() {
	const [isEmpty, setIsEmpty] = useState(false);
	const [openId, setOpenId] = useState(null);
	const [currentObj, setCurrentObj] = useState([mockDb[0]]);
	const [preview, setPreview] = useState(null);
	const date = new Date();
	const defaultClassNames = getDefaultClassNames();
	// setIsEmpty(false)
	const fileRef = useRef();

	const toggleDropDown = (id) => {
		setOpenId(openId === id ? null : id);
		setCurrentObj(mockDb.filter(item => item.id === id))
	};

	const handleFileChange = (e) => {
		const file = e.target.files[0];

		if (file && file.type.startsWith('image/')){
			const reader = new FileReader();

			reader.onloadend = () => {
				setPreview(reader.result);
			};
			reader.readAsDataURL(file);
		} else {
			setPreview(null);
		}
	};

	const removeImage = (e) => {
		document.getElementById('preview-img').setAttribute('src', '');
	}


	return (
		<div className='grid grid-cols-[auto_1fr] gap-4 relative'>
			<NavBar tab='medications' />
			<div className='flex flex-col w-full h-full'>
				<TopBar tab='Medications' />
				<div className='flex justify-between items-center m-5'>
					<div>
						<h1 className='text-2xl font-[400]'>Welcome Sophie {/* Replace with real user data */}</h1>
						<h2 className='text-sm text-gray-500'>Track your meds, Stay on schedule</h2>
					</div>
				</div>
				<div className='flex items-center justify-between px-5'>
					<div className='flex items-center mt-5 bg-gray-200 rounded-xl justify-between p-1 w-[300px] text-sm font-medium text-gray-400' id="tab">
						<button className='w-1/4 text-center medfilterbtn shadow-sm'>All</button>
						<button className='w-1/4 text-center'>Active</button>
						<button className='w-1/4 text-center'>Inactive</button>
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
					</div>
					:
					<div>
					<div className='grid grid-cols-3 gap-4 mt-5 p-5 w-full h-[400px] overflow-y-auto'>
						{/* map db object list */}
						{mockDb.map(med => (
							<div key={med.id} id={med.id} className='bg-gray-200 text-sm p-5 rounded-2xl'>
								<div className='flex justify-between w-full'>
									<div className='flex justify-between gap-5 items-center'>
										<img src={med.img} alt="" className='w-[30px] h-[30px] rounded-full'/>
										<div>
											<h2 className='text-[12px] font-[500]'>{med.name}</h2>
											<p className='text-gray-400'>{med.size}</p>
										</div>
									</div>
									<div className='flex justify-between items-center gap-5 relative'>
										{med.medicationStatus === 'Active' ?<div className='bg-info-blue rounded-xl py-1 px-2'>
										 <p className='text-[rgba(51,92,255,1)]'>{med.medicationStatus}</p>
										 <div className={`absolute right-0 top-10 p-3 w-[130px] h-[100px] rounded-lg bg-white transition-all duration-200 shadow-md text-lg ${openId === med.id ? 'block' : 'hidden'}`} id={`${med.id}-1`}>
											<div className='flex gap-3 mt-2 text-gray-700'>
												<RiPencilFill size={15}/>
												<p>Edit</p>
											</div>
											<div className='flex gap-3 mt-2 text-gray-700'>
												<RiShutDownLine size={15}/>
												<p>Deactivate</p>
											</div>
											<div className='flex gap-3 mt-2 text-red-500'>
												<RiDeleteBin6Line size={15}/>
												<p>Delete</p>
											</div>
										 </div>
										</div> : <div className='bg-gray-100 rounded-xl py-1 px-2'>
										 <p className='text-gray-500'>{med.medicationStatus}</p>
										</div>}
										<div className='rounded-full bg-white p-1'>
										<RiMore2Line size={12} onClick={()=> toggleDropDown(med.id)}/>
										</div>
									</div>
								</div>
								<div className='flex justify-between items-center w-full mt-5'>
									<div>
										<p className='text-gray-400'>Frequency</p>
										<p>{med.frequency}x {med.interval}</p>
									</div>
									<div>
										<p className='text-right text-gray-400'>Time(s)</p>
										<p>
											{med.time.map(time =>
												time.schedule.toLocaleTimeString('en-US', {
													hour: '2-digit',
													minute: '2-digit',
													hour12: true
												})).join(' | ')
											}
										</p>
									</div>
								</div>
								<div className='flex justify-between items-center w-full mt-5'>
									<div>
										<p className='text-left text-gray-400'>Start Date</p>
										<p>{med.startDate.toLocaleDateString('en-GB', {
											day: '2-digit',
											month: '2-digit',
											year: 'numeric'
										})}</p>
									</div>
									<div>
										<p className='text-right text-gray-400'>End Date</p>
										<p>{med.endDate.toLocaleDateString('en-GB', {
											day: '2-digit',
											month: '2-digit',
											year: 'numeric'
										})}</p>
									</div>
								</div>
								<div className='my-5'>
									<p className='text-gray-400'>Notes</p>
									<p>
										{med.notes.join(', ')}
									</p>
								</div>
							</div>
						))}
					</div>
					</div>
				}
			</div>
			<div className='absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.4)]'>
				<div className='fixed right-1 my-2 md:w-[25%] h-full bg-white w-full'>
					<div className='flex justify-between text-sm text-gray-500 font-[400] border-b p-5 border-b-gray-300 pb-2'>
						<div>
							<h2 className='text-lg text-black'>Edit Medication</h2>
							<p>Manage your medication</p>
						</div>
						<RiMore2Line size={12}/>
					</div>
					<div className='flex text-[12px] text-gray-500 mb-3 gap-1 font-[400]'>
						<div className='flex justify-center gap-1 text-black w-[100%] px-5 items-center h-10 border-b-2 border-b-oasis-indigo shadow-sm'>
							<RiApps2AddLine size={12}/>
							<p>Details</p>
						</div>
						<div className='flex justify-center gap-1 border-b border-b-gray-200 items-center px-5 w-[100%]'>
							<RiNotificationBadgeLine size={12}/>
							<p>Notification Settings</p>
						</div>
					</div>
					<div>
						<form action="">
							<div className='border-b border-gray-300 px-5 mb-3'>
								<p className='mb-3 text-[12px] font-[400]'>Prescription Image<span className='text-gray-500 text-sm'>{'(Optional)'}</span></p>
								<div className='flex gap-5 items-center mb-2'>
								<img src={preview || currentObj[0].img} alt="" className='w-[50px] h-[50px] rounded-full' id='preview-img'/>
								<input type="file" ref={fileRef} accept='image/png, image/jpeg, image/webp, image/jpg, image/ico' name="med-img" id="med-img" className='hidden' onChange={handleFileChange}/>
								<button className='border border-red-500 text-red-500 px-2 py-1 h-10 rounded-md hover:shadow-md' type='button' onClick={removeImage}>Remove</button>
								<button type='button' className='border border-gray-300 text-gray-400 h-10 px-2 py-1 rounded-md hover:shadow-md' onClick={()=>fileRef.current.click()}>Change</button>
								</div>
							</div>
							<div className='px-5'>
								<p className='px-2 mb-1 text-[12px] font-[400]'>Name *</p>
								<input type="text" name="name" id="name" placeholder='Medication Name' className='w-full border p-3 border-gray-300 rounded-lg outline-0 mb-3'/>
							</div>
							<div className='px-5'>
								<p className='px-2 mb-1 text-[12px] font-[400]'>Dosage *</p>
								<input type="text" name="name" id="name" placeholder='500mg' className='w-full border p-3 border-gray-300 rounded-lg outline-0 mb-3'/>
							</div>
							<div className='px-5'>
								<p className='px-2 mb-1 text-[12px] font-[400]'>Frequency *</p>
								<select name="frequency" id="frequency" className='w-full border p-3 border-gray-300 rounded-lg mb-3 outline-0'>
									<option value="custom">Custom</option>
									<option value="1">Once a Day</option>
									<option value="2">Twice a Day</option>
									<option value="3">Three Times a Day</option>
								</select>
							</div>
							<div className='mb-3 px-5'>
								<p className='px-2 mb-1 text-[12px] font-[400]'>Reminder Time *</p>
								<div id='time-slots'>
								</div>
								<div className='flex items-center justify-center w-full text-oasis-indigo gap-1 text-sm'>
									<RiAddFill size={15}/>
									<p>Add Time Slot</p>
								</div>
							</div>
							<div className='flex justify-between items-center mb-3 px-5'>
								<div className='relative'>
									<p className='mb-1 text-[12px] px-2 font-[400]'>Start Date *</p>
									<input type="date" name="startDate" id="startDate" placeholder='MM / DD / YYYY'/>
								</div>
								<div>
									<p className='mb-1 text-[12px] font-[400]'>End Date<span>(Optional)</span></p>
									<input type="date" name="enddate" id="enddate" placeholder='MM / DD / YYYY'/>
								</div>
							</div>
							<div className='px-5 border-b border-gray-300 mb-5'>
								<p className='mb-3 text-[12px] font-[400]'>Notes<span>(Optional)</span></p>
								<textarea name="notes" id="notes" placeholder='Separated by comma' className='h-[50px] rounded-lg outline-0 p-2 w-full border border-gray-300 resize-none'></textarea>
							</div>
							<div className='flex gap-2 px-5'>
							<button  type='button' className='w-[100%] px-2 bg-white border text-gray-500 border-gray-300 rounded-lg py-1'>Cancel</button>
							<button type='button' className='w-[100%] px-2 bg-oasis-indigo py-1 rounded-lg text-white'>Save Changes</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Medications