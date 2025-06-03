import React, { useState } from 'react'
import logo from '../assets/images/logo.png'

function Navbar() {
	const [isGuestUser, setIsGuestUser] = useState(true);
  return (
	isGuestUser ? 
	<div className='flex justify-between p-5 items-center'>
		<img src={logo} alt="logo.png" width={30} height={30}/>
		<button className='rounded-lg bg-fuchsia-100 text-fuchsia-900 p-2 w-20 h-10 text-center'>Log In</button>
	</div>
	: 
	<div>Logged in</div>
  )
}

export default Navbar