import { useQuery } from '@tanstack/react-query';
import id from 'date-fns/esm/locale/id/index.js';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddDoctor = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()

    const imgHostKey=process.env.REACT_APP_imgbb_key

 const navigate=useNavigate()
    const { data: specialties, isLoading } = useQuery({
        queryKey: ['/specialty'],
        queryFn: async () => {
            const res = await fetch('https://doctor-server-phi.vercel.app/appointmentSpecialty')
            const data = await res.json()
            return data
        }
    })
    const handleAddDoctor = data => {
        const image=data.img[0]
        const formData = new FormData();
        formData.append('image',image)
        const url=`https://api.imgbb.com/1/upload?key=${imgHostKey}`

        fetch(url,{
            method:"POST",
            body:formData
        })
        .then(res=>res.json())
        .then(imgData=>{

            if(imgData.success){
             console.log(imgData.data.url);
            }

            const doctor={
                name:data.name,
                email:data.email,
                specialty:data.specialty,
                image:imgData.data.url
            }

            fetch('https://doctor-server-phi.vercel.app/doctorsDetails', {
                method:"POST",
                headers:{
                    'content-type':'application/json',
                    authorization: `bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify(doctor)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                
                toast.success(`${doctor.name} is Added successfully`)
                navigate('/dashboard/managedoctors')
            })
        })




    }

    if (isLoading) {
        return <p>alu Loading......</p>
    }
    return (
        <div className='w-96 p-8'>
            <h2 className='text-4xl font-bold'>Add a New Doctor</h2>
            <form onSubmit={handleSubmit(handleAddDoctor)}>


                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Name</span></label>
                    <input type="text"

                        {...register('name', { required: 'Name must be required' }

                        )}
                        className="input input-bordered w-full max-w-xs" />
                    {errors.name && <p className='text-red-600'> {errors.name.message}</p>}

                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Email</span></label>
                    <input type="email"

                        {...register("email", { required: 'email must be required' }

                        )}

                        className="input input-bordered w-full max-w-xs" />
                    {errors.email && <p className='text-red-600'> {errors.email.message}</p>}

                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Specialty</span></label>
                    <select 
                    {...register('specialty')}
                    className="select input-bordered w-full max-w-xs">


                        {
                            specialties?.map(specialty => <option
                                key={specialty._id}
                                value={specialty.name}
                            >{specialty.name}</option>)
                        }


                    </select>

                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Photo</span></label>
                    <input type="file"

                        {...register('img', { required: 'photo must be required' }

                        )}
                        className="input input-bordered w-full max-w-xs" />
                    {errors.img && <p className='text-red-600'> {errors.img.message}</p>}

                </div>
                <div>
                </div>
                <input className='btn btn-accent w-full text-white mt-3' value="Add Doctor" type="submit" />
            </form>
        </div>
    );
};

export default AddDoctor;