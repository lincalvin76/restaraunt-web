import "../css/Home.css"
import { FaShoppingCart, FaBars, FaTimes, FaInstagram, FaFacebookSquare, FaImages} from "react-icons/fa";
import { RiCalendarScheduleFill } from "react-icons/ri";

import { useState } from "react";
import { Link } from "react-router-dom";

export function About() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <div className="background w-full bg-cover bg-center relative flex-grow">
            <div className="w-full h-20 bg-linear-180 from-black to-zinc-900 absolute z-0 rounded-b-lg"></div>

            <div className="hidden lg:flex flex-row gap-x-8 justify-center pt-6">
                <div className="absolute left-1/16 font-mono text-3xl md:text-4xl text-green-500 z-2">新福建</div>
                <div className="font-mono text-4xl text-white hover:scale-110 transition-all duration-300 z-2"><Link to="/">HOME</Link></div>
                <div className="font-mono text-4xl text-white hover:scale-110 transition-all duration-300 z-2"><Link to="/menu">MENU</Link></div>
                <div className="font-mono text-4xl text-red-500 hover:scale-110 transition-all duration-300 z-2"><Link to="/about">ABOUT</Link></div>
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
                <div className="font-mono text-4xl text-red-500 hover:scale-110 transition-all duration-300 z-2"><Link to="/about">ABOUT</Link></div>
                <div className="font-mono text-4xl text-white hover:scale-110 transition-all duration-300 z-2"><Link to="/contact">CONTACT</Link></div>
              </div>
            )}

            <div className="flex flex-col justify-center py-15 px-10 md:flex-row">
              <div className="md:h-180 md:w-1/2 bg-linear-to-tr from-black to-zinc-900 rounded-t-md md:rounded-l-md font-mono text-white text-center flex flex-col overflow-y-auto">
                  <div className="flex-1 flex flex-col justify-center">
                    <p className="text-3xl md:text-6xl pt-5"><u>About Us</u></p>
                    <p className="text-md px-2 md:text-4xl md:px-7 py-5">
                      Our restaurant has been proudly serving the community since the current owners took over in 2009.
                      From day one, our mission has been simple: to run a successful business while bringing people together
                      over great food. Known best for our mouthwatering chicken wings, we've built a loyal following of guests
                      who keep coming back for the flavors they love. Whether you're here for a quick bite or to share a meal with friends,
                      we're committed to delivering quality, value, and a welcoming experience every time.
                    </p>
                  </div>
                </div>
              <div className="md:h-auto md:w-auto">
                <img src="/images/guy.png" className="w-full h-full object-cover rounded-b-md md:rounded-r-md"></img>
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

