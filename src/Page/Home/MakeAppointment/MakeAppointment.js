import React from 'react';
import doctor from '../../../assets/images/doctor.png'
import appoiment from '../../../assets/images/appointment.png'
import appoint from "../../../assets/doctor/pngegg (2).png"
import PrimaryButton from '../../../Component/PrimaryButton';
const MakeAppointment = () => {
  return (
    <section
      className='mt-32 p-0'
      style={{
        background: `url('https://i.ibb.co/MM37Gtt/istockphoto-1254842513-612x612.jpg')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: "center"



      }}
      data-aos="fade-up"
      data-aos-duration="3000" >
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <img alt='' src={appoint} className=" -mt-32 hidden lg:block lg:w-1/2 rounded-lg -mb-4 " />
          <div>
            <h4 className='text-lg text-primary font-bold'>Appointment</h4>
            <h1 className="text-4xl font-bold ">Make an appointment Today</h1>
            <p className="py-6  font-sans font-semibold">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
            <PrimaryButton>Get Started</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;