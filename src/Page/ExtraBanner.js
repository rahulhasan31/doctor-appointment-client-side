import React from "react";
import { Link } from "react-router-dom";
import navpic from "../assets/doctor/pngegg (5).png";

const ExtraBanner = () => {
  return (
    <div className="max-w-[1440px] mt-16 mx-auto">
      {/*  Here is code pushhhhhhhhhhhhhhhhhhhhh */}
      <section>
        <div class="px-4  mx-auto max-w-7xl sm:px-6 md:px-12 ">
          <div class="flex flex-wrap items-center mx-auto max-w-7xl">
            <div class="w-full lg:max-w-lg lg:w-1/2 rounded-xl">
              <div>
                <div class="relative w-full max-w-lg">
                  <div class="absolute top-0 rounded-full bg-violet-300 -left-4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>

                  <div class="absolute rounded-full bg-fuchsia-300 -bottom-24 right-20 w-60 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                  <div
                    class="relative"
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                  >
                    <img
                      class="object-cover object-center mx-auto rounded-lg  "
                      alt="hero"
                      src={navpic}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              class="flex flex-col items-start mt-12 mb-16 text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0"
              data-aos="fade-left"
              data-aos-anchor="#example-anchor"
              data-aos-offset="500"
              data-aos-duration="500"
            >
              <span class="mb-8 text-xs font-bold tracking-widest text-blue-600 uppercase">
                {" "}
                HELLO DEAR{" "}
              </span>
              <h1 class="mb-8 text-4xl font-bold leading-none tracking-tighter text-neutral-600 md:text-7xl lg:text-5xl">
                Welcome To <span className=" text-red-500">Doctor </span>{" "}
                Appointment
              </h1>
              <p class="mb-8 text-base leading-relaxed text-left text-gray-500">
                Exceptional Care, on Your Terms
              </p>
              <div class="mt-0 lg:mt-6 max-w-7xl sm:flex">
                <div class="mt-3 rounded-lg sm:mt-0">
                  <Link to={"/appointment"}>
                    <button class="items-center block px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-sky-400 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                      Appointment
                    </button>
                  </Link>
                </div>
                <div class="mt-3 rounded-lg sm:mt-0 sm:ml-3">
                  <button class="items-center block px-10 py-3.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                    See features
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExtraBanner;
