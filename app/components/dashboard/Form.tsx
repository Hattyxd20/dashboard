import Input from '../Input'
import { IoEyeSharp } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import React from 'react'
import Image from 'next/image';

const Form = () => {
  return (
    <form className='w-full sm:w-[53%] flex flex-col'>
       <div className='flex flex-col gap-y-2 sm:gap-y-0 sm:flex-row items-start justify-between'>
          <div className='flex flex-col'>
            <label htmlFor="first-name" className='text-xs text-slate-500 mb-1'>First Name</label>
            <Input
              title='Jack'
              id='first-name'
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="last-name" className='text-xs text-slate-500 mb-1'>Last Name</label>
            <Input 
              title='Adams'
              id='last-name'
            />
          </div>
       </div>
       <div className='flex flex-col gap-y-2 sm:gap-y-0 sm:flex-row items-start justify-between mt-3'>
             <div className='flex flex-col'>
            <label htmlFor="email" className='text-xs text-slate-500 mb-1'>Email Adress</label>
            <Input
              title='jackadams@gmail.com'
              id='email'
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="phone" className='text-xs text-slate-500 mb-1'>Phone</label>
            <Input 
              title='XXXXXXXXXX'
              id='phone'
            />
          </div>
       </div>
       <div className='mt-3 flex-col hidden sm:flex items-start '>
          <label htmlFor="company" className='text-xs text-slate-500 mb-1'>Company Name</label>
          <input 
           type="text" 
           className='border-slate-300 border-2 focus-visible:outline-none p-2 py-1 rounded-md placeholder:text-xs
           font-normal  text-slate-800/45 max-w-[280px] '
           placeholder='abcd'
           id='company'
         />
       </div>
          <div className='flex flex-col gap-y-2 sm:gap-y-0 sm:flex-row items-start justify-between mt-3'>
            <div className='flex flex-col'>
             <label htmlFor="country" className='text-xs text-slate-500 mb-1'>Country</label>
             <Input
              title='India'
              id='country'
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="city" className='text-xs text-slate-500 mb-1'>City/State</label>
            <Input 
              title='Faridabad/Haryana'
              id='city'
            />
          </div>
       </div>
          <div className='flex flex-col gap-y-2 sm:gap-y-0 sm:flex-row items-start justify-between mt-3 '>
            <div className='flex flex-col relative'>
             <label htmlFor="password" className='text-xs text-slate-500 mb-1'>Password</label>
             <Input
              title='jaCk_12346'
              id='password'
            />
            <div className='absolute right-6 top-[55%]'>
              <IoEyeSharp/>
            </div>
          </div>
          <div className='flex flex-col relative'>
            <label htmlFor="confirm-password" className='text-xs text-slate-500 mb-1'>Confirm Password</label>
            <Input 
              title='...............'
              id='confirm-password'
            />
            <div className='absolute right-6 top-[55%]'>
               <Image
                 src={'/images/hidden.png'}
                 height={20}
                 width={20}
                 alt='confirm'
               />
            </div>
          </div>
       </div>
          <div className='mt-3  w-[20%] flex flex-row items-center gap-x-3'>
              <button className='py-2 px-4 text-xs rounded-lg ring-1 ring-orange-700 border-orange-800 text-orange-700/95 font-medium'>
                Cancel
              </button>
              <button className='py-2 px-6 text-xs rounded-lg ring-1 text-white bg-orange-700 font-medium'>
                 Save
              </button>
          </div>
        
    </form>
  )
}

export default Form