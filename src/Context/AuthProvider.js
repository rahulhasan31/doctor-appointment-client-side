import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth'
import app from '../Firebase/Firebase.config';


const auth= getAuth(app)
export const AuthContext= createContext()

const AuthProvider = ({children}) => {
     const [user, setUser]= useState(null)
     const [loading , setLoading]=useState(true)

     const createUser=(email, password)=>{
     setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password)
     }

     const loginUser=(email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email,password)
     }

     const logOutUser=()=>{
        setLoading(true)
      return  signOut(auth)
        .then(r=>console.log(r))
        .catch(e=>console.log(e))
     }

     const updateUser=(profile)=>{
        setLoading(true)
      return  updateProfile(auth.currentUser, profile )
        .then(()=>{})
        .catch(e=>console.log(e))
     }
     
     


useEffect(()=>{
  const unsubscribe = onAuthStateChanged(auth, currentUser=>{
        setUser(currentUser)
        setLoading(false)
    })
    return ()=> unsubscribe()
},[])

    const authInfo= {user,loading,setLoading, createUser,loginUser , logOutUser, updateUser}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;