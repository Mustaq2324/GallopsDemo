import React from 'react'
import lg from "../../assets/images/full-1.jpeg";
import lg3 from "../../assets/images/full-2.jpeg";
import medium from "../../assets/images/medium-1.jpeg";
import medium2 from "../../assets/images/medium-2.jpeg";
import medium3 from "../../assets/images/medium-3.jpeg";
import medium5 from "../../assets/images/medium-4.jpeg";
import medium6 from "../../assets/images/medium-5.jpeg";
import medium7 from "../../assets/images/medium-6.jpeg";
import medium8 from "../../assets/images/medium-7.jpeg";
import medium9 from "../../assets/images/medium-8.jpeg";
import medium10 from "../../assets/images/medium-9.jpeg";
import medium11 from "../../assets/images/medium-10.jpeg";
import medium12 from "../../assets/images/medium-11.jpeg";
import medium14 from "../../assets/images/medium-12.jpeg";

function Gallery() {
  return (
    <div>
        <div className="overflow-x-hidden">
      <div className="flex flex-col lg:flex-row  ">
        <div className="overflow-hidden">
          <img className="object-cover hover:scale-[1.2] overflow-hidden transition-all duration-500 cursor-pointer" src={lg3} />
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-2">
 <div className="overflow-hidden">
 <img className="object-cover hover:scale-[1.2] overflow-hidden transition-all duration-500 cursor-pointer" src={medium} alt="Medium 1" />
 </div> 
 <div className="overflow-hidden">
 <img className="object-cover hover:scale-[1.2] overflow-hidden transition-all duration-500 cursor-pointer" src={medium2} alt="Medium 2" />
 </div> 
 <div className="overflow-hidden">
 <img className="object-cover hover:scale-[1.2] overflow-hidden transition-all duration-500 cursor-pointer" src={medium3} alt="Medium 3" />
 </div> 
 <div className="overflow-hidden">
 <img className="object-cover hover:scale-[1.2] overflow-hidden transition-all duration-500 cursor-pointer" src={medium14} alt="Medium 4" />
 </div> 
 <div className="overflow-hidden">
 <img className="object-cover hover:scale-[1.2] overflow-hidden transition-all duration-500 cursor-pointer" src={medium5} alt="Medium 5" />
 </div> 
 <div className="overflow-hidden">
 <img className="object-cover hover:scale-[1.2] overflow-hidden transition-all duration-500 cursor-pointer" src={medium6} alt="Medium 6" />
 </div> 
  
</div>

      </div>

<div className="flex flex-col lg:flex-row ">
        
        <div className="grid grid-cols-2">
 <div className="overflow-hidden">
 <img className="object-cover hover:scale-[1.2] overflow-hidden transition-all duration-500 cursor-pointer" src={medium7} alt="Medium 7" />
 </div> 
 <div className="overflow-hidden">
 <img className="object-cover hover:scale-[1.2] overflow-hidden transition-all duration-500 cursor-pointer" src={medium8} alt="Medium 8" />
 </div> 
 <div className="overflow-hidden">
 <img className="object-cover hover:scale-[1.2] overflow-hidden transition-all duration-500 cursor-pointer" src={medium9} alt="Medium 9" />
 </div> 
 <div className="overflow-hidden">
 <img className="object-cover hover:scale-[1.2] overflow-hidden transition-all duration-500 cursor-pointer" src={medium10} alt="Medium 10" />
 </div>  
</div>
<div className="overflow-hidden">
          <img className="object-cover hover:scale-[1.2] overflow-hidden transition-all duration-500 cursor-pointer" src={lg} />
        </div>
     <div className="flex flex-col">
     <div className="overflow-hidden">
 <img className="object-cover hover:scale-[1.2] overflow-hidden transition-all duration-500 cursor-pointer" src={medium11} alt="Medium 11" />
 </div> 
 <div className="overflow-hidden">
 <img className="object-cover hover:scale-[1.2] overflow-hidden transition-all duration-500 cursor-pointer" src={medium12} alt="Medium 12" />
 </div> 
     </div>
     </div>
     
    </div>
    </div>
  )
}

export default Gallery