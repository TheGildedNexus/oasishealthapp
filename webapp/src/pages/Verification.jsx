import React, { useEffect, useState, useRef } from 'react'
import mailCheck from '../assets/icons/mail-check-line.png'
import SignUpSlider from '../components/SignUpSlider'
import Navbar from './Navbar'
import mail from '../assets/icons/mail-line.png'


function Verification({mode, type}) {
	const inputCount = 4;
	const [code, setCode] = useState(new Array(inputCount).fill(''));
	const [isVerified, setIsVerified] = useState(false);
	const [changeEmail, setChangeEmail] = useState(false);
	const inputsRef = useRef([]);
	let btnText = type === 'reset' ? 'Reset password' : 'Verify';

	const handleChange = (e, index) => {
		const value = e.target.value;

		if (!/^\d?$/.test(value)) return; // Allow only a single digit or empty

		const newCode = [...code];
		newCode[index] = value;
		setCode(newCode);

		// Move focus to next input if filled
		if (value && index < inputCount - 1) {
			inputsRef.current[index + 1]?.focus();
		}
	};

	const handleKeyDown = (e, index) => {
		if (e.key === 'Backspace') {
			if (code[index] === '') {
				// If current empty, move focus back
				if (index > 0) {
					inputsRef.current[index - 1]?.focus();
				}
			}

			const newCode = [...code];
			newCode[index] = '';
			setCode(newCode);
		}

	};

	useEffect(() => {
		const verify = document.getElementById('verify');
		let count = 0;
		code.map((code) => {
			code !== '' && count++;
		})
		count < 4 ? verify.disabled = true : verify.disabled = false
	}, [code]);

	return (
		<div className='md:grid md:grid-cols-2'>
			<SignUpSlider />
			<div>
				<Navbar mode={mode}/>
				<div className='lg:pl-30 lg:pr-30 sm:pr-20 sm:pl-20 pr-10 pl-10 ml-auto mr-auto mb-0 mt-20 md:mt-5 overflow-hidden'>
					<div className='rounded-full bg-fuchsia-100 w-30 h-30 flex justify-center items-center mb-0 mt-0 ml-auto mr-auto'>
						<div className='rounded-full bg-white w-20 h-20 flex justify-center items-center'>
							<img src={mailCheck} alt="signup icon" />
						</div>
					</div>
					<div className='ml-auto mr-auto flex items-center flex-col mt-5 text-center'>
						<h1 className='text-3xl'>{changeEmail ? 'Change Email Address' : isVerified ? 'Email Verified' : 'Enter Verification Code'}</h1>
						<h2 className='text-xl text-gray-600 mt-1'>{changeEmail ? 'We’ve sent a code to james@oasis.com' : isVerified ? 'Your email has been verified successfully' : 'Enter the OTP sent to your email address'}</h2>
						{changeEmail || isVerified ? '' : <p className='text-gray-500 mt-5 border-1 border-gray-300 rounded-2xl p-3'>james@oasis.com<button className='text-oasis-indigo ml-2 underline underline-offset-2 font-[500] cursor-pointer' onClick={() => setChangeEmail(true)}>Change</button></p>}
					</div>
					<div className='mt-10 flex items-center justify-center'>
						<span className='border-b-2 rounded-full border-gray-200 w-[100%]'></span>
					</div>
					<div>
						<form action="">
							{isVerified ? '' : changeEmail ?
								<div className='border-[2px] rounded-2xl border-gray-200 flex overflow-auto h-12 pr-3 pl-3 items-center mt-15 mb-10'>
									<label htmlFor="email" className="text-[1rem]">Email Address*</label>
									<img src={mail} alt="email" />
									<input type="email" name="" id="email" placeholder='hello@oasis.com' className='w-[100%] h-[100%] pr-3 pl-3 text-lg input' required />
								</div> : <div className='grid grid-cols-4 gap-4 items-center justify-items-center-safe mt-10 mb-10'>
									{code.map((digit, index) => (
										<input
											key={index}
											type="text"
											inputMode="numeric"
											maxLength={1}
											value={digit}
											onChange={(e) => handleChange(e, index)}
											onKeyDown={(e) => handleKeyDown(e, index)}
											ref={(el) => (inputsRef.current[index] = el)}
											className="p-5 border-1 border-gray-300 rounded-2xl outline-0 text-center text-2xl w-20 h-20 font-[600]"
										/>
									))}
								</div>}
							{changeEmail ? <input type="submit" value="Change Email" className='w-[100%] text-oasis-white text-2xl p-3 btn input mb-20 md:mb-5' id='change-email' onClick={() => setChangeEmail(false)}/> : isVerified ? <input type="submit" value="Proceed to dashboard" className='w-[100%] text-oasis-white text-2xl p-3 btn input mb-20 md:mb-5' id='to-dashboard' /> : <input type="submit" value={btnText} className='w-[100%] text-oasis-white text-2xl p-3 btn input mb-20 md:mb-5' id='verify' disabled />}
						</form>
						{changeEmail || isVerified ? '' : <div className='text-xl text-center'>
							<p className='text-gray-500 text-lg font-[400]'>Experiencing issues receiving the code?</p>
							<p className='text-oasis-indigo font-[500] underline underline-offset-2'>Resend Code</p>
						</div>}
					</div>
					<footer className='md:hidden flex justify-center bottom-0 p-5 fixed w-[90%] mt-10 text-lg text-gray-500'>&copy; 2025 Oasis</footer>
				</div>
			</div>
		</div>
	)
}

export default Verification