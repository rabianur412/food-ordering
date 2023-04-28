import React from 'react'
import Title from './ui/Title'
import Input from './form/Input'

const Reservation = () => {
    const inputs= [
        {
            id:1,
            name:"fullName",
            type:"text",
            placeholder:"İsminiz",
        },
        {
            id:2,
            name:"phoneNumber",
            type:"number",
            placeholder:"Telefon Numaranız",
        },
        {
            id:3,
            name:"email",
            type:"email",
            placeholder:"Mail Adresiniz",
        },
        {
            id:4,
            name:"persons",
            type:"number",
            placeholder:"Rezervasyon Kaç Kişilik?",
        },
        {
            id:5,
            name:"persons",
            type:"datetime-local",
            placeholder:"",
        },
    ]
  return (
    <div className="container mx-auto py-12">
     <Title addClass="text-[40px] mb-10">Masa Rezervasyonu</Title>
       <div className="flex justify-between flex-wrap-reverse gap-10">
        <div className="lg:flex-1 w-full">
            <div className="flex flex-col gap-y-3">
            {inputs.map((input)=>(
                <Input key={input.id} {...input} />
            ))}
            </div>
            <button className="btn-primary mt-5">REZERVASYON YAP</button>
        </div>
        <div className="lg:flex-1 w-full ">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24489.253574514107!2d32.66445622032564!3d39.89312385012616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d3398fdad851c7%3A0x36c909c716b1a668!2sTavolo%20Mio%20Brasserie!5e0!3m2!1str!2str!4v1682709623405!5m2!1str!2str" 
         allowFullScreen="" loading="lazy"  referrerPolicy="no-referrer-when-downgrade" className="w-full h-full "></iframe>
        </div>
       </div>
    </div>
  )
}

export default Reservation