"use client"
import Image from 'next/image';
import React from 'react'
import Button from '../Button';
import { usePathname } from 'next/navigation';
import { LiaFileUploadSolid } from "react-icons/lia";
import { MdDashboard } from "react-icons/md";
import { IconType } from 'react-icons';
import ToolTip from '../ToolTip';
import Link from 'next/link';



const SideBar = () => {
  const pathName = usePathname();
  const isActive = pathName === '/dashboard'
  


  type Buttons = {
    label:string;
    icon:IconType;
    active:boolean;
  }[];

  type IconMap = IconType[];


  const buttons : Buttons =  [
      {
        label:"Invoice",
        icon:LiaFileUploadSolid,
        active:pathName === '/Invoice'
      },

      {
        label:"PAN",
        icon:LiaFileUploadSolid,
        active:pathName === '/Pan'
      },

      {
        label:"Aadhar",
        icon:LiaFileUploadSolid,
        active:pathName === 'Aadhar'
      },
    ]

  
  const iconMap : IconMap = [
     LiaFileUploadSolid,
     LiaFileUploadSolid,
     LiaFileUploadSolid,
  ]

  return (
    <div className='w-full h-full pt-5 flex flex-col bg-white/85 p-0 ' >
        <div className='w-full mt-2 overflow-hidden'>
           <Image
             src={'/images/dash.svg'}
             alt='Dashboard-img'
             className='mx-auto'
             width={100}
             height={100}
             
           />
         </div>
         <div className='w-full flex flex-row justify-center mt-5 relative'>
           
           <Link href={'/dashboard'}>
             <button className={`rounded-lg px-2 py-2 text-white text-sm font-semibold bg-slate-600/85 mx-auto
               ${isActive && "opacity-35"} hidden sm:block`}>
               Dashboard
             </button>
           </Link>
           <ToolTip
             label='Dashboard'
             side='right'
             align='center'
           >
              <div className={`bg-slate-600/85 rounded-xl p-2 block sm:hidden ${isActive && 'opacity-35'}`}>
               <MdDashboard
                 fill='white'
                 size={30}
               />
              </div>
           </ToolTip>
          
           
         </div>
         <div className='py-5 w-full'>
            <p className='text-center text-gray-400 font-medium text-gray-700/40 mb-2 text-xs sm:text-sm'>Upload</p>
            <div className='flex flex-col gap-y-1'>
               {buttons.map((item,index) => (
                  <Button
                    key={index}
                    label={item.label}
                    icon={item.icon}
                    isActive={item.active}
                  />
               ))}
              
            </div>
         </div>
    </div>
  )
}

export default SideBar;