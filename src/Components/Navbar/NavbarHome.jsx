import React, { useEffect, useState } from "react";
import { GrInstagram } from "react-icons/gr";
import { FaFacebookF } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import logo from "../../assets/images/Gallops Bar & Kitchen white-01.png";
import logo1 from "../../assets/images/Gallops Logo Black-01.png";

import { Link } from "react-router-dom";

function NavabarHome() {
  const [drop, setDrop] = useState(false);
  const [show, setShow] = useState(false);
function handleclick(){
  setDrop(!drop)
}
  const tarns = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", tarns);
    return () => window.removeEventListener("scroll", tarns);
  }, []);

  function handledrop() {
    setDrop(!drop);
  }
  return (
    <div>
      <div className="">
        

        {show ? (
          <div className="fixed w-full top-0 z-50 overflow-x-hidden bg-[#333333] transition-all duration-500 ">
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
                  <a href="https://tmt.spotapps.co/job-listings?spot_id=91648&callback_url=http%3A%2F%2Fgalloskitchen.com%2F&_gl=1%2a1umxaoc%2a_ga%2aMjA2OTI3ODQxMi4xNzAwNzExMDg0%2a_ga_VG24VK2VKT%2aMTcwMTc1NzkzMS4yMS4xLjE3MDE3NTg2MTEuMC4wLjA.%2a_ga_6JZXZZX2BB%2aMTcwMTc1NzkzMS4yMS4xLjE3MDE3NTg2MTEuMC4wLjA.&_ga=2.72203153.347819125.1701674166-2069278412.1700711084"> JOBS</a>
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
                  <a href="https://tmt.spotapps.co/job-listings?spot_id=91648&callback_url=http%3A%2F%2Fgalloskitchen.com%2F&_gl=1%2a1umxaoc%2a_ga%2aMjA2OTI3ODQxMi4xNzAwNzExMDg0%2a_ga_VG24VK2VKT%2aMTcwMTc1NzkzMS4yMS4xLjE3MDE3NTg2MTEuMC4wLjA.%2a_ga_6JZXZZX2BB%2aMTcwMTc1NzkzMS4yMS4xLjE3MDE3NTg2MTEuMC4wLjA.&_ga=2.72203153.347819125.1701674166-2069278412.1700711084"> JOBS</a>
                </li>
                
              </ul>
            </div>
            {/* laptop  */}
            
          </div>
        ) :(<div className="fixed w-full top-0 z-10 overflow-x-hidden transition-all duration-500 ">
        <div className="flex items-center justify-between">
        <Link to="/" className="lg:mx-auto">
          <img
            className="object-contain mt-2 w-[150px] ms-5 lg:w-[300px] transition-all duration-500 lg:mx-auto"
            src={logo1}
          />
          </Link>
          {/* mobile */}
          <div className="flex justify-center items-center lg:hidden">
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
            <div>
              <FaBars
                onClick={handledrop}
                className="text-white text-3xl me-2"
              />
            </div>
          </div>
        </div>
        <div className="w-[1400px] mx-auto mt-3 lg:mt-4 h-[2px] bg-white"></div>
        {/* mobile nav */}
        <div
          className={
            drop
              ? "h-[240px] transition-all duration-1000 w-[100%] bg-[#333333] bg-opacity-[0.9] lg:hidden"
              : "h-0 transition-all duration-1000 w-[100%] bg-[#333333] opacity-0 lg:hidden overflow-hidden"
          }
        >
          <ul className="flex flex-col   justify-center font-[Lato] gap-3 ">
          <li onClick={handleclick} className="text-white mt-2 ms-4 cursor-pointer hover:text-[#E8AF33]">
           <Link to="/Menu" >MENU</Link>
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
              <a href="https://tmt.spotapps.co/job-listings?spot_id=91648&callback_url=http%3A%2F%2Fgalloskitchen.com%2F&_gl=1%2a1umxaoc%2a_ga%2aMjA2OTI3ODQxMi4xNzAwNzExMDg0%2a_ga_VG24VK2VKT%2aMTcwMTc1NzkzMS4yMS4xLjE3MDE3NTg2MTEuMC4wLjA.%2a_ga_6JZXZZX2BB%2aMTcwMTc1NzkzMS4yMS4xLjE3MDE3NTg2MTEuMC4wLjA.&_ga=2.72203153.347819125.1701674166-2069278412.1700711084"> JOBS</a>
            </li>
            
          </ul>
        </div>
        {/* laptop  */}
        <div className="mt-3 lg:flex items-center justify-center hidden ">
          <ul className="flex gap-5 justify-center text-lg items-center">
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
              <a href="https://tmt.spotapps.co/job-listings?spot_id=91648&callback_url=http%3A%2F%2Fgalloskitchen.com%2F&_gl=1%2a1umxaoc%2a_ga%2aMjA2OTI3ODQxMi4xNzAwNzExMDg0%2a_ga_VG24VK2VKT%2aMTcwMTc1NzkzMS4yMS4xLjE3MDE3NTg2MTEuMC4wLjA.%2a_ga_6JZXZZX2BB%2aMTcwMTc1NzkzMS4yMS4xLjE3MDE3NTg2MTEuMC4wLjA.&_ga=2.72203153.347819125.1701674166-2069278412.1700711084"> JOBS</a>
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
      </div>) }
      </div>
    </div>
  );
}

export default NavabarHome;