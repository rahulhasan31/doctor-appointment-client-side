import React from "react";

const Review = ({ reviews }) => {
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
