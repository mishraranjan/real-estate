import React from 'react'
import {Link} from 'react-router-dom';
export default function SignUp() {
  return (
 <div className='p-3 max-w-lg m-auto'>
 <h1 className='text-center text-3xl font-semibold my-7'>Sign Up</h1>
 <form className='flex flex-col gap-4 '>
  <input type="text" placeholder='username' className='border p-3 rounded-lg' id='username' />
  <input  placeholder='email' type='email' className='border p-3 rounded-lg' id='email' />
  <input type="password" placeholder='password' className='border p-3 rounded-lg' id='password' />
  <button className='bg-emerald-700 text-white rounded-lg uppercase p-3 hover:opacity-90 disabled:opacity-80'>Sign Up</button>
  <div className="flex gap-2 mt-2">
    <p>Have an account?</p>
    <Link to='/sign-up'>
      <span className='text-blue-700'>Sign in</span>
    </Link>
  </div>
 </form>
 </div>
  )
}
