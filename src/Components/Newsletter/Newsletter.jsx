import React from 'react'
import bg from "../../assets/images/Backdrop4.png"
function Newsletter() {
  return (
    <div className="flex flex-col lg:flex-row ">
      <div className="bg-[#333333] bg-cover bg-center flex flex-col justify-center items-center    w-full" style={{ backgroundImage: `url(${bg})` }}>
        <div className=" flex justify-center  flex-col  h-full gap-10 items-center  ">
          <h1 data-aos="flip-up" className="font-vast-shadow text-[#E8AF33] text-2xl  lg:text-5xl">
            NEWSLETTER
          </h1>
          <p data-aos="flip-down" className=" text-center text-lg text-white lg:text-start">
            Sign up for our newsletter & get exclusive offers and invites!
          </p>
          <form className="flex gap-3 flex-col lg:flex-row">
            <div data-aos="zoom-in">
                <input type="email" className=" border-none outline-none w-full text-white bg-transparent placeholder:text-white placeholder:font-[Antonio]" placeholder="Your Email ....."/>
                <div className="lg:w-[360px] w-[220px] h-[1px] bg-white mt-3"></div>
            </div>
            <div data-aos="zoom-out" className=' mx-auto '>
        <button  type="button" className='px-5 font-[Lato] font-semibold py-2  hover:bg-black hover:text-[#e8af3e] bg-[#E8AF3E]'>SUMBIT</button>
      </div>
          </form>
        </div>
      </div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3049.0804443348575!2d-83.0744742!3d40.1627626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8838f274b67a90c9%3A0x8228b5a5dda83c99!2s240%20N%20Liberty%20St%2C%20Powell%2C%20OH%2043065%2C%20USA!5e0!3m2!1sen!2sin!4v1701714122587!5m2!1sen!2sin"
          
          height="500"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade" className="w-full lg:w-[700px]"
        ></iframe>
      </div>
    </div>
  )
}

export default Newsletter