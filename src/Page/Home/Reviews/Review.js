import React from "react";

const Review = ({ reviews }) => {
<<<<<<< HEAD
  const { name, img, review, location } = reviews;
  return (
    <div>
      <div
        className="card  shadow-xl border border-green-400 "
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <div className="card-body">
          <p>{review}</p>
          <div className="flex items-center mt-6">
            <div className="avatar mr-6">
              <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img alt="" src={img} />
              </div>
=======
    const { name, img, review, location } = reviews
    return (
        <div>
            <div className="card  shadow-xl border-t-2 border-l-2 border-red-500 hover:bg-teal-100" data-aos="fade-up"
                data-aos-anchor-placement="top-bottom">
                <div className="card-body">
                    <p>{review}</p>
                    <div className="flex items-center mt-6">
                        <div className="avatar mr-6">
                            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img alt='' src={img} />
                            </div>

                        </div>
                        <div>
                            <h5 className='text-xl'>{name}</h5>
                            <p>{location}</p>
                        </div>
                    </div>
                </div>
>>>>>>> a2a6f40bc045b78aa9998a68c07ca4c4f5ae1cc6
            </div>
            <div>
              <h5 className="text-xl">{name}</h5>
              <p>{location}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
