import React, { useEffect, useState } from 'react'
import mailCheck from '../assets/icons/mail-check-line.png'
import SignUpSlider from '../components/SignUpSlider'
import Navbar from './Navbar'

function Verification() {
	const [verificationCode, setVerificationCode] = useState([]);

	const moveFocusForward = (e) => {
		if (e.target.value !== '') {
			if (!/^[0-9]$/.test(e.key) && e.key !== "Backspace") {
				e.preventDefault();
			}
			setVerificationCode([...verificationCode, e.target.value]);
			e.target.nextElementSibling ?
				e.target.disabled = true :
				e.target.disabled = false;
			e.target.nextElementSibling?.focus();
		}
	};

	const moveFocusBackward = (e) => {
		if (e.key === 'Backspace') {
				e.preventDefault();

			if (e.target.value === '') {
				const prevElem = e.target.previousElementSibling;

				if(prevElem)
					prevElem.focus();

				setVerificationCode((prev) => prev.slice(0, -1))
			} else {
				e.target.value = '';
				setVerificationCode((prev) => prev.slice(0, -1))
			}
		}
	};

	useEffect(() => {
		console.log(verificationCode);
		if (verificationCode.length === 4) document.getElementById('verify').disabled = false;
		else document.getElementById('verify').disabled = true;
	}, [verificationCode]);

	return (
		<div className='md:grid md:grid-cols-2'>
			<SignUpSlider />
			<div>
				<Navbar />
				<div className='lg:pr-50 lg:pl-50 md:pl-30 md:pr-30 sm:pr-20 sm:pl-20 pr-10 pl-10 ml-auto mr-auto mb-0 mt-20 md:mt-5 overflow-hidden'>
					<div className='rounded-full bg-fuchsia-100 w-30 h-30 flex justify-center items-center mb-0 mt-0 ml-auto mr-auto'>
						<div className='rounded-full bg-white w-20 h-20 flex justify-center items-center'>
							<img src={mailCheck} alt="signup icon" />
						</div>
					</div>
					<div className='ml-auto mr-auto flex items-center flex-col mt-5'>
						<h1 className='text-3xl'>Enter Verification Code</h1>
						<h2 className='text-xl text-gray-600 mt-1'>Enter the OTP sent to your email address</h2>
						<p className='text-gray-500 mt-5 border-1 border-gray-300 rounded-2xl p-3'>email4email@example.com<button className='text-oasis-indigo ml-2 underline underline-offset-2 font-[500] cursor-pointer'>Change</button></p>
					</div>
					<div className='mt-10 flex items-center justify-center'>
						<span className='border-b-2 rounded-full border-gray-200 w-[100%]'></span>
					</div>
					<div>
						<form action="">
							<div className='grid grid-cols-4 gap-4 mt-10 mb-10'>
								<input type="text" inputMode="numeric" pattern="[0-9]*" name="" id="first" className='p-5 border-1 border-gray-300 rounded-2xl outline-0 text-center text-2xl w-20 h-20 font-[600]' maxLength={1} autoFocus onInput={moveFocusForward} onKeyDown={moveFocusBackward} />
								<input type="text" inputMode="numeric" pattern="[0-9]*" name="" id="first" className='p-5 border-1 border-gray-300 rounded-2xl outline-0 text-center text-2xl w-20 h-20 font-[600]' maxLength={1} onInput={moveFocusForward} onKeyDown={moveFocusBackward} />
								<input type="text" inputMode="numeric" pattern="[0-9]*" name="" id="first" className='p-5 border-1 border-gray-300 rounded-2xl outline-0 text-center text-2xl w-20 h-20 font-[600]' maxLength={1} onInput={moveFocusForward} onKeyDown={moveFocusBackward} />
								<input type="text" inputMode="numeric" pattern="[0-9]*" name="" id="first" className='p-5 border-1 border-gray-300 rounded-2xl outline-0 text-center text-2xl w-20 h-20 font-[600]' maxLength={1} onInput={moveFocusForward} onKeyDown={moveFocusBackward} />
							</div>
							<input type="submit" value="Verify" className='w-[100%] text-oasis-white text-2xl p-3 btn input mb-20 md:mb-5' id='verify' disabled />
						</form>
						<div className='text-xl text-center'>
							<p className='text-gray-500 text-lg font-[400]'>Experiencing issues receiving the code?</p>
							<p className='text-oasis-indigo font-[500] underline underline-offset-2'>Resend Code</p>
						</div>
					</div>
					<footer className='md:hidden flex justify-center bottom-0 p-5 mt-10 text-lg text-gray-500'>&copy; 2025 Oasis</footer>
				</div>
			</div>
		</div>
	)
}

export default Verification