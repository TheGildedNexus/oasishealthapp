import React from 'react'
import pattern from '../assets/images/Pattern.svg'
import clockPills from '../assets/images/Frame_3.png'
import tablets from '../assets/images/Frame_2.png'
import doc from '../assets/images/Frame_1.png'


function SignUpSlider() {
	const frames = [clockPills, doc, tablets];
	let count = 0;
	let intervalId;

	const changeSlide = () => {
		const slide = document.getElementById('slide');
		slide.classList.add('opacity-0');

		setTimeout(() => {
			count = (count + 1) % frames.length;
			slide.setAttribute('src', frames[count]);
			slide.classList.remove('opacity-0');
		}, 300);
	}

	const startSlide = () => {
		intervalId = setInterval(changeSlide, 10000);
	}

	const stopSlide = () => {
		clearInterval(intervalId);
	}

	// startSlide();


	return (
		<div className='bg-oasis-indigo sm:grid sm:grid-rows-[400px_100px_100px] h-[100vh] hidden'>
			<div className='relative h-fit self-center'>
				<img src={pattern} alt="" />
				<img src={clockPills} alt="" className='absolute top-[50%] left-[50%] translate-[-50%] transition-opacity duration-700 opacity-100 ease-in-out' id='slide' onMouseEnter={stopSlide} on onMouseLeave={startSlide}/>
			</div>
			<div className='h-fit flex flex-col items-center'>
				<h1 className='text-3xl text-oasis-white'>Built to remember, so you don’t have to</h1>
				<p className='text-xl/6 tracking-[-1.1%] w-120 text-gray-500 text-center mt-5'>Track your time off balance and manage requests with the Time Off widget, ensuring a stress-free experience.</p>
			</div>
			<div className='flex justify-center items-center h-fit gap-2 self-end'>
				<span className='w-2 h-2 bg-oasis-white rounded-full'></span>
				<span className='w-2 h-2 bg-oasis-white rounded-full'></span>
				<span className='w-2 h-2 bg-oasis-white rounded-full'></span>
			</div>
		</div>
	)
}

export default SignUpSlider;