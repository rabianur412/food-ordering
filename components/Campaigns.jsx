import Image from "next/image";
import Title from "./ui/Title";
import {FaShoppingCart} from "react-icons/fa"
const CamapignItem = () =>{
    return (
        <div className="bg-secondary flex-1 rounded-md py-5 px-[15px] flex items-center gap-x-5">
            <div className="relative w-40 h-40 after:content-['']
            border-[5px] border-primary rounded-full overflow-hidden">
                <Image src="/images/o1.jpg" className="hover:scale-105 transition-all" alt="" layout="fill" objectFit="cover"/>
            </div>
            <div className="text-white">
               <Title addClass="text-2xl">Cuma Günü Özel</Title> 
                <div className="font-dancing my-1">
                  <span className="text-[40px] "> 20% </span>
                  <span className="text-2xl inline-block ml-[2px]" > İndirim</span>
                </div>
                <button className="btn-primary flex items-center gap-x-2">Sipariş Ver<FaShoppingCart /></button>
            </div>
        </div>
    )

}
const CamapignItem2 = () =>{
    return (
        <div className="bg-secondary flex-1 rounded-md py-5 px-[15px] flex items-center gap-x-5">
            <div className="relative w-40 h-40 after:content-['']
            border-[5px] border-primary rounded-full overflow-hidden">
                <Image src="/images/o2.jpg" className="hover:scale-105 transition-all" alt="" layout="fill" objectFit="cover"/>
            </div>
            <div className="text-white">
               <Title addClass="text-2xl">Pizza Günleri</Title> 
                <div className="font-dancing my-1">
                  <span className="text-[40px] "> 35% </span>
                  <span className="text-2xl inline-block ml-[2px]" > İndirim</span>
                </div>
                <button className="btn-primary flex items-center gap-x-2">Sipariş Ver<FaShoppingCart /></button>
            </div>
        </div>
    )

}
const Campaigns = () => {
  return (
    <div className="flex justify-between container mx-auto py-20 gap-6 flex-wrap">
        <CamapignItem />
        <CamapignItem2 />
      
    </div>
  )
}

export default Campaigns