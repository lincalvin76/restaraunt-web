import "../css/Home.css"
import { FaShoppingCart, FaBars, FaTimes, FaInstagram, FaFacebookSquare, FaImages} from "react-icons/fa";
import { RiCalendarScheduleFill } from "react-icons/ri";

import { useState } from "react";
import { Link } from "react-router-dom";

import { useCart } from "../Cart";

export function Contact() {

  const [menuOpen, setMenuOpen] = useState(false);
  const {cartOpen, setCartOpen} = useCart();

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <div className="background w-full bg-cover bg-center relative flex-grow">
            <div className="w-full h-20 bg-linear-180 from-black to-zinc-900 absolute z-0 rounded-b-lg"></div>

            <div className="hidden lg:flex flex-row gap-x-8 justify-center pt-6">
                <div className="absolute left-1/16 font-mono text-3xl md:text-4xl text-green-500 z-2">新福建</div>
                <div className="font-mono text-4xl text-white hover:scale-110 transition-all duration-300 z-2"><Link to="/">HOME</Link></div>
                <div className="font-mono text-4xl text-white hover:scale-110 transition-all duration-300 z-2"><Link to="/menu">MENU</Link></div>
                <div className="font-mono text-4xl text-white hover:scale-110 transition-all duration-300 z-2"><Link to="/about">ABOUT</Link></div>
                <div className="font-mono text-4xl text-red-500 hover:scale-110 transition-all duration-300 z-2"><Link to="/contact">CONTACT</Link></div>
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
                <div className="font-mono text-4xl text-white hover:scale-110 transition-all duration-300 z-2"><Link to="/">HOME</Link></div>
                <div className="font-mono text-4xl text-white hover:scale-110 transition-all duration-300 z-2"><Link to="/menu">MENU</Link></div>
                <div className="font-mono text-4xl text-white hover:scale-110 transition-all duration-300 z-2"><Link to="/about">ABOUT</Link></div>
                <div className="font-mono text-4xl text-red-500 hover:scale-110 transition-all duration-300 z-2"><Link to="/contact">CONTACT</Link></div>
              </div>
            )}
        
            <div className="w-full pt-10 flex flex-col justify-center items-center">
              <p className="font-mono text-2xl text-white text-center bg-black px-4 rounded-sm">Location</p>
              <div className="w-11/12 md:w-1/2 rounded-sm overflow-hidden">
                <iframe className="bg-linear-180 from-black to-zinc-900 p-4 w-full h-80 md:h-120" title="Restaraunt Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d756.8343394070263!2d-73.90244697143386!3d40.64449329820529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25cc2a14245a1%3A0x6d6fd64be0d5e7e5!2sNew%20Food%20King!5e0!3m2!1sen!2sus!4v1759378519852!5m2!1sen!2sus"></iframe>
              </div>
            </div>

            <div className="w-full pt-10 flex flex-col justify-center items-center pb-20">
              <div className="flex flex-col items-start w-1/2 gap-2 bg-linear-to-r from-black to-zinc-900 p-5 rounded-sm w-11/12 md:w-1/2">
                <div className="self-center font-mono text-2xl text-white"><u>Contact</u></div>
                <p className="font-mono text-2xl text-white">Name:</p>
                <input className="font-mono text-2xl bg-white w-full rounded-sm" name="Name"></input>
                <p className="font-mono text-2xl text-white">Email:</p>
                <input className="font-mono text-2xl bg-white w-full rounded-sm" name="Email"></input>
                <p className="font-mono text-2xl text-white">Message:</p>
                <textarea className="font-mono text-2xl bg-white w-full h-64 rounded-sm" name="Message"></textarea>

                <button className="bg-red-500 text-white rounded-full hover:scale-110 transition-all duration-300 self-center px-5 py-2 mt-5">Submit</button>
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

