import React from 'react';
import quote from '../../../assets/icons/quote.svg'
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'
import Review from '../Reviews/Review';

const Testimonials = () => {

    const reviews = [
        {
            _id: 1,
            name: 'Winson Herry',
            location: 'California',
            img: people1,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
        },
        {
            _id: 2,
            name: 'Winson Herry',
            img: people2,
            location: 'California',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
        },
        {
            _id: 3,
            name: 'Winson Herry',
            location: 'California',
            img: people3,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
        }
    ]
    return (
        <section className='my-16 ' >
            <div className='flex justify-between' data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="500">
                <div >
                    <h3 className="text-xl text-primary font-bold">Testimonials </h3>
                    <h2 className='text-4xl'>What Our Patients Says</h2>
                </div>

                <figure>
                    <img className='w-24 lg:w-48' src={quote} alt="" />
                </figure>

            </div>
            <div className='grid gap-8 grid-cols-1 lg:grid-cols-3 ' >
                {
                    reviews.map(reviews => <Review key={reviews._id}
                        reviews={reviews}></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonials;