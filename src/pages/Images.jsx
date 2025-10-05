import "../css/Home.css"
import { FaShoppingCart, FaBars, FaTimes, FaInstagram, FaFacebookSquare, FaImages} from "react-icons/fa";
import { RiCalendarScheduleFill } from "react-icons/ri";

import { useState } from "react";
import { Link } from "react-router-dom";

export function Image() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <div className="background w-full bg-cover bg-center relative flex-grow">
        <div className="w-full h-20 bg-linear-180 from-black to-zinc-900 absolute z-0 rounded-b-lg"></div>

        <div className="hidden lg:flex flex-row gap-x-8 justify-center pt-6">
            <div className="absolute left-1/16 font-mono text-3xl md:text-4xl text-green-500 z-2">新福建</div>
            <div className="font-mono text-4xl text-white hover:scale-110 transition-all duration-300 z-2"><Link to="/">HOME</Link></div>
            <div className="font-mono text-4xl text-white hover:scale-110 transition-all duration-300 z-2"><Link to="/menu">MENU</Link></div>
            <div className="font-mono text-4xl text-white hover:scale-110 transition-all duration-300 z-2"><Link to="/about">ABOUT</Link></div>
            <div className="font-mono text-4xl text-white hover:scale-110 transition-all duration-300 z-2"><Link to="/contact">CONTACT</Link></div>
            <div className="absolute right-1/16 hover:scale-110 transition-all duration-300"><FaShoppingCart color="white" size="35"/></div>
            <div className="absolute right-4/32 hover:scale-110 transition-all duration-300"><Link to="/images"><FaImages color="white" size="35"/></Link></div>
        </div>

        <div className="lg:hidden flex flex-row gap-x-8 justify-center pt-6">
          <div className="absolute left-1/16 font-mono text-3xl md:text-4xl text-green-500 z-2">新福建</div>
          <div className="z-2">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <FaTimes color="white" size="35"/> : <FaBars color="white" size="35"/>}
            </button>
          </div>
            <div className="absolute right-1/16 hover:scale-110 transition-all duration-300"><FaShoppingCart color="white" size="35"/></div>
            <div className="absolute right-6/32 hover:scale-110 transition-all duration-300"><Link to="/images"><FaImages color="white" size="35"/></Link></div>
        </div>

        {menuOpen && (
          <div className="absolute left-0 w-full bg-black flex flex-col items-center gap-y-4 py-4 lg:hidden z-2">
            <div className="font-mono text-4xl text-white hover:scale-110 transition-all duration-300 z-2"><Link to="/">HOME</Link></div>
            <div className="font-mono text-4xl text-white hover:scale-110 transition-all duration-300 z-2"><Link to="/menu">MENU</Link></div>
            <div className="font-mono text-4xl text-white hover:scale-110 transition-all duration-300 z-2"><Link to="/about">ABOUT</Link></div>
            <div className="font-mono text-4xl text-white hover:scale-110 transition-all duration-300 z-2"><Link to="/contact">CONTACT</Link></div>
          </div>
        )}
        
        <div className="flex items-center justify-center py-30">
            <div className="flex overflow-x-scroll space-x-4 p-4 w-1/2 bg-linear-to-tl from-black to-zinc-900 p-5">
                <img src="/images/place1.png" alt="Street View" className="font-mono text-4x1 text-white w-256 h-128 object-cover"></img>
                <img src="/images/place2.png" alt="Street View2" className="font-mono text-4x1 text-white w-256 h-128 object-cover"></img>
                <img src="/images/foodex.jpg" alt="foodex" className="font-mono text-4x1 text-white w-256 h-128 object-cover"></img>
                <img src="/images/foodex1.jpg" alt="foodex1" className="font-mono text-4x1 text-white w-256 h-128 object-cover"></img>
                <img src="/images/foodex2.jpg" alt="foodex2" className="font-mono text-4x1 text-white w-256 h-128 object-cover"></img>
                <img src="/images/foodex3.jpg" alt="foodex3" className="font-mono text-4x1 text-white w-256 h-128 object-cover"></img>
                <img src="/images/foodex4.jpeg" alt="foodex4" className="font-mono text-4x1 text-white w-256 h-128 object-cover"></img>
            </div>
        </div>


      </div>

      <div className="w-full h-20 bg-linear-0 from-black to-zinc-900 z-0 rounded-t-lg flex gap-x-6 justify-center items-center">
          <a href="#" target="_blank" className="hover:scale-110 transition-all duration-300"><FaFacebookSquare color="white" size="35"/></a>
          <a href="#" target="_blank" className="hover:scale-110 transition-all duration-300"><FaInstagram color="white" size="35"/></a>
          <a href="#" target="_blank" className="hover:scale-110 transition-all duration-300"><Link to="/schedule"><RiCalendarScheduleFill color="white" size="35"/></Link></a>
      </div>
    </div>
  )
}

