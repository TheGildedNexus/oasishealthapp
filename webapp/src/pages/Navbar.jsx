import React, { useState } from 'react'
import logo from '../assets/images/logo.png'

function Navbar({ mode }) {
	const [isGuestUser, setIsGuestUser] = useState(true);
	let btnText = mode === 'signup' ? 'Log In' : mode === 'signin' ? 'Register' : '';
  return (
	isGuestUser ? 
	<div className='flex justify-between p-5 items-center'>
		<img src={logo} alt="logo.png" width={30} height={30}/>
		<button className='rounded-lg bg-fuchsia-100 text-fuchsia-900 p-2 w-20 h-10 text-center'>{btnText}</button>
	</div>
	: 
	<div>Logged in</div>
  )
}

export default Navbar