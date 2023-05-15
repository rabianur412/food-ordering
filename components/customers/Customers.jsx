import React from 'react'
import Title from '../ui/Title'
import CustomerItem from './CustomerItem'
import Slider from "react-slick";
import {IoIosArrowBack,IoIosArrowForward} from "react-icons/io"


const Customers = () => {

  function NextBtn ({onClick}) {
    return (
      <button className=" absolute -bottom-12 left-1/2 bg-primary flex items-center justify-center w-10 h-10 rounded-full
       text-[25px] text-white " onClick={onClick}><IoIosArrowForward></IoIosArrowForward></button>
    )

  }
  function PrevBtn ({onClick}) {
    return (
      <button className=" absolute -bottom-12 right-1/2 bg-primary flex items-center justify-center w-10 h-10 rounded-full
       text-[25px] text-white mr-2" onClick={onClick}><IoIosArrowBack></IoIosArrowBack></button>
    )

  }
  const settings = {
    dots: false, //noktalar
    arrows:true,//okların görünmesi
    infinite: true,//sonsuz döngünün olup olmadığı
    speed: 500,
    slidesToShow: 2,//aynı anda kaç slaytın görüneceği
    slidesToScroll: 2,
    autoplay:true,
    autoplaySpeed:3500,
    nextArrow:<NextBtn/>,//sonraki ok
    prevArrow:<PrevBtn/>,//önceki ok
    responsive:[
      {
      breakpoint: 768,
      settings:{
        slidesToShow: 1,
      }
      }
    ]
  };
  return (
    <div className='container mx-auto my-20'>
      <Title addClass=" text-[40px] text-center ">Müşteri Yorumları</Title>
        <Slider {...settings}>
        <div className='w-1/2 px-5'>
        <CustomerItem imgSrc="/images/erko.webp" name="Servet Sayar" comment="Müşteri gelince masaları silmek çok akıllara gelmiyor. Bikkin bir şekilde çalışildigini hissettiren bir ortam. Hamburger lezzeti gayet güzel." explanation="Daha Fazla Güler Yüz"/>
        </div>
        <div className='w-1/2 px-5'> 
        <CustomerItem imgSrc="/images/canim.jpg" name="Hilal Kaplan" comment="Gerçekten mükemmel yediğim en güzel hamburger servis eden kişiler çok kibar ,temiz ortam , covid tedbirlerine uyuluyor gayet hijyenik." explanation="Lezzetli"/>
        </div>
        <div className='w-1/2 px-5'>
        <CustomerItem imgSrc="/images/musteri3.jpg" name="Gökhan Öz" comment="Paramı helal etmiyorum. Buz gibi yemek. Rezil bir paketleme. Plastik gibi patatesler. Parasını ve damak tadını düşünenler bu restorandan sipariş vermesin" explanation="BERBATSINIZ"/>
        </div>
        <div className='w-1/2 px-5'>
        <CustomerItem imgSrc="/images/musteri4.jpg" name="Ali Burak Işık" comment="Şubenin çok katlı olması ve personellerinin ilgili olması gayet başarılı durumda. Ancak personeller tuvaletleri ne kadar silerse silsin tuvaletlerde ki aparatlar çok çok eski ve kirli." explanation="HİJYEN YOK"/>
        </div>
        </Slider>
        
    </div>
  )
}

export default Customers