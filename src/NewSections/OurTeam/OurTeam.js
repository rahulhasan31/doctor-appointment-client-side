import React from "react";
import Marquee from "react-fast-marquee";
const OurTeam = () => {
  return (
    <>
      <h1 className="text-center font-semibold text-4xl shadow-lg rounded-full w-56 border border-cyan-400 mx-auto">
        OUR TEAM{" "}
      </h1>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <Marquee>
          <div className="grid gap-48 mx-auto sm:grid-cols-2 lg:grid-cols-4 lg:max-w-screen-lg">
            <div>
              <img
                className="object-cover w-24 h-24 rounded-full shadow"
                src="https://scontent.fdac90-1.fna.fbcdn.net/v/t39.30808-6/346888741_1368236914016716_4249885266250542143_n.jpg?_nc_cat=106&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFD3sjUC9mziOLUfSTnsydltvNEEgRpRXm280QSBGlFeeHy2_KXH3zP_R8t-xAOH9eYPBnjRCyV093H7Df5LyIE&_nc_ohc=TAejYYrgDiMAX-ePK8i&_nc_ht=scontent.fdac90-1.fna&oh=00_AfAdoeycdvKzZt96eqIKhUjchiOvIJO_ttg_DyztTL_Irw&oe=6491CEDE"
                alt="Person"
              />
              <div className="flex flex-col justify-center mt-2">
                <p className="text-lg font-bold w-96">MD Rahul Hossain</p>
                <p className="mb-4 text-xs text-gray-800">
                  CSE Student& Full Stack Developer
                </p>
              </div>
            </div>
            <div>
              <img
                className="object-cover w-24 h-24 rounded-full shadow"
                src="https://scontent.fdac90-1.fna.fbcdn.net/v/t39.30808-6/349153168_561238309501915_5093952304270776327_n.jpg?_nc_cat=104&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEFdA7rV8HEyDwe124ys4uOobPkNh3PSSuhs-Q2Hc9JK424ltgLj9Dj5SQGOkibiQ3oTNOuoMq11MZVi31TZor1&_nc_ohc=a0zuyhh2zBQAX_Eu2j2&_nc_ht=scontent.fdac90-1.fna&oh=00_AfCAzCr4-g-6uBOMzm-UyyP0vI9TFCf1-suHz22JPeqowQ&oe=6492BD8E"
                alt="Person"
              />
              <div className="flex flex-col justify-center mt-2">
                <p className="text-lg font-bold w-96">Rakibul Islam</p>
                <p className="mb-4 text-xs text-gray-800">
                  CSE Student& Full Stack Developer
                </p>
              </div>
            </div>
            <div>
              <img
                className="object-cover w-24 h-24 rounded-full shadow"
                src="https://i.ibb.co/DzCYn8S/353626546-1368969134004164-1089956572763620051-n.jpg"
                alt="Person"
              />
              <div className="flex flex-col justify-center mt-2">
                <p className="text-lg font-bold w-96">Shohanur Rahman</p>
                <p className="mb-4 text-xs text-gray-800">CSE Student</p>
              </div>
            </div>
            <div>
              <img
                className="object-cover w-24 h-24 rounded-full shadow"
                src="https://i.ibb.co/4FtmwS2/346662724-207029818781627-4486888829496308923-n.jpg"
                alt="Person"
              />
              <div className="flex flex-col justify-center mt-2">
                <p className="text-lg font-bold w-96">Alif Ahmed</p>
                <p className="mb-4 text-xs text-gray-800">CSE Sudent</p>
              </div>
            </div>
          </div>
        </Marquee>
      </div>
    </>
  );
};

export default OurTeam;
