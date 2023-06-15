import React, { useState } from 'react';
import chair from '../../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';

const AppointmentBanner = ({selectedDate, setSelectedDate}) => {
  
    return (
        <header className='my-6'  data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500">
            <section>
  <div class="px-4  mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 ">
    <div class="flex flex-wrap items-center mx-auto max-w-7xl">
      <div class="w-full lg:max-w-lg lg:w-1/2 rounded-xl">
        <div>
          <div class="relative w-full max-w-lg">
            <div class="absolute top-0 rounded-full bg-violet-300 -left-4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>

            <div class="absolute rounded-full bg-fuchsia-300 -bottom-24 right-20 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            <div class="relative">
              <img class="object-cover object-center mx-auto rounded-lg  " alt="hero" src="https://i.ibb.co/LNLRfYw/doctr-img-03-2x.png"/>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col items-start mt-12 mb-16 text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0">
        <span class="mb-8 text-xs font-bold tracking-widest text-blue-600 uppercase"> Hello Dear </span>
        <h1 class="mb-8 text-4xl font-bold leading-none tracking-tighter text-neutral-600 md:text-7xl lg:text-5xl">Thanks Dear , Please Book Your appointment</h1>
        <p class="mb-8 text-base leading-relaxed text-left text-gray-500">We Are provide world top service</p>
        <div class="mt-0 lg:mt-6 max-w-7xl sm:flex">
          <div class="mt-3 rounded-lg sm:mt-0">
            <Link to={'/'}>
            <button class="items-center block px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Home</button></Link>
          </div>
          <div class="mt-3 rounded-lg sm:mt-0 sm:ml-3">
            <button class="items-center block px-10 py-3.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">See features</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<h1 className='text-4xl text-blue-500  text-center font-bold mt-10 mb-3'>Select Your Appointment Date</h1>
            <div className="hero "  >
                
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img alt='' src='https://i.ibb.co/cYVPK7y/ezgif-com-gif-maker-1-removebg-preview.png' className="max-w-sm rounded-lg " />
                    <div className='mr-6'>
                    <DayPicker
                    mode='single'
                    selected={selectedDate}
                    onSelect={(data)=>{
                        if(data){
                            setSelectedDate(data)
                        }
                    }}

                    />
                   
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;