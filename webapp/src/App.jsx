import { useState } from 'react'
import Navbar from './pages/Navbar'
import './App.css'
import SignUp from './pages/SignUp'
import Verification from './pages/Verification';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
	  {/* <SignUp /> */}
	  <Verification />
    </>
  )
}

export default App
