import React from "react";
import treat from "../../../assets/images/treatment.png";
import PrimaryButton from "../../../Component/PrimaryButton";

const BannerTwo = () => {
  return (
    <div className="">
      {/* <div className="hero   ">
  <div className="hero-content flex-col flex-row card md:card-side mt-5 gap-5 ">
    <img  src={treat} className=" rounded-lg xl:w-96 shadow-2xl" />
    <div className='xl:mt-36  '>
      <h1 className="text-5xl font-bold">Exceptional Dental Care,<br />
       on Your Terms</h1>
      <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
      <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">Get Started</button>
    </div>
  </div>
</div> */}

      <div className="hero mt-8">
        <div className="hero-content flex-col lg:flex-row">
          <img
            alt=""
            src="https://i.ibb.co/mGQGycv/pngegg-1.png"
            className="w-[600px] rounded-lg "
            data-aos="zoom-out"
          />
          <div data-aos="zoom-out-up">
            <h1 className="text-5xl font-bold">
              Exceptional Dental Care,
              <br /> on Your Terms
            </h1>
            <p className="py-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <PrimaryButton>Get Started</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerTwo;
