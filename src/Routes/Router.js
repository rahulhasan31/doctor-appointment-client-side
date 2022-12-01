import Home from "../Page/Home/Home";
import Main from "../Layout/Main";
import Login from "../Page/Login/Login";
import Appointment from "../Page/Appointment/Appointment/Appointment";
import Register from "../Page/Register/Register";

import PrivateRoute from "../Private/PrivateRoute";
import DashBoardLayout from "../Layout/DashBoardLayout";
import DashBoard from "../Shared/DashBoard/DashBoard";
import MyAppointment from "../Shared/DashBoard/MyAppointment/MyAppointment";
import AllUsers from "../Layout/AllUsers/AllUsers";
import AdminRoute from "../Private/AdminRoute/AdminRoute";
import AddDoctor from "../Layout/AddDoctor/AddDoctor";
import ManageDoctors from "../Shared/DashBoard/ManageDoctors/ManageDoctors";
import Payment from "../Shared/DashBoard/Payment/Payment";
import DisplayError from "../Shared/DisplayError/DisplayError";


const { createBrowserRouter } = require("react-router-dom");

 const router= createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
        children: [
         
            {
                path : '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element:<Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
        {
            path:'/appointment',
            element : <Appointment></Appointment>
        },

        ]
    },
    {
        path: '/dashboard',
        element:<PrivateRoute><DashBoardLayout></DashBoardLayout></PrivateRoute>,
        errorElement: <DisplayError></DisplayError>,
        children:[
            {
               path:'/dashboard',
               element:<MyAppointment></MyAppointment>
            },
            {
               path:'/dashboard/users',
               element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
               path:'/dashboard/adddoctor',
               element:<AdminRoute><AddDoctor></AddDoctor></AdminRoute>
            },
            {
               path:'/dashboard/managedoctors',
               element:<AdminRoute><ManageDoctors></ManageDoctors></AdminRoute>
            },
            {
               path:'/dashboard/payment/:id',
               element:<Payment></Payment>,
               loader:({params})=>fetch(`https://doctor-server-phi.vercel.app/bookings/${params.id}`)
            },
        ]            
        
    }
])






export default router ;