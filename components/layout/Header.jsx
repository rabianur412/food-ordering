import Logo from "../ui/Logo"
import {FaUserAlt,FaSearch,FaShoppingCart} from "react-icons/fa"

const Header = () => {
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
            <FaUserAlt/>         
          </a>
          <a href="#">
          <FaShoppingCart/>
          </a>
          <a href="#">
          <FaSearch/>
          </a>
          <a href="#">
          <button className="btn-primary">Siparişlerim</button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Header