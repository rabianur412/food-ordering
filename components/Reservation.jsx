import React from 'react'
import Title from './ui/Title'
import Input from './form/Input'
import { useFormik } from 'formik'
import { resolve } from 'styled-jsx/css'

const Reservation = () => {
    const onSubmit=async(values,actions)=>{
        await new Promise((resolve) => setTimeout(resolve,2000));
        actions.resetForm();
    }
    const {values,handleSubmit, handleChange}= useFormik({
        initialValues: { //alacağımız değerler
            fullName: "",
            phoneNumber: "",
            email:"",
            persons:"",
            date:"",
        },
        onSubmit,
        });

   
    const inputs= [
        {
            id:1,
            name:"fullName",
            type:"text",
            placeholder:"İsminiz",
            value:values.fullName
        },
        {
            id:2,
            name:"phoneNumber",
            type:"number",
            placeholder:"Telefon Numaranız",
            value:values.phoneNumber
        },
        {
            id:3,
            name:"email",
            type:"email",
            placeholder:"Mail Adresiniz",
            value:values.email
        },
        {
            id:4,
            name:"persons",
            type:"number",
            placeholder:"Rezervasyon Kaç Kişilik?",
            value:values.persons
        },
        {
            id:5,
            name:"date",
            type:"datetime-local",
            placeholder:"",
            value:values.date
        },
    ]
  return (
    <div className="container mx-auto py-12">
     <Title addClass="text-[40px] mb-10">Masa Rezervasyonu</Title>
       <div className="flex justify-between flex-wrap-reverse gap-10">
        <form className="lg:flex-1 w-full" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-y-3">
            {inputs.map((input)=>(
                <Input key={input.id} {...input} onChange={handleChange} />
            ))}
            </div>
            <button className="btn-primary mt-5" type="submit">REZERVASYON YAP</button>
        </form>
        <div className="lg:flex-1 w-full ">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24489.253574514107!2d32.66445622032564!3d39.89312385012616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d3398fdad851c7%3A0x36c909c716b1a668!2sTavolo%20Mio%20Brasserie!5e0!3m2!1str!2str!4v1682709623405!5m2!1str!2str" 
         allowFullScreen="" loading="lazy"  referrerPolicy="no-referrer-when-downgrade" className="w-full h-full "></iframe>
        </div>
       </div>
    </div>
  )
}

export default Reservation