import React from 'react'
import Title from '../ui/Title'
import CustomerItem from './CustomerItem'

const Customers = () => {
  return (
    <div className='container mx-auto my-10'>
      <Title addClass=" text-[40px] text-center ">Müşteri Yorumları</Title>
      <div className="flex flex-col-2 gap-x-10 ">
        <div className='w-1/2 px-5'>
        <CustomerItem imgSrc="/images/erko.webp" name="Servet Sayar" comment="Müşteri gelince masaları silmek çok akıllara gelmiyor. Bikkin bir şekilde çalışildigini hissettiren bir ortam. Hamburger lezzeti gayet güzel." explanation="Daha Fazla Güler Yüz"/>
        </div>
        <div className='w-1/2 px-5'> 
        <CustomerItem imgSrc="/images/canim.jpg" name="Hilal Kaplan" comment="Gerçekten mükemmel yediğim en güzel hamburger servis eden kişiler çok kibar ,temiz ortam , covid tedbirlerine uyuluyor gayet hijyenik." explanation="Lezzetli"/>
        </div>
      </div>
    </div>
  )
}

export default Customers