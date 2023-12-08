import React from 'react'
import logo from "../assets/images/opentable.png"
import logosm from "../assets/images/opentable copy.png"
import { IoPersonOutline } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa6"
import bg from "../assets/images/Backdrop3.png"

function Reservation() {
  return (
    <div>
        <div className="bg-[#333333] bg-cover bg-center    w-full" style={{ backgroundImage: `url(${bg})` }}>
        <div className=" flex items-center justify-center pt-16 flex-col  h-full gap-3 pb-16 ">
          <h1 className="font-vast-shadow text-[#E8AF33] text-2xl pt-4 lg:pt-0 lg:text-5xl" data-aos="flip-up">
            RESERVATIONS
          </h1>
          <p data-aos="zoom-out-up" className="font-[Antonio] text-white text-lg text-center lg:text-start">
            Call us at <span className="underline">(614)-754-8176</span> or book
            a table through Open Table:
          </p>
          <div data-aos="zoom-in-up" className="mt-5 flex flex-col items-center gap-3 px-4 pt-4 overflow-hidden">
            <p className=" text-white  font-semibold text-lg mb-2">Find a Table</p>
            <form className="flex flex-col gap-3 ">
              <div className="flex items-center justify-center cursor-pointer gap-1 bg-white h-[40px] w-[230px] px-2 border-2 ">
                <label htmlFor="register">
                  {" "}
                  <IoPersonOutline className="text-lg cursor-pointer" />
                </label>
                <select className="mx-auto outline-none border-none w-full bg-white cursor-pointer">
                  <option>2 People</option>
                  <option>3 People</option>
                  <option>4 People</option>
                  <option>5 People</option>
                  <option>6 People</option>
                  <option>7 People</option>
                  <option>8 People</option>
                  <option>9 People</option>
                  <option>10 People</option>
                  <option>11 People</option>
                  <option>12 People</option>
                  <option>13 People</option>
                  <option>14 People</option>
                  <option>15 People</option>
                  <option>16 People</option>
                  <option>17 People</option>
                  <option>18 People</option>
                  <option>19 People</option>
                  <option>20 People</option>
                </select>
              </div>
              <div className="flex bg-white items-center justify-center cursor-pointer gap-1 b h-[40px] w-[230px] px-3 border-2 ">
                <input
                  className="mx-auto outline-none border-none w-full bg-white cursor-pointer placeholder:text-black"
                  placeholder="Today"
                  type="date"
                />
              </div>
              <div className='flex items-center cursor-pointer justify-center gap-1 bg-white h-[40px] w-[230px] px-2 border-2 '>
              <label htmlFor="register" >  <FaRegClock className='text-lg cursor-pointer' /></label>
                <select className='mx-auto outline-none border-none w-full bg-white cursor-pointer'>
                    <option>Now</option>
                    <option>12.30 Pm</option>
                    <option>01.00 Pm</option>
                    <option>01.30 Pm</option>
                    <option>02.00 Pm</option>
                    <option>02.30 Pm</option>
                    <option>03.00 Pm</option>
                    <option>03.30 Pm</option>
                    <option>04.00 Pm</option>
                    <option>04.30 Pm</option>
                    <option>05.00 Pm</option>
                    <option>05.30 Pm</option>
                    <option>06.00 Pm</option>
                    <option>06.30 Pm</option>
                    <option>07.00 Pm</option>
                    <option>07.30 Pm</option>
                    <option>08.00 Pm</option>
                    <option>08.30 Pm</option>
                    <option>09.00 Pm</option>
                </select>
                </div>
                <div className="bg-[#DA3743] flex items-center justify-center hover:bg-opacity-60 cursor-pointer h-[40px] w-[230px] px-2">
                  <a href='https://www.opentable.com/restref/client?rid=278041&restref=278041&partysize=2&datetime=2023-12-05T07%3A00&lang=en-US&r3uid=YF63gqMQm&color=1'>
                    <button  className=" text-white" type="button">Find a Table</button>
                    </a>
                </div>
            </form>
            <img className="text-start w-[100px] lg:mt-5 hidden lg:block" src={logo}/>
            <img className="text-start w-[100px] lg:mt-5 mt-0 lg:hidden" src={logosm}/>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Reservation