import React from 'react'
import SideBar from '../components/dashboard/SideBar'

const DashBoardLayout = ({
  children
} : {
   children:React.ReactNode
}) => {
  return (
    <div className='w-[100vw] h-[100vh] flex flex-row'>
     <div className='w-[85px] sm:w-[250px]  h-full'>
        <SideBar/>
       </div>
       <main className='flex-1 overflow-y-auto min-h-full'>
         {children}
       </main>
    </div>
  )
}

export default DashBoardLayout