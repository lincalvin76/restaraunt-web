import "../css/Home.css"
import { FaShoppingCart } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { RiCalendarScheduleFill } from "react-icons/ri";

import { Link } from "react-router-dom";

export function Menu() {
  return (
    <div className="background min-h-screen w-full bg-cover bg-center relative">
        <div className="w-full h-20 bg-linear-180 from-black to-zinc-900 absolute z-0 rounded-b-lg"></div>

        <div className="flex flex-row gap-x-8 justify-center pt-6">
            <div className="absolute left-1/16 font-mono text-4xl text-green-500 z-2">新福建</div>
            <div className="font-mono text-4xl text-white hover:scale-110 transition-all duration-300 z-2"><Link to="/">HOME</Link></div>
            <div className="font-mono text-4xl text-red-500 hover:scale-110 transition-all duration-300 z-2"><Link to="/menu">MENU</Link></div>
            <div className="font-mono text-4xl text-white hover:scale-110 transition-all duration-300 z-2"><Link to="/about">ABOUT</Link></div>
            <div className="font-mono text-4xl text-white hover:scale-110 transition-all duration-300 z-2"><Link to="/contact">CONTACT</Link></div>
            <div className="absolute right-1/16 hover:scale-110 transition-all duration-300"><FaShoppingCart color="white" size="35"/></div>
        </div>
        



        <div className="w-full h-20 bg-linear-0 from-black to-zinc-900 absolute z-0 rounded-t-lg bottom-0 flex flex-row gap-x-6 justify-center items-center">
            <a href="#" target="_blank" className="hover:scale-110 transition-all duration-300"><FaFacebookSquare color="white" size="35"/></a>
            <a href="#" target="_blank" className="hover:scale-110 transition-all duration-300"><FaInstagram color="white" size="35"/></a>
            <a href="#" target="_blank" className="hover:scale-110 transition-all duration-300"><RiCalendarScheduleFill color="white" size="35"/></a>
        </div>
    </div>
  )
}

