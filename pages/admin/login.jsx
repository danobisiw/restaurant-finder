import React, { useState } from "react";
// import { httpClient } from '../services/httpClient';
// import {useNavigate} from "react-router-dom"
import Link from "next/link";

function Login() {
  //     const [data, setData]=useState({
  //         email: "",
  //         password:"",
  //     })
  //     const [error, setError]=useState();

  // const navigate=useNavigate();

  //   const handleChange = (e) => {
  //     setData({ ...data, [e.target.name]: e.target.value });
  //   };
  //     const handleSubmit =async (e) => {
  //         e.preventDefault();
  //         try {
  //           const response =await httpClient.post("/auth/login", data);
  //           localStorage.setItem("token", response.data.token)
  //           navigate("/")
  //         } catch (error) {
  //             setError(error.message)
  //         }
  //     };
  return (
    <div className="flex  min-h-[calc(100vh-100px)] justify-center items-center">
      <div className="bg-gray-100 w-3/12 h-20 justify-center flex items-center rounded-t-lg">
        LOGIN
      </div>

      <form
        className=" border-3 max-w-l w-6/12 p-5 rounded space-y-3 border-opacity-60 shadow-md  flex-col-2"
        // onSubmit={handleSubmit}
      >
        {/* {error && <p className='text-red-500 text-center'>{error}</p>} */}

        <div>
          <label htmlFor="username" className="block text-l">
            Username
          </label>
          <input
            type="username"
            id="username"
            name="username"
            className="border p-2 w-full outline-none rounded-lg focus:bg-gray-200"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-l">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="border p-2 w-full outline-none rounded-lg focus:bg-gray-200"
            // onChange={handleChange}
          />
          <span className="text-opacity-5 font-light font">
            Forgot Password?<Link href="/resetpassword">Click here</Link>
          </span>
        </div>

        <div className="flex justify-end">
          <button className="border-orange-500 border px-6 py-2 rounded text-range-600 hover:text-white duration-200 hover:bg-orange-500 mt-10 ">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
