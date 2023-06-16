import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loading from "../../Shared/Loading/Loading";
import OurDoctorsCard from "./OurDoctorsCard";

const OurDoctors = () => {
  const { data: doctors = [], isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("https://doctor-server-phi.vercel.app/doctors");
      const data = await res.json();
      return data;
    },
  });
  console.log(doctors);
  //   if (isLoading) {
  //     return <Loading />;
  //   }
  return (
    <>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400"></p>
          </div>
          <h2 className="max-w-lg mb-6  text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <span className="relative text-red-500 ">OUR</span>{" "}
              <span className="text-green-500">DOCTOR</span>
            </span>
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            Experienced Professionals: Our doctors are experienced professionals
            who have undergone rigorous training and education in their
            respective specialties.
          </p>
        </div>
        <div className="grid gap-5 row-gap-5 mb-8 lg:grid-cols-4 sm:grid-cols-2">
          {isLoading ? (
            <>
              <Loading></Loading>
            </>
          ) : (
            <>
              {doctors.map((doctor) => (
                <OurDoctorsCard
                  key={doctor._id}
                  doctor={doctor}
                ></OurDoctorsCard>
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default OurDoctors;
