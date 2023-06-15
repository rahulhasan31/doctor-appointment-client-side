import React from 'react';

const AppointmentOption = ({option, setTreatment}) => {
    const {name,price, slots }=option
    return (
     <div className="card p-5 shadow-xl border  border-sky-500 " data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
  <div className="card-body text-center ">
    <h2 className=" text-2xl text-center text-primary">{name}</h2>
    <p>{slots.length>0 ? slots[0] : 'Try another day'}</p>
    <p>{slots.length} {slots.length > 1 ? 'Spaces' : 'space'} Available</p>
    <p><small>Price: ${price}</small></p>
    <div className="card-actions justify-center">
      <label disabled={slots.length === 0} onClick={()=>setTreatment(option)} htmlFor="booking-modal" className="btn btn-primary text-white">Book Appointment</label>
    </div>
  </div>
</div>
    );
};

export default AppointmentOption;