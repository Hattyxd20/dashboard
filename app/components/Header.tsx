"use client"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { DialogTitle } from '@radix-ui/react-dialog'
import { FaUserEdit } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import React, { useEffect, useState } from 'react'
import Link from "next/link";

interface HeaderProps{
   title:string,
   subtitle:string
}
const Header = ({
  title,
  subtitle
} : HeaderProps) => {
  const [mounted,setMounted] = useState(false);
  const [open,setOpen] = useState(false);

  useEffect(() => {
    setMounted(true)
  },[]);

  if(!mounted){
    return null;
  }


  return (
     <div className='w-full'>
        <div className='flex flex-row justify-between items-center py-10'>
           <h1 className='uppercase text-lg sm:text-3xl text-black/75 font-semibold'>
             {title}
             <span className='text-orange-700/90 '>{subtitle}</span>
           </h1>
           <div>
             <DropdownMenu open={open} onOpenChange={() => setOpen(false)}>
                <DropdownMenuTrigger>
                   <button 
                    onClick={() => setOpen(true)}
                    className='w-[35px] h-[35px] sm:w-[50px] sm:h-[50px] rounded-full bg-slate-600/35 border-4 border-slate-600/85'
                  />
                </DropdownMenuTrigger>
                <DropdownMenuContent side="bottom" align="start"  alignOffset={-160} className="py-4 px-8">
                  <DropdownMenuLabel>
                      <h2 className="text-gray-700/75 font-semibold text-lg">Abc</h2>
                      <p className=" text-gray-700/75 font-semibold text-xs">abc@gamil.com</p>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator/>
                  <DropdownMenuItem>
                      <Link href={"/dashboard/edit-profile"}>
                       <button className={`rounded-xl px-2 py-2 text-white text-sm font-semibold bg-slate-600/35 mx-auto
                          flex flex-row items-center gap-x-1`}>
                          <FaUserEdit
                            size={20}
                          />
                          Edit Profile
                       </button>
                      </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <button className={`rounded-xl px-5 py-2 text-white text-sm font-semibold bg-slate-600/35 mx-auto
                      flex flex-row items-center gap-x-1 `}>
                        <MdLogout
                         size={20}
                        />
                        Logout
                    </button>
                  </DropdownMenuItem>
                </DropdownMenuContent>
             </DropdownMenu>
           </div>
        </div>
      </div>
  )
}
           

export default Header