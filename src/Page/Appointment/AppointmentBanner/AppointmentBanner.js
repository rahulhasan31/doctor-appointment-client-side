import React, { useState } from 'react';
import chair from '../../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';

const AppointmentBanner = ({selectedDate, setSelectedDate}) => {
  
    return (
        <header className='my-6'>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img alt='' src={chair} className="max-w-sm rounded-lg shadow-2xl" />
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