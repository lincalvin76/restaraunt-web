import "../css/Home.css"
import { FaShoppingCart } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { RiCalendarScheduleFill } from "react-icons/ri";

import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <div className="background w-full bg-cover bg-center relative flex-grow">
            <div className="w-full h-20 bg-linear-180 from-black to-zinc-900 absolute z-0 rounded-b-lg"></div>

            <div className="flex flex-row gap-x-8 justify-center pt-6">
                <div className="absolute left-1/16 font-mono text-4xl text-green-500 z-2">新福建</div>
                <div className="font-mono text-4xl text-red-500 hover:scale-110 transition-all duration-300 z-2"><Link to="/">HOME</Link></div>
                <div className="font-mono text-4xl text-white hover:scale-110 transition-all duration-300 z-2"><Link to="/menu">MENU</Link></div>
                <div className="font-mono text-4xl text-white hover:scale-110 transition-all duration-300 z-2"><Link to="/about">ABOUT</Link></div>
                <div className="font-mono text-4xl text-white hover:scale-110 transition-all duration-300 z-2"><Link to="/contact">CONTACT</Link></div>
                <div className="absolute right-1/16 hover:scale-110 transition-all duration-300"><FaShoppingCart color="white" size="35"/></div>
            </div>
        
        <div className="flex flex-col absolute items-center justify-center top-1/4 w-full">
            <div className="font-mono text-6xl mb-5 w-1/3 text-center text-red-500 bg-[rgba(0,0,0,0.75)] rounded-sm py-2">New Food King</div>
            <div className="font-mono text-lg w-1/2 text-center text-white bg-[rgba(0,0,0,0.75)] rounded-sm p-5">Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</div>
            <button className="bg-red-500 text-white rounded-full py-4 px-6 mt-6 hover:scale-110 transition-all duration-300">Order Now</button>
        </div>
      </div>

      <div className="w-full h-20 bg-linear-0 from-black to-zinc-900 z-0 rounded-t-lg flex gap-x-6 justify-center items-center">
          <a href="#" target="_blank" className="hover:scale-110 transition-all duration-300"><FaFacebookSquare color="white" size="35"/></a>
          <a href="#" target="_blank" className="hover:scale-110 transition-all duration-300"><FaInstagram color="white" size="35"/></a>
          <a href="#" target="_blank" className="hover:scale-110 transition-all duration-300"><RiCalendarScheduleFill color="white" size="35"/></a>
      </div>
    </div>
  )
}

