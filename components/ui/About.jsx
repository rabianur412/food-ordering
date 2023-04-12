import Image from 'next/image'
import React from 'react'
import Title from './Title'

const About = () => {
  return (
    <div className='bg-secondary py-20'>
        <div className='container mx-auto flex items-center gap-20 sm:flex-auto sm:justify-start justify-cente flex-wrap'>
          <div className='grid place-content-center'>
            <div className='relative sm:w-[445px] sm:h-[600px] w-[445px] h-[600px] '>
               <Image src="/images/about-img.png" alt='' layout='fill' />
            </div>
          </div>  
            <div className='text-white px-10 md:w-1/2'>
                <Title addClass="text-[2.5rem]">Bambur Lezzetleri </Title>
                <p className='text-[1rem] font-sans py-5'>Uluslararası kalite ve hijyen standartlarında üretim ve hizmete her zaman büyük bir özen gösteren TAB Gıda güvencesindeki Burger Kingin zengin olduğu kadar lezzetli ürün çeşidini geliştirmeye ve sürekli eğitime verdiği önem, bugünkü başarısındaki en önemli rolü oynamaktadır. Türkiye de sektörünün lider markası biri olan Burger King®, bugün Türkiye genelindeki 650 den fazla restoranı ile lezzet düşkünlerine hizmet vermektedir.</p>
                <button className='btn-primary'>Daha Fazla...</button>
            </div>
        </div>

    </div>
  )
}

export default About