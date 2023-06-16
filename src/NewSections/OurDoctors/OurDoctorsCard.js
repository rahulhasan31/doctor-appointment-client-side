import React from "react";

const OurDoctorsCard = ({ doctor }) => {
  console.log(doctor);
  const { name, image, specialty } = doctor;
  return (
    <a
      href="/"
      aria-label="View Item"
      className="inline-block overflow-hidden duration-300 transform  rounded-lg border-2 border-green-300 shadow-xl hover:-translate-y-2"
    >
      <div className="flex flex-col h-full">
        <img src={image} className="object-cover w-full h-96" alt="" />
        <div className="flex-grow border border-t-0 rounded-b">
          <div className="p-5">
            <h6 className="mb-2 font-semibold leading-5">{name}</h6>
            <p className="text-sm text-gray-900">MBBS (DMC), FCPS (CHILD)</p>
            <p className="text-sm text-gray-900">specialty: {specialty}</p>
            <button className="mt-2 py-1 px-2 bg-green-500 rounded-md text-lg font-medium text-white flex justify-center items-center ml-12">
              See Details
            </button>
          </div>
        </div>
      </div>
    </a>
  );
};

export default OurDoctorsCard;
