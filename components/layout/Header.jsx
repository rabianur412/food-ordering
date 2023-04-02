import { useState } from "react"
import {FaUserAlt,FaSearch,FaShoppingCart} from "react-icons/fa"
import Logo from "../ui/Logo"
import OutsideClickHandler from "react-outside-click-handler"
import Title from "../ui/Title"

const Header = () => {
  const [isSearchModal, setIsSearchModal] = useState(false)
  return (
    <div className="h-[5.5rem] bg-secondary "> 
      <div className="container mx-auto text-white flex justify-between items-center h-full">
            <Logo/>
        <nav>
          <ul className="flex gap-x-2">
            <li className="px-[5px] py-[12px] uppercase hover:text-primary cursor-pointer">
              <a href="">Ana Sayfa</a>
            </li>
            <li className="px-[5px] py-[12px] uppercase hover:text-primary cursor-pointer">
              <a href="">Menü</a>
            </li>
            <li className="px-[5px] py-[12px] uppercase hover:text-primary cursor-pointer">
              <a href="">Hakkında</a>
            </li>
            <li className="px-[5px] py-[12px] uppercase hover:text-primary cursor-pointer">
              <a href="">Book Table</a>
            </li>
          </ul>
        </nav>
        <div className="flex gap-x-4 items-center">
          <a href="#">
            <FaUserAlt className="hover:text-primary cursor-pointer"/>         
          </a>
          <a href="#">
          <FaShoppingCart className="hover:text-primary cursor-pointer"/>
          </a>
          <button onClick={()=>setIsSearchModal(true)}>
          <FaSearch className="hover:text-primary cursor-pointer"/>
          </button>
          <a href="#">
          <button className="btn-primary">Siparişlerim</button>
          </a>
        </div>
      </div>
      {isSearchModal && (
        <OutsideClickHandler onOutsideClick={()=>setIsSearchModal(false)}>
         <div >
          <Title addClass="text-9xl">Title</Title>

         </div>
      </OutsideClickHandler>
      )}
    </div>
  )
}

export default Header