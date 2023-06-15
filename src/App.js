
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Router';
import { useEffect, useState } from 'react';
import MenuLoding from './Routes/MenuLoding';
import AOS from 'aos';
import 'aos/dist/aos.css';



function App() {
  const [isLoading, SetIsLoading]=useState(true)

  useEffect(()=>{
    setTimeout(()=>{
      SetIsLoading(false)
    }, 2500)
})
AOS.init();
  return (
    <div className="max-w-[1440px] mx-auto  app "
    
    >
       {
      isLoading?<MenuLoding></MenuLoding> : <RouterProvider router={router}>
      
      </RouterProvider>
     }
   
    </div>
  );
}

export default App;
