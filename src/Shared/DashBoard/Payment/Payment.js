import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';

import { useLoaderData } from 'react-router-dom';

import CheckOut from './CheckOut';

const stripePromise = loadStripe('pk_test_51M6YTaIOaRhLiCR9IUacPMWr7kIOpNT2oEv4gm3lLOoRyLZ0sQplaW3fiYroKVA63hTjrAq5homSPjhn01lr0z36007McI12l5');
console.log(stripePromise);

const Payment = () => {
    const booking = useLoaderData()
    // const navigation = useNavigation()
    // if (navigation.state === "loading") {
    //     return <Loading></Loading>
    // }
    const { treatment, price, appointmentDate, slot } = booking
    return (
        <div>
            <h2 className='text-4xl'>Payment for {treatment}</h2>
            <p className='text-3xl'> Please pay <strong>${price} </strong> fot your Appointment{appointmentDate} alt {slot}</p>
            <div className='w-96 my-16'>
                <Elements stripe={stripePromise}>
                    <CheckOut
                        booking={booking}
                    ></CheckOut>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;