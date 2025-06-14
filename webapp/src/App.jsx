// import { useState } from 'react'
import Navbar from './pages/Navbar'
import './App.css'
import SignUp from './pages/SignUp'
import Verification from './pages/Verification';
import SignIn from './pages/SignIn';
import ResetPassword from './pages/ResetPassword';
import NewPasswd from './components/NewPasswd';
import Dashboard from './pages/users/dashboard';
import Medications from './pages/users/medications';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Routes>
	  <Route path='signup' element={<SignUp />} />
	  {/* <Verification mode='signup' type='reset'/> */}
	  <Route path='signin' element={<SignIn />} />
	  {/* <ResetPassword /> */}
	  {/* <NewPasswd /> */}
	  <Route path='dashboard' element={<Dashboard />} />
	  <Route path='medications' element={<Medications />}/>
    </Routes>
  )
}

export default App
