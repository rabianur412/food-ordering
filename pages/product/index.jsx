import Title from '@/components/ui/Title'
import Image from 'next/image'
import React from 'react'

const index = () => {
  return (
    <div className='flex items-center h-screen gap-20 py-20 flex-wrap '>
        <div className='relative md:flex-1 w-[80%] h-[80%] mx-20'>
            <Image src="/images/f1.png" alt='' layout='fill' objectFit='contain'></Image>
        </div>
        <div className='md:flex-1 md:text-start text-center'>
            <Title addClass="text-6xl">Good Pizza</Title>
            <span className='text-primary text-2xl font-bold underline my-4 inline-block'>175₺</span>
            <p className='text-[14px] my-4 md:pr-24'>
            Pizza sosu, mozzarella peyniri, mantar, yeşilbiber, soğan, domates, mısır
            </p>
            <div >
                <h4 className='text-xl font-open font-bold'> Boyutunu Seçin</h4>
                <div className='flex items-center py-2 gap-x-20 md:justify-start justify-center'>
                  <div className='relative w-8 h-8'>
                    <Image src="/images/detail.webp" alt='' layout='fill'></Image>
                    <span className='absolute top-0 -right-8 text-xs bg-primary rounded-full px-[5px] font-medium'>Küçük</span>
                  </div>
                  <div className='relative w-12 h-12'>
                    <Image src="/images/detail.webp" alt='' layout='fill'></Image>
                    <span className='absolute top-0 -right-4 text-xs bg-primary rounded-full px-[5px] font-medium'>Orta</span>
                  </div>
                  <div className='relative w-16 h-16'>
                    <Image src="/images/detail.webp" alt='' layout='fill'></Image>
                    <span className='absolute top-0 -right-4 text-xs bg-primary rounded-full px-[5px] font-medium'>Büyük</span>
                  </div>
            </div>
            </div>
            <div className='flex gap-x-4 my-6 md:justify-start justify-center'>
                <label className='flex items-center gap-x-1 '>
                    <input type='checkbox' className='w-5 h-5 accent-primary' />
                    <span className='text-sm font-semibold'> ketçap</span>
                </label>
                <label className='flex items-center gap-x-1 '>
                    <input type='checkbox' className='w-5 h-5 accent-primary' />
                    <span className='text-sm font-semibold'> mayonez</span>
                </label>
                <label className='flex items-center gap-x-1 '>
                    <input type='checkbox' className='w-5 h-5 accent-primary' />
                    <span className='text-sm font-semibold'> acı sos</span>
                </label>
            </div>
            <button className='btn-primary'>Sepete Ekle</button>
        </div>
    </div>
  )
}

export default index