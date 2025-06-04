import React from 'react'
import SignUpSlider from '../components/SignUpSlider'
import Navbar from './Navbar'
import user from '../assets/icons/user.png'
import lock from '../assets/icons/lock-2-line.png'
import eye from '../assets/icons/eye-line.png'
import mail from '../assets/icons/mail-line.png'
import apple from '../assets/icons/Vector.png'
import fb from '../assets/icons/Facebook.png'
import google from '../assets/icons/google.png'

function SignIn() {

	const showPassword = () => {
		let element = document.getElementById('password');
		if (element.type === 'password') {
			element.type = 'text';
		} else {
			element.type = 'password';
		}
	};

	return (
		<div className='md:grid md:grid-cols-2'>
			<SignUpSlider />
			<div>
				<Navbar mode='signin' />
				<div className='lg:pr-50 lg:pl-50 md:pl-30 md:pr-30 sm:pr-20 sm:pl-20 pr-10 pl-10 ml-auto mr-auto mb-0 mt-20 md:mt-5 overflow-hidden'>
					<div className='rounded-full bg-fuchsia-100 w-30 h-30 flex justify-center items-center mb-0 mt-0 ml-auto mr-auto'>
						<div className='rounded-full bg-white w-20 h-20 flex justify-center items-center'>
							<img src={user} alt="signin icon" />
						</div>
					</div>
					<div className='ml-auto mr-auto flex items-center flex-col'>
						<h1 className='text-4xl'>Login to your account</h1>
						<h2 className='text-2xl text-gray-600 mt-1'>Enter your details to login</h2>
					</div>
					<div className='ml-auto mr-auto grid grid-cols-3 gap-4 mt-15'>
						<div className='border-[2px] rounded-2xl border-gray-200 w-[100%] flex justify-center items-center pt-2 pb-2'>
							<img src={apple} width={15} alt="apple sign in" />
						</div>
						<div className='border-[2px] rounded-2xl border-gray-200 w-[100%] flex justify-center items-center pt-2 pb-2'>
							<img src={fb} width={15} alt="facebook sign in" />
						</div>
						<div className='border-[2px] rounded-2xl border-gray-200 w-[100%] flex justify-center items-center pt-2 pb-2'>
							<img src={google} alt="google sign in" width={20} />
						</div>
					</div>
					<div className='mt-10 flex items-center justify-center'>
						<span className='border-b-2 rounded-full border-gray-200 w-[100%]'></span>
						<p className='ml-10 mr-10 text-gray-400'>OR</p>
						<span className='border-b-2 rounded-full border-gray-200 w-[100%]'></span>
					</div>
					<div>
						<form action="">
							<div className='border-[2px] rounded-2xl border-gray-200 flex overflow-auto h-12 pr-3 pl-3 items-center mt-10 mb-10'>
								<label htmlFor="email" className="text-[1rem]">Email Address*</label>
								<img src={mail} alt="email" />
								<input type="email" name="" id="email" placeholder='james@oasis.com' className='w-[100%] h-[100%] pr-3 pl-3 text-lg input' required />
							</div>
							<div className='border-[2px] rounded-2xl border-gray-200 flex overflow-auto h-12 pr-3 pl-3 items-center mt-5'>
								<label htmlFor="password" className="text-[1rem]">Password*</label>
								<img src={lock} alt="password" />
								<input type="password" name="" id="password" className='w-[100%] h-[100%] pr-3 pl-3 tracking-widest input' placeholder='••••••••' required />
								<img src={eye} alt="show-password" className='justify-self-end' onClick={showPassword} />
							</div>
							<div className='flex items-center justify-between mt-5'>
								<div className="flex justify-between items-center">
									<input id="default-checkbox" type="checkbox" value="remember" className="border-gray-300 shadow-md outline-0 rounded-md" />
									<p htmlFor="default-checkbox" className="text-md text-oasis-indigo font-medium ml-2">Keep me logged in</p>
								</div>
								<p className='text-oasis-indigo font-medium'>Forgot password?</p>
							</div>
							<input type="submit" value="Log In" className='w-[100%] bg-oasis-indigo text-oasis-white text-2xl p-3 btn input mb-20 md:mb-5 mt-10' />
						</form>
					</div>
					<footer className='md:hidden flex justify-center bottom-0 p-5 mt-10 text-lg text-gray-500'>&copy; 2025 Oasis</footer>
				</div>
			</div>
		</div>
	)
}

export default SignIn