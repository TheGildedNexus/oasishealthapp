import React, { useEffect, useState } from 'react'
import userPlus from '../assets/icons/user-add-line.png'
import info from '../assets/icons/information-fill.png'
import userIcon from '../assets/icons/user-6-line.png'
import lock from '../assets/icons/lock-2-line.png'
import eye from '../assets/icons/eye-line.png'
import mail from '../assets/icons/mail-line.png'
import apple from '../assets/icons/Vector.png'
import google from '../assets/icons/google.png'
import check from '../assets/icons/select-box-circle-fill.png'
import Navbar from './Navbar'
import SignUpSlider from '../components/SignUpSlider'

function SignUp() {
	const [password, setPassword] = useState('');
	const [hasUpperCase, setHasUpperCase] = useState(false);
	const [hasLowerCase, setHasLowerCase] = useState(false);
	const [hasNumber, setHasNumber] = useState(false);
	const [isMedium, setIsMedium] = useState(false);
	const [isStrong, setIsStrong] = useState(false);
	const [characterCount, setCharacterCount] = useState(0);
	const [isTyping, setIsTyping] = useState(false);

	const showPassword = () => {
		let element = document.getElementById('password');
		if (element.type === 'password') {
			element.type = 'text';
		} else {
			element.type = 'password';
		}
	};

	const startTyping = () => {
		setIsTyping(true);
	}

	const stopTyping = () => {
		characterCount < 1 && setIsTyping(false);
	}

	const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
	const strongRegex = /^(?=.*[\W_]).{8,}$/;

	const validatePassword = () => {
		const matchUpper = /[A-Z]/;
		const matchLower = /[a-z]/;
		const matchNumber = /[0-9]/;
		if (matchUpper.test(password))
			setHasUpperCase(true);
		else setHasUpperCase(false);
		if (matchLower.test(password))
			setHasLowerCase(true);
		else setHasLowerCase(false);
		if (matchNumber.test(password))
			setHasNumber(true);
		else setHasNumber(false);
		setCharacterCount(password.length);
	}

	useEffect(() => {
		validatePassword();
		if (passwordRegex.test(password))
			setIsMedium(true);
		else setIsMedium(false);
		if (strongRegex.test(password))
			setIsStrong(true);
		else setIsStrong(false);
	}, [password]);

	return (
		<div className='md:grid md:grid-cols-2'>
			<SignUpSlider />
			<div>
				<Navbar/>
		<div className='lg:pr-50 lg:pl-50 md:pl-30 md:pr-30 sm:pr-20 sm:pl-20 pr-10 pl-10 ml-auto mr-auto mb-0 mt-20 md:mt-5 overflow-hidden'>
			<div className='rounded-full bg-fuchsia-100 w-30 h-30 flex justify-center items-center mb-0 mt-0 ml-auto mr-auto'>
				<div className='rounded-full bg-white w-20 h-20 flex justify-center items-center'>
					<img src={userPlus} alt="signup icon" />
				</div>
			</div>
			<div className='ml-auto mr-auto flex items-center flex-col'>
				<h1 className='text-4xl'>Create a new account</h1>
				<h2 className='text-2xl text-gray-600 mt-1'>Enter your details to register</h2>
			</div>
			<div className='ml-auto mr-auto grid grid-cols-2 gap-4 mt-15'>
				<div className='border-[2px] rounded-2xl border-gray-200 w-[100%] flex justify-center items-center pt-2 pb-2'>
					<img src={apple} width={15} alt="apple sign up" />
				</div>
				<div className='border-[2px] rounded-2xl border-gray-200 w-[100%] flex justify-center items-center pt-2 pb-2'>
					<img src={google} alt="google sign up" width={20} />
				</div>
			</div>
			<div className='mt-10 flex items-center justify-center'>
				<span className='border-b-2 rounded-full border-gray-200 w-[100%]'></span>
				<p className='ml-10 mr-10 text-gray-400'>OR</p>
				<span className='border-b-2 rounded-full border-gray-200 w-[100%]'></span>
			</div>
			<div>
				<form action="">
					<div className='grid grid-cols-2 gap-4 mt-5'>
						<div className='border-[2px] rounded-2xl w-[100%] border-gray-200 flex overflow-auto h-12 pr-3 pl-3 items-center mt-5 mb-5'>
							<label htmlFor="firstname" className="text-[1rem]">First Name*</label>
							<img src={userIcon} alt="firstname" />
							<input type="text" name="" id="firstname" placeholder='Drey' className='w-[100%] h-[100%] pr-3 pl-3 text-lg input' required />
						</div>
						<div className='border-[2px] rounded-2xl border-gray-200 w-[100%] flex overflow-auto h-12 pr-3 pl-3 items-center mt-5 mb-5'>
							<label htmlFor="lastname" className="text-[1rem]">Last Name*</label>
							<img src={userIcon} alt="lastname" />
							<input type="text" name="" id="lastname" placeholder='Johnson' className='w-[100%] h-[100%] pr-3 pl-3 text-lg input' required />
						</div>
					</div>
					<div className='border-[2px] rounded-2xl border-gray-200 flex overflow-auto h-12 pr-3 pl-3 items-center mt-5 mb-10'>
						<label htmlFor="email" className="text-[1rem]">Email Address*</label>
						<img src={mail} alt="email" />
						<input type="email" name="" id="email" placeholder='dj@oasis.com' className='w-[100%] h-[100%] pr-3 pl-3 text-lg input' required />
					</div>
					<div className='border-[2px] rounded-2xl border-gray-200 flex overflow-auto h-12 pr-3 pl-3 items-center mt-5'>
						<label htmlFor="password" className="text-[1rem]">Password*</label>
						<img src={lock} alt="password" />
						<input type="password" name="" id="password" className='w-[100%] h-[100%] pr-3 pl-3 tracking-widest input' placeholder='••••••••' required onFocus={startTyping} onBlur={stopTyping} onChange={(e) => setPassword(e.target.value)} />
						<img src={eye} alt="show-password" className='justify-self-end' onClick={showPassword} />
					</div>
					{isTyping ? <div className='grid grid-cols-3 gap-4 justify-center items-center mt-2'>
						{characterCount > 1 && <input type="range" name="weak" id="weak" className='range' />}
						{(isMedium || isStrong) && <input type="range" name="medium" id="medium" className='range' />}
						{(isStrong && isMedium) && <input type="range" name="strong" id="strong" className='range' />}
					</div>
						:
						<div className='flex text-[12px] text-gray-500 mt-2 mb-10 pr-3 pl-3 items-center-safe'>
							<img src={info} alt="info" className='mr-1 w-[15px] h-[15px]' />
							<p>Must contain 1 uppercase letter, 1 number, min. 8 characters.</p>
						</div>}
					{isTyping && <div className='text-gray-500 pr-3 pl-3  mb-10'>
						<div className='flex items-center'>
							{hasUpperCase && <img src={check} alt="check" className='mr-2' />}
							<p>At least 1 uppercase</p>
						</div>
						<div className='flex items-center'>
							{hasLowerCase && <img src={check} alt="check" className='mr-2' />}
							<p>At least 1 lowercase</p>
						</div>
						<div className='flex items-center'>
							{hasNumber && <img src={check} alt="check" className='mr-2' />}
							<p>At least 1 number</p>
						</div>
						<div className='flex items-center'>
							{characterCount > 7 && <img src={check} alt="check" className='mr-2' />}
							<p>At least 8 characters</p>
						</div>
					</div>}
					<input type="submit" value="Register" className='w-[100%] bg-oasis-indigo text-oasis-white text-2xl p-3 btn input mb-20 md:mb-5' />
				</form>
			</div>
	  <footer className='md:hidden flex justify-center bottom-0 p-5 mt-10 text-lg text-gray-500'>&copy; 2025 Oasis</footer>
		</div>
		</div>
		</div>
	)
}

export default SignUp