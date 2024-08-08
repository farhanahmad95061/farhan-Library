import React from 'react'
import { Link } from 'react-router-dom'
import { useForm} from "react-hook-form"
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast';



function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = async(data) => {
    const userInfo={
     
      email:data.email,
      password:data.password

    }
    console.log(data);
    await axios.post("https://farhans-library.onrender.com/user/login",userInfo)
    // await axios.post("http://localhost:4001/user/login",userInfo)
   .then((res)=>{
    console.log(res.data);
    if(res.data){
      //alert("you are now logged in");
      toast.success('You are now logged in !!');
      document.getElementById("my_modal_3").close();
      setTimeout(()=>{
       window.location.reload();
       localStorage.setItem("User",JSON.stringify(res.data.user));
      },2000)
    }
   }).catch((err)=>{
    console.log(err);
      if(err.response){
    //alert("error: invalid username or password" );
    toast.error('Error: invalid username or password!!');
      setTimeout(()=>{},2000);
      }
   })
  };
  return (
    <div>
 
<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      {/* <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
      >
      ✕
      </button> */}
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
        onClick={()=>document.getElementById("my_modal_3").close()}
      >
        ✕
     </Link>
             
  
    <h3 className="font-bold text-lg">Login
    </h3>
   
            {/* Email */}
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            <div className="mt-4 space-y-2">
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("password", { required: true })}
              />
              <br />
              {errors.password && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            <div className="flex justify-around mt-6">
              <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                Login
              </button>
              <p>
                Not registered?{" "}
                <Link
                  to="/signup"
                  className="underline text-blue-500 cursor-pointer"
                >
                  Signup
                </Link>{" "}
              </p>
            </div>
            </form>
  </div>
</dialog>
    </div>

  )
}

export default Login
