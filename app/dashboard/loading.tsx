import React from 'react'
import Spinner from '../components/Spinner'

const Loader = () => {
  return (
    <div className='w-full h-full flex items-center justify-center bg-gradient-to-tr from-[#91A6FF] to-[#FFFFFF]'>
       <Spinner/>
    </div>
  )
}

export default Loader