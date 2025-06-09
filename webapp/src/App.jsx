// import { useState } from 'react'
import Navbar from './pages/Navbar'
import './App.css'
import SignUp from './pages/SignUp'
import Verification from './pages/Verification';
import SignIn from './pages/SignIn';
import ResetPassword from './pages/ResetPassword';
import NewPasswd from './components/NewPasswd';
import Dashboard from './pages/users/dashboard';

function App() {

  return (
    <>
	  {/* <SignUp /> */}
	  {/* <Verification mode='signup' type='reset'/> */}
	  {/* <SignIn /> */}
	  {/* <ResetPassword /> */}
	  {/* <NewPasswd /> */}
	  <Dashboard />
    </>
  )
}

export default App
