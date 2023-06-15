import React, {  useState } from 'react';
import { format } from 'date-fns';
import AppointmentOption from './AppointmentOption';
import BookingModal from '../BookingMudal/BookingModal';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Loading/Loading';


const AvailableAppointments = ({selectedDate }) => {
   const [treatment, setTreatment]= useState(null)

    const date=format(selectedDate, 'PP')
   const {data:appointments=[] , refetch, isLoading}=useQuery({
    queryKey:['appointmentOption', date],
    queryFn: ()=> fetch(`https://doctor-server-phi.vercel.app/appointmentsOption?date=${date}`)
    .then(res=>res.json())
    

   })
 if(isLoading){
    return <Loading></Loading>
 }
    return (
        <section className='my-16'>
            <p className='text-center text-primary font-bold'>Available Appointments on {format(selectedDate, 'PP')}</p>
            <div className='gap-6 grid grid-cols-1 xl:grid-cols-3 mt-10 p-5'>
                      {
                        appointments?.map(option=> <AppointmentOption
                            option={option}
                            key={option._id}
                            setTreatment={setTreatment}
                        ></AppointmentOption>)
                      }
            </div>
               { treatment &&  <BookingModal
                treatment={treatment}
                selectedDate={selectedDate}
                setTreatment={setTreatment}
                refetch={refetch}
                ></BookingModal>}
        </section >
    );
};

export default AvailableAppointments;