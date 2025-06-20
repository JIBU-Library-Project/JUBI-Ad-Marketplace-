import React from 'react'
import Navbar from '../components/Navbar'
// import AuthToggle from '../components/auth/AuthToggle'

function HomePage() {
  return (
   <>
    <Navbar/>
    {/* <AuthToggle/> */}
    <div className='h-screen w-screen flex justify-center items-center bg-[#2a2020] '>HomePage</div>
   </>

  )
}

export default HomePage