import Header from '@/app/components/Header'
import { MdEdit } from "react-icons/md";
import ProfileDetail from '@/app/components/dashboard/ProfileDetail';
import React from 'react'

const EditProfile = () => {
  return (
     <div className='bg-gradient-to-tr from-[#91A6FF] to-[#FFFFFF] w-full h-full overflow-y-auto pb-28'
     >
         <div className='w-[90%] mx-auto flex flex-col'>
             <Header
               title='Edit'
               subtitle='Profile'
             />
             <div className='flex flex-row items-center justify-between bg-slate-50 py-3 px-4 rounded-md relative'>
                <div className='flex flex-row items-center'>
                   <div className='w-[35px] h-[35px] sm:w-[70px] sm:h-[70px] rounded-full bg-slate-600/35'/>
                   <p className='text-black/85 font-semibold ml-3 text-xs ra:text-lg'>Hi, Jack Adams</p>
                </div>
                <button className='flex flex-row items-center justify-center bg-orange-700 p-1 ra:p-2 ra:px-4 text-white rounded-md text-xs 
                mb-0 ra:mb-5
                '>
                    <MdEdit
                    
                     className='mr-0 ra:mr-1 text-lg ra:text-xl'
                    />
                    <span className='hidden ra:block'>Edit</span>
                </button>
             </div>
             <div className='flex-1'>
               <ProfileDetail/>
             </div>
         </div>
      </div>
  )
  
}

export default EditProfile