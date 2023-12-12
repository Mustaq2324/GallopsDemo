import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import logo from "../../assets/images/Gallops Bar & Kitchen white-01.png";
import { GrInstagram } from "react-icons/gr";
import { FaFacebookF } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
function Navbar() {
    const [drop, setDrop] = useState(false);
    function handleclick(){
        setDrop(!drop)
      }
      function handledrop() {
        setDrop(!drop);
      }
  return (
    
    <div className=" w-full top-0 z-50 overflow-x-hidden bg-[#333333] transition-all duration-500 ">
            <div className="flex items-center justify-between ">
             <div> <Link to="/"  className="lg:mx-auto">
              <img
                className="  w-[150px] lg:w-[200px] transition-all duration-500 "
                src={logo}
              /></Link></div>
             
              {/* mobile */}
              <div className=" flex justify-center items-center me-1 lg:hidden">
                <div className="h-[30px] cursor-pointer  w-[30px] hover:bg-[#E8AF33] flex items-center justify-center">
                  <a href="https://www.instagram.com/galloskitchenua/">
                    <GrInstagram className="text-white rounded" />
                  </a>
                </div>
                <div className="h-[30px] cursor-pointer w-[30px] hover:bg-[#E8AF33] flex items-center justify-center ">
                  <a href="https://www.facebook.com/profile.php?id=61554266552277">
                    <FaFacebookF className="text-white  rounded " />
                  </a>
                </div>
                <div>
                  <FaBars
                    onClick={handledrop}
                    className="text-white text-3xl me-2"
                  />
                </div>
              </div>
              <div className="mt-1 lg:flex items-center justify-center hidden pb-2 lg:pb-0 me-8 ">
              <ul className="flex gap-5 justify-center text-lg items-center ">
              <li className="text-white cursor-pointer hover:text-[#E8AF33]">
               <Link to="/Menu" >MENU</Link>
                </li>
                <li className="text-white cursor-pointer hover:text-[#E8AF33]">
                  <a href="https://www.opentable.com/r/gallos-tap-room-powell"> RESERVE</a>
                </li>
                <li className="text-white cursor-pointer hover:text-[#E8AF33]">
                  <a href="https://gallostaproom-powell.hngr.co/menu"> ORDER</a>
                </li>
                <li className="text-white cursor-pointer hover:text-[#E8AF33]">
                   <Link to="/Event" >EVENTS</Link>
                </li>
                <li className="text-white cursor-pointer hover:text-[#E8AF33]">
                 <Link to="/Career">CAREER</Link>
                  
                </li>
               
                <div className="h-[30px] cursor-pointer w-[30px] hover:bg-[#E8AF33] flex items-center justify-center">
                  <a href="https://www.instagram.com/galloskitchenua/">
                    <GrInstagram className="text-white rounded" />
                  </a>
                </div>
                <div className="h-[30px] cursor-pointer w-[30px] hover:bg-[#E8AF33] flex items-center justify-center ">
                  <a href="https://www.facebook.com/profile.php?id=61554266552277">
                    <FaFacebookF className="text-white rounded " />
                  </a>
                </div>
              </ul>
            </div>




            </div>
          
            {/* mobile nav */}
            <div
              className={
                drop
                  ? "h-[240px]  transition-all duration-700 w-[100%] lg:hidden "
                  : "h-0 overflow-hidden transition-all duration-700 w-[100%]  opacity-0 lg:hidden"
              }
            >
              <ul className="flex flex-col ms-2 justify-center font-[Lato] gap-3 overflow-hidden ">
              <li onClick={handleclick} className="text-white mt-2 ms-4 cursor-pointer hover:text-[#E8AF33]">
               <Link to="/Menu"  >MENU</Link> 
                </li>
                <li onClick={handleclick} className="text-white mt-2 ms-4 cursor-pointer hover:text-[#E8AF33]">
                  <a href="https://www.opentable.com/r/gallos-tap-room-powell"> RESERVE</a>
                </li>
                <li onClick={handleclick} className="text-white mt-2 ms-4 cursor-pointer hover:text-[#E8AF33]">
                  <a href="https://gallostaproom-powell.hngr.co/menu"> ORDER</a>
                </li>
                <li onClick={handleclick} className="text-white mt-2 ms-4 cursor-pointer hover:text-[#E8AF33]">
                   <Link to="/Event" >EVENTS</Link>
                </li>
                <li onClick={handleclick} className="text-white mt-2 ms-4 cursor-pointer hover:text-[#E8AF33]">
                 <Link to="/Career">CAREER</Link>
                </li>
                
              </ul>
            </div>
            {/* laptop  */}
            
          </div>
  )
}

export default Navbar