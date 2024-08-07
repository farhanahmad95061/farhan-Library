import React, { useContext, useState } from 'react'
import { createContext } from 'react'

export const Authcontext=createContext();

export default function AuthProvider({children}) {
    const initialAuthValue=localStorage.getItem("User");
    const [authUser,setauthUser]=useState(
        initialAuthValue?JSON.parse(initialAuthValue):undefined
    )
    return(
        <Authcontext.Provider value={[authUser,setauthUser]}>
            {children}
        </Authcontext.Provider>
    )
 
}

 export const useAuth=()=>useContext(Authcontext);
