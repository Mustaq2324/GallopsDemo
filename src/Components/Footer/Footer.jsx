import React from "react";
import { GrInstagram } from "react-icons/gr";
import { FaFacebookF } from "react-icons/fa";
import logo from "../../assets/images/People.png"
function Footer() {
  return (
    <>
    <hr className="border-[#E8AF33]"/>
    <div className="bg-[#333333]  pt-2 pb-2">
<div className="flex flex-col items-center lg:flex-row justify-center lg:justify-around px-4 gap-4 lg:gap-0">
<div className="flex items-center gap-5 text-white flex-col lg:flex-row">
<p className=" text-lg text-white ">© 2023 <a href="http://peoples-consulting.com" > PEOPLES CONSULTING,LLC</a> 
</p>
{/* <div className="flex flex-col lg:flex-row items-center justify-center gap-2 text-center">
  <a href="http://peoples-consulting.com">
  <p className="text-xl underline">Website design, Social Media marketing and Email marketing provided</p>
  </a>
  <img src={logo} className="w-[100px] h-[70px]" alt="" />
</div> */}


<p>EMAIL NEWSLETTER</p>
<p>WEB ACCESSIBILITY</p>
</div>
<div className="flex gap-5" >
<div className="h-[30px] text-lg cursor-pointer w-[30px] hover:bg-[#92553D] flex items-center justify-center">
<a href="https://www.instagram.com/galloskitchenua/">
                    <GrInstagram className="text-white rounded" />
                  </a>
                </div>
                <div className="h-[30px] text-lg cursor-pointer w-[30px] hover:bg-[#92553D] flex items-center justify-center ">
                <a href="https://www.facebook.com/profile.php?id=61554266552277">
                    <FaFacebookF className="text-white rounded " />
                  </a>
                </div>
</div>
</div>


      {/* <div className="flex flex-col gap-5 lg:gap-0  justify-center items-center pt-9 px-4 mx-auto container  ">
        <div className="flex flex-col lg:flex-row justify-center lg:justify-evenly gap-5 lg:gap-0 w-full">
          <div>
            <h1 className="font-vast-shadow text-[#E8AF33] text-center lg:text-start text-xl">
              LOCATION
            </h1>
            <p className="text-white font-[Antonio]  w-[100px] mx-auto lg:mx-px text-center lg:text-start">
              2820 Nottingham Road Columbus, OH 43221
            </p>
          </div>
          <div>
            <h1 className="font-vast-shadow text-[#E8AF33] text-xl text-center lg:text-start">HOURS</h1>
            <p className="text-white font-[Antonio] w-[150px] text-center lg:text-start mx-auto">
              Mon, Tue, Wed, Thur, Fri, Sat 4:00 pm - 10:00 pm
            </p>
          </div>
          <div className="flex flex-col gap-8">
            <div>
              <h1 className="font-vast-shadow text-[#E8AF33] text-xl text-center lg:text-start">
                FIND US ON...
              </h1>
              <div className="text-white font-[Antonio]  flex justify-center w-full lg:justify-start">
                <div className="h-[30px] text-lg cursor-pointer w-[30px] hover:bg-[#92553D] flex items-center justify-center">
                  <a href="https://www.instagram.com/galloskitchenua/">
                    <GrInstagram className="text-white rounded" />
                  </a>
                </div>
                <div className="h-[30px] text-lg cursor-pointer w-[30px] hover:bg-[#92553D] flex items-center justify-center ">
                  <a href="https://www.yelp.com/biz/gallos-tap-room-powell">
                    <FaYelp className="text-white rounded " />
                  </a>
                </div>
              </div>
            </div>
            <div>
              <h1 className="font-vast-shadow text-[#E8AF33] text-xl text-center lg:text-start">
                CONTACT US
              </h1>
              <ul className="text-white font-[Antonio] flex flex-col gap-3 text-center lg:text-start mx-auto ">
                <li>(614)-754-8176</li>
                <li>galloskitchen2010@gmail.com</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-center lg:justify-evenly w-full  lg:mt-20">
          <div>
            <h1 className="font-vast-shadow text-[#E8AF33] text-center lg:text-start text-xl">
              GALLO'S ON HIGH
            </h1>
            <p className="text-white font-[Antonio] w-[150px] text-center mx-auto ">
              4215 N. High Street Columbus, OH 43214 (614)-674-6223
              https://gallosonhigh.com/
            </p>
          </div>
          <div className="flex flex-col gap-8">
            <div>
              <h1 className="font-vast-shadow text-[#E8AF33] text-xl text-center lg:text-start">
                GALLO'S PIZZERIA
              </h1>
              <p className="text-white font-[Antonio] w-[200px] text-center mx-auto">
                6750 Longshore Street Dublin, OH 43017 (614)-683-8784
                https://www.gallospizzeria.com
              </p>
            </div>
            <div>
              <h1 className="font-vast-shadow text-[#E8AF33] text-xl text-center lg:text-start">
                GALLO'S TAP ROOM
              </h1>
              <p className="text-white font-[Antonio] w-[200px] text-center mx-auto">
                240 North Liberty Street Powell, OH 43065 (614)-396-7309
                https://gallostaproompowell.com
              </p>
            </div>
          </div>

          <div>
            <h1 className="font-vast-shadow text-[#E8AF33] text-xl text-center lg:text-start">
              GALLO'S TAP ROOM
            </h1>
            <p className="text-white font-[Antonio] w-[200px] text-center mx-auto">
              5019 Olentangy River Rd Columbus, OH 43214 (614)-457-2394
              https://gallostaproom.com/
            </p>
          </div>
        </div>
      </div>
      <hr className="mt-16 border-t-2 border-[#E8AF3E]" />
      <div className="pt-10 flex flex-col items-center gap-3 pb-10">
        <div className="flex items-center gap-1 justify-center">
          <h1 className="text-white text-xl font-[Antonio]">Powered by:</h1>
        </div>
        <a
          className="text-white font-[Antonio] text-center  underline hover:text-[#F37641] "
          href="https://www.spothopperapp.com/contact-us?contact_reason=demo&_gl=1*149pd4q*_ga*MjA2OTI3ODQxMi4xNzAwNzExMDg0*_ga_VG24VK2VKT*MTcwMDgyOTkxMS4xNC4wLjE3MDA4Mjk5MTEuMC4wLjA.*_ga_6JZXZZX2BB*MTcwMDgyOTkxMS4xNC4wLjE3MDA4Mjk5MTEuMC4wLjA.&_ga=2.180754464.601675573.1700711085-2069278412.1700711084"
        >
          Website design, Social Media marketing and Email marketing provided by
          SpotHopper.
        </a>
      </div>
      <div className="bg-[#353638]  ">
        <p className="text-white font-[Antonio] text-lg text-center pt-7 pb-7">
          We strive to make our website accessible to everybody.
          <span className="underline">Learn More.</span>
        </p>
      </div> */}
    </div>
    </>
  );
}

export default Footer;
