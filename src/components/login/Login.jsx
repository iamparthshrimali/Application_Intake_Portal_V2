import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom';


function Login() {

  const [credentials, setCredentials] = useState({});
  const { register, handleSubmit, formState: { errors } } = useForm();
  const formSubmit = (data) => {
    console.log(data);
    setCredentials(data);
  }
  
 
  return (
    <div className="shadow-lg bg-gray-700 w-1/4 py-10 text-white h-max" style={{padding:"30px 30px"}}>
     
      <form className="form flex flex-col" onSubmit={handleSubmit(formSubmit)} >
        <label htmlFor="Username">Username</label>
        <input type="text" id="Username" className="shadow appearance-none border  rounded  py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" {...register("username", { required: "Username is required" })} />
        <p style={{color:"red"}}>{errors.username?.message}</p>
        <label htmlFor="Password" >Password</label>
        <input type="password" id="Password" className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" {...register("password", {
          required: "Password is required"  
        })} />
          <p style={{color:"red"}}>{errors.password?.message}</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Login
        </button>

       <div class="mt-3">
            <Link to={'/register'} className="nav-link ">  Don't have an account ? </Link>
       </div>
      </form>

    </div>
  )
}

export default Login