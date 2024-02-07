import Image from 'next/image'
import React from 'react'
import { IconType } from 'react-icons'
import ToolTip from './ToolTip';


interface ButtonProps{
   label:string;
   icon:IconType;
   isActive:boolean;
}
const Button = ({
   label,
   icon:Icon,
   isActive
} : ButtonProps) => {
  return (
    
    <ToolTip
      label={label}
      side='right'
      align='center'
    >
        <button className={`rounded-xl px-2 py-2 sm:rounded-lg  text-white text-sm font-semibold bg-slate-600/85 mx-auto
        ${isActive && "opacity-35"} flex flex-row gap-x-1 mt-1 items-center text-sm font-semibold
        ${label === "PAN" && 'px-2 sm:px-5'}`}
        >
            <Icon
            size={25}
            opacity={2}
            />
            <p className='text-white hidden sm:block'>
              {label}
            </p>
        </button>
    </ToolTip>
    
  )
}
          

export default Button