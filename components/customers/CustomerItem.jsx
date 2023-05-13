import Image from 'next/image'
import React from 'react'


const CustomerItem = ({imgSrc,name,comment,explanation}) => {
  
  return (
    <div className='mt-10'>
      <div className="p-5 bg-secondary text-white rounded-[5px] font-sans">
      <span className='text-[15px] font-medium '>{explanation}</span>
        <p className="mt-2">
        {comment}
        </p>
        <div className='flex flex-col mt-4'>
            <span className='text-lg font-semibold'>{name}</span>
           
        </div>
      </div>
       
        <div className="relative w-28 h-28 border-4 border-primary rounded-full mt-8 
        before:content[''] before:absolute before:top-0 flex justify-center before:-translate-y-3 before:rotate-45
         before:bg-primary before:w-5 before:h-5 ">
            <Image alt='' src={imgSrc} layout='fill' objectFit='' className='rounded-full' />
        </div>
    </div>
  )
}

export default CustomerItem