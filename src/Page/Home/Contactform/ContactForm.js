
import React, { useState } from 'react';
import appoiment from '../../../assets/images/appointment.png'

const ContactForm = () => {

    return (
        <section className='h-[604px] flex justify-center items-center'
        style={{
            background:`url(${appoiment})`
        }}
        >
               <div>
                <div className='text-center'>
                <h1 className='text-xl font-bold text-primary'>Contact Us</h1>
                <h3 className='text-lg text-white'>Stay connected with us</h3>
                </div>
  <div className="block p-6 px-5 rounded-lg  w-96 ">
  
  <form>
    <div className="form-group mb-6 ">
    
      <input type="text" className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        
        
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7"
        placeholder="Name"/>
    </div>
    <div className="form-group mb-6">
      <input type="email" className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
    
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput8"
        placeholder="Email address"/>
    </div>
    <div className="form-group mb-6">
      <textarea
      className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
       
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:bg-white focus:border-blue-600 focus:outline-none
      "
      id="exampleFormControlTextarea13"
      rows="3"
      placeholder="Message"
    ></textarea>
    </div>
   
    <button type="submit" className="
      w-full
      px-6
      py-2.5
      
      btn btn-primary bg-gradient-to-r from-primary to-secondary text-white
      ease-in-out">Send</button>
  </form>
</div>
               </div>
        </section>
    );
};

export default ContactForm;