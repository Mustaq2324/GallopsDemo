import React, { useState } from 'react';
import bg from '../../assets/images/carrer.png';

function Career() {
  const formSpreeEndpoint = 'https://formspree.io/f/myyqrwlq'; // Replace with your Formspree endpoint
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    
    try {
      // Send form data to Formspree
      const response = await fetch(formSpreeEndpoint, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json',
        },
      });

      if (response.ok) {
        // Handle success, e.g., show a success message
        console.log('Form submitted successfully');
        setSubmissionStatus('success');
      } else {
        // Handle error, e.g., show an error message
        console.error('Form submission failed');
        setSubmissionStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmissionStatus('error');
    }
  };


  return (
    <div className="bg-cover h-[1000px] bg-center w-full" style={{ backgroundImage: `url(${bg})` }}>
      <div className='flex flex-col gap-5 justify-center items-center px-4 lg:px-0'>
        <h1 className='text-white font-vast-shadow text-5xl pt-5 text-center'>Careers</h1>
        <p className='text-white text-lg lg:w-[600px] font-semibold text-center'>We are hiring! Apply below to become a part of our awesome team and we'll get back to you ASAP!</p>
        <p className='text-white font-semibold text-center'>Alternatively if you have questions you can call us at (614) 457-2394</p>
      </div>
      <div className='w-[95%] lg:w-[50%] pb-10 pt-5 mx-auto mt-5 rounded bg-black bg-opacity-70'>
        <h1 className='text-white text-2xl font-vast-shadow font-bold uppercase text-center px-2 lg:px-0 pt-5'>Job Application Form</h1>
        <form className='flex flex-col gap-4 px-4 mt-10' onSubmit={handleSubmit}>
          <div className='lg:mx-auto'>
          <input type="text" name="name" placeholder='Enter Your Name........' className='w-[95%] bg-opacity-20 bg-slate-600 outline-none text-white border-none placeholder:text-white lg:w-[500px] h-[40px] rounded ps-2' />

          </div>
          <div className='lg:mx-auto'>
            <input type="number" placeholder='Enter Your Mobile Number........' className='w-[95%] bg-opacity-20 bg-slate-600 outline-none text-white border-none placeholder:text-white lg:w-[500px] h-[40px] rounded ps-2' />
          </div>
          <div className='lg:mx-auto'>
            <input type="text" name="number"  placeholder='Service Industry Experience...(ex 3 years serving)' className='w-[95%] bg-opacity-20 bg-slate-600 outline-none text-white border-none placeholder:text-white lg:w-[500px] h-[40px] rounded ps-2' />
          </div>
          <div className='lg:ms-24'>
            <p className='text-xl'>Applying For:</p>
            <div className='text-xl text-white ps-3'>
              <div   className='flex items-center gap-2'>
                <input name="Dishwasher" type="checkbox" />
                <label>Dishwasher</label>
              </div>
              <div className='flex items-center gap-2'>
                <input name="Line Cook" type="checkbox" />
                <label>Line Cook</label>
              </div>
              <div className='flex items-center gap-2'>
                <input name="Pizza Maker" type="checkbox" />
                <label> Pizza Maker</label>
              </div>
              <div className='flex items-center gap-2'>
                <input name="Prep cook" type="checkbox" />
                <label>Prep cook</label>
              </div>
              <div className='flex items-center gap-2'>
                <input name="Server" type="checkbox" />
                <label>Server</label>
              </div>
            </div>
          </div>
          <div className='lg:mx-auto'>
            <textarea name="coverletter" id="" cols="30" rows="5" className='w-[95%] pt-2 bg-opacity-20 bg-slate-600 outline-none text-white border-none placeholder:text-white lg:w-[500px] rounded ps-2' placeholder='Cover Letter (optional)...'></textarea>
          </div>
          <div className='mx-auto'><button type='submit' className='px-7 font-[Lato] font-semibold py-2 hover:bg-black text-white hover:text-[#e8af3e] bg-[#E8AF3E]'>Submit</button></div>
        </form>
        <div className='mx-auto'>
        {submissionStatus === 'success' && <p className='text-green-500'>Form submitted successfully!</p>}
        {submissionStatus === 'error' && <p className='text-red-500'>Form submission failed. Please try again later.</p>}
      </div>
      </div>
    </div>
  );
}

export default Career;
