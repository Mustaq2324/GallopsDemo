import React from 'react'
import { Link } from 'react-router-dom';
import 'typeface-vast-shadow';
import bg from "../../assets/images/b5.png"
function About() {
  return (
<div>
<div className="h-[500px] w-full bg-fixed bg-cover bg-center lg:bg-current" style={{ backgroundImage: `url(${bg})` }}></div>
<div className='bg-[#333333] pt-20 pb-20  flex flex-col lg:flex-row items-center justify-evenly'>
<div className='flex flex-col lg:flex-row gap-4 '>
<img className='w-[250px] h-[350px] object-cover rounded' src='https://assets-global.website-files.com/64542138e0be122910058cd2/6461e383aaf08806afcdd047_GG-Chicago-06-p-500.webp'/>
<img className='w-[250px] h-[350px] object-cover rounded' src='https://assets-global.website-files.com/64542138e0be122910058cd2/6461e2cf58e0282da157ded0_GG-Chicago-05-p-500.webp'/>
</div>
<div className='flex flex-col items-center justify-center  gap-8 '>
<h1 className='font-vast-shadow text-4xl text-[#E8AF33] text-center mt-8 lg:mt-0 '>Gallop's Bar & Kitchen</h1>
<p className='font-[Contrail One] text-white text-xl w-full lg:w-[400px] text-center px-4 lg:px-0 '>Locally owned and offering over 15 large flat-screen TVs, a broad variety of desired bourbons, craft cocktails and 20+ draft beer tap handles – we are the ideal spot to cheer on your favorite sports teams, catch up with friends or enjoy dinner with the family!</p>
<Link to="/ReadMore" className=''>

<button className='px-7 font-[Lato] font-semibold py-2  hover:bg-black hover:text-[#e8af3e] bg-[#E8AF3E]'>READ MORE</button>
</Link>
</div>
</div>

</div>  

  )
}

export default About