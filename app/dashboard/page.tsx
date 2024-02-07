"use client"
import React from 'react'
import Header from '../components/Header'
import Card from '../components/dashboard/Card'
import Image from 'next/image'

const DashBoard = () => {
  return (
    <div className='bg-gradient-to-tr from-[#91A6FF] to-[#FFFFFF]  w-full h-full overflow-y-auto'
   >
       <div className='w-[90%] mx-auto'>
          <Header
            title='Dash'
            subtitle='Board'
          />
          <div className='w-full px-7 bg-slate-600/85 rounded-lg relative pt-5 sm:py-10  shadow-2xl flex flex-col sm:flex-row justify-between' >
             <div className='z-30'>
                <h1 className='text-xl sm:text-3xl text-white/80 font-semibold'>Welcome back,Abc</h1>
               <p className='font-medium text-xs sm:text-sm mt-3 text-white'>
                 Manage your files with ease on the SmartIDMS Dashboard.
               </p>
             </div>
             <div className='mt-3 self-end sm:mt-0 sm:self-auto'>
                <Image
                 src={'/images/dash.svg'}
                 alt='Dashboard-img'
                 width={150}
                 height={150}
             
               />
             </div>
          </div>
          <p className='py-7 px-6 font-semibold text-md text-slate-600/80 text-sm sm:text-md'>To upload your documents,simply click on the respective 'Invoice,''PAN,' <br /> 
          or 'Aadhar' button in the side navigation bar.
         </p>
         <div className=' py-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-6 w-full'>
            {[1,2,3,4].map((item,index) => (
                 <Card/>
            ))}
         </div>
       </div>
    </div>
  )
}

export default DashBoard