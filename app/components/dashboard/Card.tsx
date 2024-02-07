"use client"
import React from 'react'
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaTrash } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";


const Card = () => {
  return (
    <div className='w-[290px] h-[350px] bg-white pt-3 px-3 mx-auto sm:mx-0 '>
       <div className='w-full h-[200px] bg-slate-600/25'/>
       <div className='mt-2 flex flex-row justify-between items-center pb-11'>
          <p className='text-slate-800 text-xs font-semibold'>Name of the file</p>
          <div className='flex flex-row gap-x-1 items-center '>
             <div className='rounded-xl bg-slate-600/85 p-2'>
                <FaEye
                  fill='white'
                />
             </div>
             <div className='rounded-xl bg-slate-600/85 p-2'>
                <FaTrash
                 fill='white'
                />
             </div>
          </div>
       </div>
    </div>
  )
}

export default Card