import React from "react";
import "../index.css"
function Address() {
  return (
    <div>
      {" "}
      <div className="">
        <div className="bg-[#333333] flex flex-col lg:flex-row items-center justify-center lg:justify-evenly gap-9 lg:gap-0 lg:items-start pb-10 pt-10  w-full">
        <div className="text-white flex flex-col items-center  justify-center gap-3">
          <h1 className=" font-vast-shadow  text-2xl text-[#e8af3e]">Hours</h1>
          <div>
            <p>Monday- Closed</p>
          </div>
         <div className="text-center  text-lg ">
          <p>Tuesday - Saturday</p>
          <p>11.30am - 10pm</p>
         </div>
         <div className="text-center">
          <p> Saturday</p>
          <p>11:30pm - 9pm</p>
         </div>
          
        </div>
        <div className="text-white flex flex-col items-center  justify-center gap-3">
          <h1 className=" font-vast-shadow text-2xl text-[#e8af3e]">Address</h1>
          <h5 className="w-[150px] text-center text-lg">Map Marker Pin 240 North Liberty Street, Powell, OH 43065</h5>
          <div>
            <a href="https://maps.app.goo.gl/x6UTMqhrbeXEJMCc7">
            <button className="px-7 font-semibold py-2  hover:bg-black hover:text-[#e8af3e] bg-[#E8AF3E]">Directions</button>
            </a>
            </div>
            </div>
        
       
        <div className="text-white flex flex-col items-center  justify-center gap-3">
          <h1 className=" font-vast-shadow  text-2xl text-[#e8af3e]">Contact</h1>
          <div className="text-center text-lg">
          <p>(614)-754-8176</p>
          <p>Gallopspowell@gmail.com</p>
         </div>
        
        </div>

        </div>
      </div>
      
    </div>
    
  );
}

export default Address;
