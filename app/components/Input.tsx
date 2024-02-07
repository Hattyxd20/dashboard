import React from 'react'


interface InputProps{
   title?:string,
   id:string
  
}
const Input = ({
  title,
  id,
 
} : InputProps) => {
  return (
     <input 
      className={`border-slate-300 border-2 focus-visible:outline-none w-full sm:w-[95%] p-2 py-1 rounded-md placeholder:text-xs
       font-normal text-slate-800/45 relative '}`}
      placeholder={title}
      id={id}
     />
  )
}

export default Input