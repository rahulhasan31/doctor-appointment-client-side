import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../ConfirmationMode;/ConfirmationModal';
import Loading from '../../Loading/Loading';

const ManageDoctors = () => {
  const [deletingDoctor, setDeletingDoctor]= useState(null)
  const closeModal=()=>{
    setDeletingDoctor(null)
  }
  
    const {data:doctors, isLoading, refetch}=useQuery({
        queryKey: ['doctorsDetails'],
        queryFn: async()=>{
            try{
            const res= await fetch('https://doctor-server-phi.vercel.app/doctorsDetails',{

                headers:{
                    'content-type':'application/json',
                    authorization: `bearer ${localStorage.getItem('token')}`
                },
            })
            const data= await res.json()
            return data
            }
            catch(e){

            }
        }
    })
    if(isLoading){
      return <Loading></Loading>
    }
    const handleDeleteDoctor=doctor=>{
      console.log(doctor);
      fetch(`https://doctor-server-phi.vercel.app/doctorsDetails/${doctor._id}`,{
        method:"DELETE",
        headers:{
          'content-type':'application/json',
          authorization: `bearer ${localStorage.getItem('token')}`
      },
      })
      .then(res=> res.json())
      .then(data=> {
        console.log(data);
        if(data.deletedCount>0){
          toast.success(`Doctor ${doctor.name``} Deleted SuccessFully`)
        }
        refetch()

      })
    }
    return (
        <div>
            <h2 className='text-3xl'>manage doctors:{doctors?.length}</h2>
            <div className="overflow-x-auto">
  <table className="table w-full">
  
    <thead>
      <tr>
        <th></th>
        <th>Avatar</th>
        <th>Name</th>
        <th>Email</th>
        <th>Specialty</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
     
     {
        doctors?.map((doctor, i)=> <tr key={doctor._id}>
        <th>{i+1}</th>
        <td> 
        <div className="avatar">
  <div className="w-24 rounded-full">
    <img alt='' src={doctor.image}/>
  </div>
</div>

        </td>
        <td>{doctor.name}</td>
        <td>{doctor.email}</td>
        <td>{doctor.specialty}</td>
        <td>
        <label onClick={()=>{setDeletingDoctor(doctor)}} htmlFor="confirmation-modal" className="btn btn-error">Delete</label>
        </td>
      </tr>)
     }
    
    </tbody>
  </table>
</div>
 {
   deletingDoctor && <ConfirmationModal
   title={`Are you sure you want to delete`}
   message={`if you delete ${deletingDoctor.name} If cannot be undone`}
   closeModal={closeModal}
   successAction={handleDeleteDoctor}
   modalData={deletingDoctor}
   successButtonName='Delete'
   ></ConfirmationModal>
 }
            
        </div>
    );
};

export default ManageDoctors;