import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import useAdmin from '../Hook/useAdmin';

import Navbar from '../Shared/Navbar/Navbar';

const DashBoardLayout = () => {
 const {user}=useContext(AuthContext)
 const[isAdmin]=useAdmin(user.email)

  
    return (
       <div>
          
     <div>
        <Navbar></Navbar>
        <div className="drawer drawer-mobile">
<input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
<div className="drawer-content  ">
<Outlet></Outlet>


</div> 
<div className="drawer-side">
<label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
<ul className="menu p-4 w-80 bg-base-100 text-base-content">
 
  <Link to={'/dashboard'}>My Appointments</Link>
{
  isAdmin && <> 
   <Link to={'/dashboard/users'}>All Users</Link>
   <Link to={'/dashboard/adddoctor'}>Add Doctor</Link>
   <Link to={'/dashboard/managedoctors'}>Manage Doctor</Link>
   
   </>
}

</ul>

</div>
      </div>
    </div> 
       </div>
    );
};

export default DashBoardLayout;