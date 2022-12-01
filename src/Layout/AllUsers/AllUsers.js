import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllUsers = () => {
    const {data:users=[], refetch}=useQuery({
        queryKey:['users'],
        queryFn: async()=>{
            const res= await fetch('https://doctor-server-phi.vercel.app/users')
            const data= await res.json()
            return data
        }
    })

    const handleMakeAdmin=id=>{
       fetch(`https://doctor-server-phi.vercel.app/users/admin/${id}`, {
        method:"PUT",
        headers:{
            authorization: `bearer ${localStorage.getItem('token')}`
        }
       })
       .then(res=>res.json())
       .then(data=>{
        console.log(data)
        if(data.matchedCount >0){
            toast.success('admin make done')
            refetch()
        }
       })
    }
    return (
        <div>
            <h1>All Users</h1>
            <div className="overflow-x-auto">
  <table className="table w-full">
   
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Admin</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
    
    {
        users.map((user, i)=>   <tr key={user._id}>
            <th>{i+1}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user?.role !== 'admin'&& <button onClick={()=>handleMakeAdmin(user._id)} className='btn btn-xs btn-primary'>make admin</button>}</td>
            <td><button className='btn btn-xs btn-warning'>Delete</button></td>
          </tr>)
    }
    
    
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllUsers;