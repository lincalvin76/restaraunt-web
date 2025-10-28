import "../css/Home.css"
import { FaShoppingCart, FaBars, FaTimes, FaInstagram, FaFacebookSquare, FaImages} from "react-icons/fa";
import { RiCalendarScheduleFill } from "react-icons/ri";

import { useState } from "react";
import { Link } from "react-router-dom";

import { useCart } from "../Cart";

export function Home() {

  const [menuOpen, setMenuOpen] = useState(false);
  const {cartOpen, setCartOpen} = useCart();

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <div className="background w-full bg-cover bg-center relative flex-grow">
        <div className="w-full h-20 bg-linear-180 from-black to-zinc-900 absolute z-0 rounded-b-lg"></div>

        <div className="hidden lg:flex flex-row gap-x-8 justify-center pt-6">
            <div className="absolute left-1/16 font-mono text-3xl md:text-4xl text-green-500 z-2">新福建</div>
            <div className="font-mono text-4xl text-red-500 hover:scale-110 transition-all duration-300 z-2"><Link to="/">HOME</Link></div>
            <div className="font-mono text-4xl text-white hover:scale-110 transition-all duration-300 z-2"><Link to="/menu">MENU</Link></div>
            <div className="font-mono text-4xl text-white hover:scale-110 transition-all duration-300 z-2"><Link to="/about">ABOUT</Link></div>
            <div className="font-mono text-4xl text-white hover:scale-110 transition-all duration-300 z-2"><Link to="/contact">CONTACT</Link></div>
            <div className="absolute right-1/16 hover:scale-110 transition-all duration-300" onClick={() => setCartOpen(!cartOpen)}><FaShoppingCart color="white" size="35"/></div>
            <div className="absolute right-4/32 hover:scale-110 transition-all duration-300"><Link to="/images"><FaImages color="white" size="35"/></Link></div>
        </div>

        <div className="lg:hidden flex flex-row gap-x-8 justify-center pt-6">
          <div className="absolute left-1/16 font-mono text-3xl md:text-4xl text-green-500 z-2">新福建</div>
          <div className="z-2">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <FaTimes color="white" size="35"/> : <FaBars color="white" size="35"/>}
            </button>
          </div>
            <div className="absolute right-1/16 hover:scale-110 transition-all duration-300" onClick={() => setCartOpen(!cartOpen)}><FaShoppingCart color="white" size="35"/></div>
            <div className="absolute right-6/32 hover:scale-110 transition-all duration-300"><Link to="/images"><FaImages color="white" size="35"/></Link></div>
        </div>

        {menuOpen && (
          <div className="absolute left-0 w-full bg-black flex flex-col items-center gap-y-4 py-4 lg:hidden z-2">
            <div className="font-mono text-4xl text-red-500 hover:scale-110 transition-all duration-300 z-2"><Link to="/">HOME</Link></div>
            <div className="font-mono text-4xl text-white hover:scale-110 transition-all duration-300 z-2"><Link to="/menu">MENU</Link></div>
            <div className="font-mono text-4xl text-white hover:scale-110 transition-all duration-300 z-2"><Link to="/about">ABOUT</Link></div>
            <div className="font-mono text-4xl text-white hover:scale-110 transition-all duration-300 z-2"><Link to="/contact">CONTACT</Link></div>
          </div>
        )}
        
        <div className="flex flex-col items-center justify-center w-full py-30 2xl:pt-45">
            <div className="font-mono text-6xl mb-5 text-center text-red-500 bg-[rgba(0,0,0,0.75)] rounded-sm py-2 w-11/12 md:w-1/3">New Food King</div>
            <div className="font-mono text-lg text-center text-white bg-[rgba(0,0,0,0.75)] rounded-sm p-5 w-11/12 md:w-1/4">
              <p>Chinese Food To Take Out</p>
              <p>1460 Rockaway Parkway</p>
              <p>Tel: 718-257-3610/3690</p>
            </div>
            <button className="bg-red-500 text-white rounded-full py-4 px-6 mt-6 hover:scale-110 transition-all duration-300">Order Now</button>
        </div>
      </div>

      <div className="w-full h-20 bg-linear-0 from-black to-zinc-900 z-0 rounded-t-lg flex gap-x-6 justify-center items-center">
          <a href="https://www.facebook.com" target="_blank" className="hover:scale-110 transition-all duration-300"><FaFacebookSquare color="white" size="35"/></a>
          <a href="https://www.instagram.com" target="_blank" className="hover:scale-110 transition-all duration-300"><FaInstagram color="white" size="35"/></a>
          <a href="#" target="_blank" className="hover:scale-110 transition-all duration-300"><Link to="/schedule"><RiCalendarScheduleFill color="white" size="35"/></Link></a>
      </div>
    </div>
  )
}

