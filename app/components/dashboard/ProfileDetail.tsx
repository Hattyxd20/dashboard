import React from 'react'
import Form from './Form';
import { MdEdit } from "react-icons/md";


const ProfileDetail = () => {
  return (
    <div className='bg-slate-50 h-fit mt-3 rounded-md py-3 px-4'>
       <div className='flex flex-row items-center justify-between '>
          <p className='text-black/85 font-semibold text-md'>Personal Information</p>
           <button className='flex flex-row items-center justify-center bg-orange-700 p-1 ra:p-2 ra:px-4 text-white rounded-md text-xs 
            
           '>
              <MdEdit
                className='mr-0 ra:mr-1 text-lg ra:text-xl'
               />
              <span className='hidden ra:block'>Edit</span>
          </button>
        </div>
        <Form/>
    </div>
  )
}
                    

export default ProfileDetail