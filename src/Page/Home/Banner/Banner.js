import React from 'react';
import img1 from '../../../assets/images/chair.png'
import PrimaryButton from '../../../Component/PrimaryButton';
import bgimg from '../../../assets/images/appointment.png'

const Banner = () => {
    return (
        <div className=''
        style={{
          background :`url(${bgimg})`,
          backgroundSize: 'cover',
        

          
        }}>
  <div className="hero  ">
  <div className="hero-content flex-col lg:flex-row-reverse text-white">
    <img  src={img1} className=" rounded-lg xl:w-1/2 shadow-2xl" />
    <div>
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