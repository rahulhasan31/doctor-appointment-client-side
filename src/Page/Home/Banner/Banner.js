import React from 'react';
import img1 from '../../../assets/images/chair.png'
import PrimaryButton from '../../../Component/PrimaryButton';
import bgimg from '../../../assets/images/appointment.png'
import doctor from "../../../assets/doctor/pngegg (4).png"

const Banner = () => {
  return (
    <div className=''
    >
      <div className="hero  ">
        <div className="hero-content flex-col lg:flex-row-reverse " >
          <img alt='' src={doctor} className=" xl:w-1/2 " data-aos="zoom-out-left" />
          <div data-aos="zoom-out-right">
            <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <PrimaryButton>Get Started</PrimaryButton>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Banner;