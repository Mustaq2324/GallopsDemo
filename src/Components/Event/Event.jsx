import React, { useEffect, useState ,useRef} from "react";
import bg from "../../assets/images/b4.png"
function Events() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        eventNature: "",
        eventDate: "",
        startTime: "",
        endTime: "",
        numberOfPeople: "",
        additionalInfo: "",
      });
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        const formSpreeEndpoint = 'https://formspree.io/f/myyqrwlq';
    
        try {
          const response = await fetch(formSpreeEndpoint, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
    
          if (response.ok) {
            alert('Form submitted successfully!');
          } else {
            console.error('Form submission failed:', response.statusText);
            alert('Form submission failed. Please try again.');
          }
        } catch (error) {
          console.error('Error submitting form:', error);
          alert('An error occurred while submitting the form. Please try again.');
        }
      };

  return (
    <div className="bg-[#F9F9FB] pb-5">
      <div className="bg-cover bg-center  h-[400px]" style={{ backgroundImage: `url(${bg})` }}>
      </div>
      <div className="bg-white pb-5 w-[90%] lg:w-[80%] mt-10 mx-auto px-4">
        <h1 className="text-3xl font-vast-shadow text-[#528C9E] pt-5">Event Request</h1>
        <hr className="mt-7"></hr>
        <p className="mt-4 ps-4 text-gray-700">To enter an Event Request,please fill out the following form.</p>
        
        <form className="ps-4 "   onSubmit={handleSubmit}>
       
            <div className="">
              <h1 className="text-2xl text-[#528C9E]">Your Contact Information</h1>
            </div>
        
            <div className="ms-5 mt-2 flex flex-col gap-5 text-black">
            <div className="grid  lg:grid-cols-6 grid-rows-1 text-black ">
              <label>First Name</label>

              <input name="firstName" value={formData.firstName}
        onChange={handleChange}
                className="border-2  border-[#CCCCCC]  bg-slate-300  focus:border-[#9ACAF0] focus:outline-[#9ACAF0] shadow-xl rounded lg:w-[250px]"
                type="text"
              />
            
          </div>
          <div className="grid lg:grid-cols-6 grid-rows-1 ">
            
              <label>Last Name</label>
            
           
              <input name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="border-2 border-[#CCCCCC]  bg-slate-300  focus:border-[#9ACAF0] focus:outline-[#9ACAF0] shadow-xl rounded lg:w-[250px]"
                type="text"
              />
            
          </div>
          <div className="grid lg:grid-cols-6 grid-rows-1 ">
            
              <label>Email Address</label>
            
           
              <input name="email" value={formData.email}
        onChange={handleChange}
                className="border-2 border-[#CCCCCC]  bg-slate-300  focus:border-[#9ACAF0] focus:outline-[#9ACAF0] shadow-xl rounded lg:w-[250px]"
                type="email"
              />
            
          </div>
          <div className="grid lg:grid-cols-6 grid-rows-1 ">
            
              <label>Phone Number</label>
            
           
              <input name="phoneNumber" value={formData.phoneNumber}
        onChange={handleChange}
                className="border-2  border-[#CCCCCC]  bg-slate-300  focus:border-[#9ACAF0] focus:outline-[#9ACAF0] shadow-xl rounded lg:w-[250px]"
                type="number"
              />
            
          </div>
            </div>
            <div className="">
              <h1 className="text-2xl text-[#528C9E]">Your Event Details</h1>
            </div>
             <div className="ms-5 mt-2 flex flex-col gap-5 text-black">
             <div className="grid  2 grid-rows-1 ">
                
                <label>
                  Nature of this Event (e.g., Birthday Party or Business
                  Dinner)
                </label>
              
              
                <textarea  value={formData.eventNature}
        onChange={handleChange}
                  className="border-2  border-[#CCCCCC]  bg-slate-300  focus:border-[#9ACAF0] focus:outline-[#9ACAF0] shadow-xl rounded  lg:w-[500px]"
                  name="eventNature"
                  id=""
                  cols="30"
                  rows="3"
                ></textarea>
              
            </div>
            <div className="grid lg:grid-cols-6 grid-rows-1 ">
              
                <label>Event Date</label>
              
             
                <input value={formData.eventDate}
        onChange={handleChange} name="eventDate"
                  className="border-2 border-[#CCCCCC]  bg-slate-300  focus:border-[#9ACAF0] focus:outline-[#9ACAF0] shadow-xl rounded lg:w-[150px]"
                  type="date"
                />
              
            </div>
            <div className="grid lg:grid-cols-6 grid-rows-1 ">
              
                <label>Start Time</label>
              
             
                <input value={formData.startTime}
        onChange={handleChange}
                  className="border-2 border-[#CCCCCC]  bg-slate-300  focus:border-[#9ACAF0] focus:outline-[#9ACAF0] shadow-xl rounded lg:w-[150px]"
                  type="time" name="startTime"
                />
              
            </div>
            <div className="grid lg:grid-cols-6 grid-rows-1 ">
              
                <label>End Time</label>
              
             
                <input value={formData.endTime}
        onChange={handleChange}
                  className="border-2 border-[#CCCCCC]  bg-slate-300  focus:border-[#9ACAF0] focus:outline-[#9ACAF0] shadow-xl rounded lg:w-[150px]"
                  type="time" name="endTime"
                />
              
            </div>
            <div className="grid lg:grid-cols-6 grid-rows-1 ">
              
                <label>Number Of People</label>
              
             
                <input value={formData.numberOfPeople}
        onChange={handleChange}
                  className="border-2 border-[#CCCCCC]  bg-slate-300  focus:border-[#9ACAF0] focus:outline-[#9ACAF0] shadow-xl rounded lg:w-[150px]"
                  type="number" name="numberOfPeople"
                />
              
            </div>
            <div className="grid  2 grid-rows-1 ">
              
                <label>
                  Is there any additional information you would like to add?
                </label>
              
              
                <textarea value={formData.additionalInfo}
        onChange={handleChange}
                  className="border-2  border-[#CCCCCC]  bg-slate-300  focus:border-[#9ACAF0] focus:outline-[#9ACAF0] shadow-xl rounded  lg:w-[500px]"
                  name="additionalInfo"
                  id=""
                  cols="30"
                  rows="3"
                ></textarea>
              
            </div>
             </div>
           <div className="ms-8">
           <button className="mt-5 px-7 font-[Lato] font-semibold py-2  text-black bg-[#528C9E]"  type="submit">Sumbit</button>
           </div>
              
           
          </form>
        </div>
       
      </div>

  );
}

export default Events;
