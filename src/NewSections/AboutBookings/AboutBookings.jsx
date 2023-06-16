import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const AboutBookings = () => {
  const slides = [
    {
      image: "https://i.ibb.co/mq48KNX/kit1.png",
      text: "Text 1",
      description:
        "Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.",
    },
    {
      image: "https://i.ibb.co/1TJXf6d/pngegg-1.png",
      text: "Text 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec consectetur risus. Nullam ultricies sapien non felis luctus, eu commodo quam viverra.",
    },
    {
      image: "https://i.ibb.co/mGZv4N3/kit2.png",
      text: "Text 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec consectetur risus. Nullam ultricies sapien non felis luctus, eu commodo quam viverra.",
    },
    // {
    //   image: "https://i.ibb.co/5nHbypZ/kits.png",
    //   text: "Text 2",
    //   description:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec consectetur risus. Nullam ultricies sapien non felis luctus, eu commodo quam viverra.",
    // },
    // Add more slide objects as needed
  ];

  return (
    <div className="mt-5">
      <h1 className="text-center font-bold text-4xl text-cyan-400 border-2 border-green-300 w-96  px-2 py-2 mx-auto rounded-full shadow-lg">
        {" "}
        OUR DIGITAL LAB
      </h1>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-accent-400">
              <svg className="text-green-500 w-7 h-7" viewBox="0 0 24 24">
                <polyline
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  points=" 8,5 8,1 16,1 16,5"
                  strokeLinejoin="round"
                />
                <polyline
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  points="9,15 1,15 1,5 23,5 23,15 15,15"
                  strokeLinejoin="round"
                />
                <polyline
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  points="22,18 22,23 2,23 2,18"
                  strokeLinejoin="round"
                />
                <rect
                  x="9"
                  y="13"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  width="6"
                  height="4"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="max-w-3xl mb-6">
              <h2 className="max-w-lg  mb-6  text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                Our Digital Lab
                <br className="hidden md:block" />
                Health Education and{" "}
                <span className="inline-block text-deep-purple-accent-400">
                  Resources
                </span>
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                Our Digital Doctor Lab utilizes cutting-edge technology and
                innovative digital solutions to enhance the healthcare
                experience. We leverage the power of artificial intelligence,
                machine learning, and data analytics to provide personalized,
                efficient, and accurate medical services.
              </p>
            </div>
            <div>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Learn more
                <svg
                  className="inline-block w-3 ml-2"
                  fill="currentColor"
                  viewBox="0 0 12 12"
                >
                  <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center -mx-4 lg:pl-8">
            <div className="w-11/12  lg:-mr-32">
              <Carousel
                autoPlay
                infiniteLoop
                showStatus={false}
                showThumbs={false}
                renderIndicator={() => null} // Hide indicators
              >
                {slides.map((slide, index) => (
                  <div key={index} className="w-11/12 ">
                    <div className="relative">
                      <img
                        bg-black
                        opacity-50
                        src={slide.image}
                        alt={`Banner ${index + 1}`}
                      />
                      <div className="hero-overlay bg-opacity-60"></div>
                      <div className="hero-content text-center text-neutral-content absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBookings;
