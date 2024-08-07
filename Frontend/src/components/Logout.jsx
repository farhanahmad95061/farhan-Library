import React from 'react'
import toast from 'react-hot-toast';
import { useAuth } from '../context/AuthProvider';

function Logout() {
    const [authUser,setauthUser]=useAuth()
    const handleLogout=()=>{
        try {
            setauthUser(
              {  ...authUser,
                user:null,
            });
            localStorage.removeItem("User");
            toast.success("Logout successful")
            setTimeout(()=>{
                window.location.reload();
               },1500)
           

        } catch (error) {
            toast.error("error:"+error.message);
        }
    }
  return (
    <div className="px-3 py-3 bg-violet-500 text-white rounded-md cursor-pointer" 
    onClick={handleLogout}
    >
      Logout
    </div>
  )
}

export default Logout
