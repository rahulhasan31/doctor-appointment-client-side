import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import Loading from '../../Loading/Loading';

const MyAppointment = () => {
    const { user } = useContext(AuthContext)

    const url = `https://doctor-server-phi.vercel.app/bookings?email=${user?.email}`

    const { data: bookings=[],  } = useQuery({
        
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('token')}`
                }
                
            })
            
            const data = await res.json()
            
            return data 
        }
        

    })
    

    return (
 <div>
    <h2 className='text-3xl'>My Appointment</h2>
    <div className="overflow-x-auto">
        <table className="table w-full mt-5">

            <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Treatment </th>
                    <th>date</th>
                    <th>time</th>
                    <th>payment</th>
                </tr>
            </thead>
            <tbody>

                {
                    bookings.map((booking, i) => <tr key={booking._id}>
                        <th>{i + 1}</th>
                        <td>{booking.patient}</td>
                        <td>{booking.treatment}</td>
                        <td>{booking.appointmentDate}</td>
                        <td>{booking.slot}</td>
                        <td>
                          {
                            booking.price && !booking.paid && <Link to={`/dashboard/payment/${booking._id}`}><button className='btn btn-primary'>pay</button></Link>
                          } 
                          {
                            booking.price&& booking.paid && <span className='text-green-500'>paid</span>
                          } 
                        </td>
                    </tr>)
                }

            </tbody>
        </table>
    </div>
</div> 
      
    );
};

export default MyAppointment;