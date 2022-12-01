import { format } from 'date-fns';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthProvider';

const BookingModal = ({ treatment, selectedDate,setTreatment, refetch }) => {
    const { name, slots, price} = treatment
    const treatmentName=name
    const date = format(selectedDate, 'PP')

    const {user}= useContext(AuthContext)

 const handleBooking= event=>{
    event.preventDefault()
    const form= event.target
    const slot= form.slot.value
    const name= form.name.value
    const email= form.email.value
    const phone= form.phone.value 
    form.reset()
    const booking={
        appointmentDate:date,
        treatment:treatmentName,
        slot,
        email,
        phone,
        patient: name,
        price
    }
    console.log(booking);
    
    fetch('https://doctor-server-phi.vercel.app/bookings', {
        method: "POST",
        headers :{
            'Content-Type' : "application/json"
        },

        body:JSON.stringify(booking)

    })
    .then(res=> res.json())
    .then(data=>{
        console.log(data);
        if(data.acknowledged){
            setTreatment(null)
            toast.success('booking Confirm')
            refetch()
        }
        else{
            toast.error(data.message)
        }
    })




 }


   

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form  onSubmit={handleBooking} className='grid grid-cols-1 gap-5'>
                        <input type="text" disabled value={date} placeholder="Type here" className="input input-bordered w-full " />
                        <select name='slot' className="select select-bordered w-full ">
                            {
                                slots.map((slot, i) => <option value={slot} key={i}>{slot}</option> )
                            }
                        </select>
                        <input name='name' defaultValue={user?.displayName} disabled type="text" placeholder="Your Name" className="input input-bordered w-full " />
                        <input name='email' disabled defaultValue={user?.email} type="email" placeholder="Your Email" className="input input-bordered w-full " />
                        <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered w-full " />
                        <input className='w-full  btn btn-primary text-white' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;