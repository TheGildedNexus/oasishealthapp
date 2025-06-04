import React from 'react'
import lock from '../assets/icons/door-lock.png'
import info from '../assets/icons/information-fill.png'
import mail from '../assets/icons/mail-line.png'
import SignUpSlider from '../components/SignUpSlider'
import Navbar from './Navbar'

function ResetPassword() {
	return (
		<div className='md:grid md:grid-cols-2'>
			<SignUpSlider />
			<div>
				<Navbar mode='signup' />
				<div className='lg:pl-30 lg:pr-30 sm:pr-20 sm:pl-20 pr-10 pl-10 ml-auto mr-auto mb-0 mt-20 md:mt-5 overflow-hidden'>
					<div className='rounded-full bg-fuchsia-100 w-30 h-30 flex justify-center items-center mb-0 mt-0 ml-auto mr-auto'>
						<div className='rounded-full bg-white w-20 h-20 flex justify-center items-center'>
							<img src={lock} alt="reset password icon" />
						</div>
					</div>
					<div className='ml-auto mr-auto flex items-center flex-col mt-5 text-center'>
						<h1 className='text-3xl'>Reset Password</h1>
						<h2 className='text-xl text-gray-600 mt-1'>Enter your email to reset your password.</h2>
					</div>
					<div className='mt-10 flex items-center justify-center'>
						<span className='border-b-2 rounded-full border-gray-200 w-[100%]'></span>
					</div>
					<div>
						<form action="">
							<div className='border-[2px] rounded-2xl border-gray-200 flex overflow-auto h-12 pr-3 pl-3 items-center mt-20 mb-2'>
								<label htmlFor="email" className="text-xl">Email Address*</label>
								<img src={mail} alt="email" />
								<input type="email" name="" id="email" placeholder='hello@oasis.com' className='w-[100%] h-[100%] pr-3 pl-3 text-lg input' required />
							</div>
							<div className='flex text-[12px] text-gray-500 mt-2 mb-10 pr-3 pl-3 items-center-safe'>
								<img src={info} alt="info" className='mr-1 w-[15px] h-[15px]' />
								<p>Enter the email with which you've registered.</p>
							</div>
							<input type="submit" value="Reset Password" className='w-[100%] text-oasis-white text-2xl p-3 btn input mb-20 md:mb-5' id='reset' />
						</form>
					</div>
					<footer className='md:hidden flex justify-center bottom-0 p-5 fixed w-[90%] mt-10 text-lg text-gray-500'>&copy; 2025 Oasis</footer>
				</div>
			</div>
		</div>
	)
}

export default ResetPassword