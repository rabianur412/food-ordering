import React from 'react'
import Title from '../ui/Title'
import {GrMail} from "react-icons/gr"
import {SiGooglemaps} from "react-icons/si"
import {BsFillTelephoneFill,BsPinterest} from "react-icons/bs"
import{AiFillInstagram,AiFillTwitterSquare,AiFillFacebook,AiFillLinkedin} from "react-icons/ai"


const Footer = () => {
  return (
    <div className='bg-secondary text-white py-1'>
        <div className='container mx-auto pt-16 pb-6 '>
            <div className='flex md:justify-between justify-center text-center flex-wrap md:gap-y-0 '>
                <div className='md:flex-1 font-sans text-[14px]'>
                    <Title addClass="text-[30px] ">İletişim</Title>
                    <div className='flex flex-col gap-y-2 mt-6'>
                        <span >
                            <SiGooglemaps className="inline-block align-middle mx-2"></SiGooglemaps>
                            Konum
                        </span>
                    </div>
                    <div>
                        <span>
                            <BsFillTelephoneFill className="inline-block align-middle mx-2"></BsFillTelephoneFill>Telefon: 05056521523
                        </span>
                    </div>
                    <div>
                        <span>
                            <GrMail className="inline-block align-middle mx-2"></GrMail> bamburinfo@gmail.com
                        </span>
                    </div>
                        
                </div>
                <div className='md:flex-1'>
                    <Title addClass="text-[35px] ">Bambur</Title>
                    <div className='flex flex-col gap-y-2 mt-6'>
                     <p className='text-[14px] font-sans'>
                     Gerekli, bu da bunu İnternet teki ilk gerçek oluşturucu yapıyor. 200 den fazla Latince kelimeden oluşan bir sözlük kullanır.
                     </p>
                     <div className='flex items-center justify-center mt-10 gap-x-2 '>
                        <a href='' className='w-8 h-8 grid place-content-center bg-white text-secondary rounded-full'>
                        <AiFillInstagram></AiFillInstagram>
                        </a>
                        
                        <a href='' className='w-8 h-8 grid place-content-center bg-white text-secondary rounded-full'>
                        <AiFillTwitterSquare></AiFillTwitterSquare>
                        </a>
                        <a href='' className='w-8 h-8 grid place-content-center bg-white text-secondary rounded-full'>
                        <AiFillFacebook></AiFillFacebook>
                        </a>
                        <a href='' className='w-8 h-8 grid place-content-center bg-white text-secondary rounded-full'>
                        <AiFillLinkedin></AiFillLinkedin>
                        </a>
                        <a href='' className='w-8 h-8 grid place-content-center bg-white text-secondary rounded-full'>
                        <BsPinterest></BsPinterest>
                        </a>
                     </div>
                    </div>
                </div>
                <div className='md:flex-1'>
                    <Title addClass="text-[30px]  ">Açık Saatler</Title>
                    <div className='flex flex-col gap-y-2 mt-6'>
                    <p className='text-[14px] font-sans'>
                    Her gün

                     10.00-22.00 
                    </p>
                    </div>
                   
                </div>
            </div>
            <div className='mt-10'>
                <p className='text-center font-sans'>
                    @2023 React ile İlk Projem
                </p>
            </div>
        </div>
    </div>
  )
}

export default Footer