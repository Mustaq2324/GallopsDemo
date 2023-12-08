import React from 'react'
import logo from "../../assets/images//order_button.png"
function Online() {
  return (
    <div>
        <div className='bg-[#333333] h-[350px] w-full' >
    <div className=' flex items-center justify-center flex-col h-full gap-3'>
        <h1 data-aos="zoom-in" className='font-vast-shadow text-[#E8AF33] text-2xl pt-5 lg:pt-0 lg:text-5xl'>ORDER ONLINE</h1>
        <h2 data-aos="zoom-in-up" className='font-[Lato] text-xl text-white font-semibold'>PICK UP YOUR FAVORITE FOOD</h2>
        <p data-aos="zoom-in-down" className='font-[Antonio] text-center text-white lg:text-start'>Don`t feel like cooking today? We got you covered - order now!</p>
        <a data-aos="zoom-up-down" href='https://gallostaproom-powell.hngr.co/menu/start'>
        <img className='w-[200px] hover:scale-[1.2] cursor-pointer transition-all duration-700' src={logo}/>
        </a>
        </div>
        </div>
    </div>
  )
}

export default Online