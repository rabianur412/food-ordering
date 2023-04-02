import React from 'react'
import OutsideClickHandler from "react-outside-click-handler"
import Title from "../ui/Title"
import Image from 'next/image'
import{AiFillCloseCircle} from "react-icons/ai"

const Search = ({setIsSearchModal}) => {
    
  return (
    <div className="fixed top-0 left-0 position w-screen h-screen z-50  after:content-[''] 
    after:w-screen after:h-screen after:bg-white after:absolute after:top-0 after:left-0 after:opacity-60 grid place-content-center">
     <OutsideClickHandler onOutsideClick={()=>setIsSearchModal(false)}>
       <div className="w-full h-full grid place-content-center relative ">
         <div className="relative z-50 w-[600px] h-[600px] bg-white border-2 p-5">
          <Title addClass="text-[40px] text-center">Arama</Title>
          <input type="text" placeholder="Search..." className="border w-full my-10"/>
            <ul className=''>
                <li className="flex items-center justify-between p-1 hover:bg-primary transition-all">
                    <div className="relative flex">                       
                    <Image src="/images/f1.png" alt=" " width={55} height={50}/>
                    </div>
                    <span className="font-bold">Ton Balıklı Pizza</span>
                    <span className='font-bold'>95₺</span>
                </li>
                <li className="flex items-center justify-between p-1 hover:bg-primary transition-all">
                    <div className="relative flex">                       
                    <Image src="/images/f5.png" alt=" " width={60} height={55}/>
                    </div>
                    <span className="font-bold">Patates Kızartması</span>
                    <span className='font-bold'>20₺</span>
                </li>
                <li className="flex items-center justify-between p-1 hover:bg-primary transition-all">
                    <div className="relative flex">                       
                    <Image src="/images/f4.png" alt=" " width={60} height={60}/>
                    </div>
                    <span className="font-bold">Sebzeli Makarna</span>
                    <span className='font-bold'>45₺</span>
                </li>
            </ul>
            <button className="absolute top-4 right-4" onClick={()=>setIsSearchModal(false)}>
               <AiFillCloseCircle size={30} className="text-black transition-all hover:text-primary"/>
            </button>
         </div>  
       </div> 
     </OutsideClickHandler>
    </div>
  )
}

export default Search