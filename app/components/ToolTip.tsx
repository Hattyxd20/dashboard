import React, { useEffect, useState } from 'react'
import {  
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'


interface ToolTipProps{
  children:React.ReactNode;
  label:string;
  side:"top" | 'right' | 'bottom' | 'left'
  align:'start' | "end" | 'center'
}

const ToolTip = ({
   children,
   label,
   side,
   align
} : ToolTipProps) => {
  const [mounted,setMounted] = useState(false);

  useEffect(() => {
    setMounted(true)
  },[]);

  if(!mounted){
    return null;
  }


  return (
    <TooltipProvider delayDuration={300}>
        <Tooltip>
        <TooltipTrigger>{children}</TooltipTrigger>
        <TooltipContent side={side} align={align} className='block sm:hidden bg-gray-900 text-sm text-white' 
        sideOffset={label === "Dashboard" ?  15 : 0}
        >
           {label}
        </TooltipContent>
        </Tooltip>
    </TooltipProvider>
  )
}

export default ToolTip