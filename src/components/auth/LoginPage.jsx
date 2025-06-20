import React from 'react'
import AuthToggle from './AuthToggle'
import Navbar from '../Navbar'

function LoginPage() {
  return (
    <div>
      <Navbar className='flex sticky' isFixed={false}/>

      <AuthToggle className='mt-25'/>
 
    </div>
  )
}

export default LoginPage