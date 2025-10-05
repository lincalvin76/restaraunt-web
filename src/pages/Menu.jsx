import "../css/Home.css"
import { FaShoppingCart, FaBars, FaTimes, FaInstagram, FaFacebookSquare, FaImages} from "react-icons/fa";
import { RiCalendarScheduleFill } from "react-icons/ri";

import { useState } from "react";
import { Link } from "react-router-dom";

export function Menu() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <div className="background w-full bg-cover bg-center relative flex-grow">
            <div className="w-full h-20 bg-linear-180 from-black to-zinc-900 absolute z-0 rounded-b-lg"></div>

            <div className="hidden lg:flex flex-row gap-x-8 justify-center pt-6">
                <div className="absolute left-1/16 font-mono text-3xl md:text-4xl text-green-500 z-2">新福建</div>
                <div className="font-mono text-4xl text-white hover:scale-110 transition-all duration-300 z-2"><Link to="/">HOME</Link></div>
                <div className="font-mono text-4xl text-red-500 hover:scale-110 transition-all duration-300 z-2"><Link to="/menu">MENU</Link></div>
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
                <div className="font-mono text-4xl text-red-500 hover:scale-110 transition-all duration-300 z-2"><Link to="/menu">MENU</Link></div>
                <div className="font-mono text-4xl text-white hover:scale-110 transition-all duration-300 z-2"><Link to="/about">ABOUT</Link></div>
                <div className="font-mono text-4xl text-white hover:scale-110 transition-all duration-300 z-2"><Link to="/contact">CONTACT</Link></div>
              </div>
            )}
            
            <div className="flex flex-row flex-wrap gap-x-5 gap-y-5 items-center justify-center w-full py-30">
              <div className="bg-slate-900 shadow-lg hover:scale-110 transition-all duration-300">
                <img src="/images/gts.jpg" alt="General Tso Chicken" className="font-mono text-4x1 text-white size-70 object-cover"></img>
                <p className="font-mono text-4x1 text-white text-center p-2">General Tso's Chicken</p>
                <p className="font-mono text-4x1 text-white text-center px-2 pb-2">$7.75</p>
              </div>
              <div className="bg-slate-900 shadow-lg hover:scale-110 transition-all duration-300">
                <img src="/images/ssr.jpg" alt="Shrimp Egg Roll" className="font-mono text-4x1 text-white size-70 object-cover"></img>
                <p className="font-mono text-4x1 text-white text-center p-2">Shrimp Egg Roll (1 Piece)</p>
                <p className="font-mono text-4x1 text-white text-center px-2 pb-2">$1.50</p>
              </div>
              <div className="bg-slate-900 shadow-lg hover:scale-110 transition-all duration-300">
                <img src="/images/tc.jpg" alt="Teriyaki Chicken" className="font-mono text-4x1 text-white size-70 object-cover"></img>
                <p className="font-mono text-4x1 text-white text-center p-2">Teriyaki Chicken (4 Pieces)</p>
                <p className="font-mono text-4x1 text-white text-center px-2 pb-2">$4.25</p>
              </div>
              <div className="bg-slate-900 shadow-lg hover:scale-110 transition-all duration-300">
                <img src="/images/eds.jpg" alt="Egg Drop Soup" className="font-mono text-4x1 text-white size-70 object-cover"></img>
                <p className="font-mono text-4x1 text-white text-center p-2">Egg Drop Soup</p>
                <pre className="font-mono text-4x1 text-white text-center px-2 pb-2">Pt: $2.00    Qt: $3.75</pre>
              </div>
              <div className="bg-slate-900 shadow-lg hover:scale-110 transition-all duration-300">
                <img src="/images/cfr.jpg" alt="Chicken Fried Rice" className="font-mono text-4x1 text-white size-70 object-cover"></img>
                <p className="font-mono text-4x1 text-white text-center p-2">Chicken Fried Rice</p>
                <pre className="font-mono text-4x1 text-white text-center px-2 pb-2">Pt: $5.50    Qt: $8.25</pre>
              </div>
              <div className="bg-slate-900 shadow-lg hover:scale-110 transition-all duration-300">
                <img src="/images/fcw.jpg" alt="Fried Chicken Wings" className="font-mono text-4x1 text-white size-70 object-cover"></img>
                <p className="font-mono text-4x1 text-white text-center p-2">Fried Chicken Wings (4 Pieces)</p>
                <p className="font-mono text-4x1 text-white text-center px-2 pb-2">$6.75</p>
              </div>
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

