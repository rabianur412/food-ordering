import Image from 'next/image'
import React from 'react'
import Title from '../ui/Title'
import {FaShoppingCart} from "react-icons/fa"


const MenuItem = () => {
  return (
    <div className="bg-secondary rounded-3xl">
        <div className='w-full bg-underwhite h-[210px] grid place-content-center rounded-bl-[46px] rounded-tl-2xl rounded-tr-2xl '>
        <div className="relative w-36 h-36 hover:scale-110 transition-all">
            <Image src="/images/f1.png" alt="" layout="fill" className="" />
        </div>
        </div>
        <div className="p-[25px] text-white">
          <h4 className="text-xl font-semibold">Lezzetli Pizzalar</h4>
          <p className="text-[15px]">İçinde soğan, mısır, havuş, sarımsak, zeytin, peynir bulunduran pizzamız lezzetiyle baş döndürüyor.</p>
        
          <div className="flex justify-between items-center mt-4">
          <span>$20</span>
           <button className='btn-primary w-10 h-10 rounded-full !p-0 grid place-content-center '><FaShoppingCart/></button>
           </div>
        </div>
    </div>
  )
}

export default MenuItem