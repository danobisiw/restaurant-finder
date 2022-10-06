import React from "react";

const userregistration = () => {
  return (
    <div className="flex  min-h-[calc(100vh-100px)] justify-center items-center text-gray-700 my-2">
      <form className=" border-3 max-w-l w-6/12 p-3 rounded border-opacity-60 shadow-md bg-blue-50 text-gray-700">
        <div className="bg-gray-100 text-2xl h-20 justify-center flex items-center rounded-lg">
          USER REGISTRATION
        </div>
        <div className=" grid lg:grid-cols-2 gap-5 w-full items-center">
          <div className="text-gray-700">
            <label htmlFor="username" className="block text-l">
              Username
            </label>
            <input
              type="username"
              id="username"
              name="username"
              className="border p-2 w-full outline-none rounded-lg focus:bg-gray-200 text-gray-700"
            />
          </div>
          <div className="text-gray-700">
            <label htmlFor="email" className="block text-l">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="border p-2 w-full outline-none rounded-lg focus:bg-gray-200 text-gray-700"
            />
          </div>
          <div className="text-gray-700">
            <label htmlFor="password" className="block text-l">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="border p-2 w-full outline-none rounded-lg focus:bg-gray-200"
            />
          </div>
          <div>
            <label htmlFor="firstname" className="block text-l">
              First Name
            </label>
            <input
              type="firstname"
              id="firstname"
              name="firstname"
              className="border p-2 w-full outline-none rounded-lg focus:bg-gray-200"
            />
          </div>
          <div>
            <label htmlFor="lastname" className="block text-l">
              Last Name
            </label>
            <input
              type="lastname"
              id="name"
              name="lastname"
              className="border p-2 w-full outline-none rounded-lg focus:bg-gray-200"
            />
          </div>
          <div>
            <label htmlFor="location" className="block text-l">
              Location
            </label>
            <input
              type="location"
              id="location"
              name="location"
              className="border p-2 w-full outline-none rounded-lg focus:bg-gray-200"
            />
          </div>
          <div>
            <label htmlFor="phonenumber" className="block text-l">
              Telephone Number
            </label>
            <input
              type="phonenumber"
              id="phonenumber"
              name="phonenumber"
              className="border p-2 w-full outline-none rounded-lg focus:bg-gray-200"
            />
          </div>
          <div>
            <label htmlFor="gpscode" className="block text-l">
              GPS Code
            </label>
            <input
              type="gpscode"
              id="gpscode"
              name="gpscode"
              className="border p-2 w-full outline-none rounded-lg focus:bg-gray-200"
            />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button className="border-orange-500 border px-6 py-2 rounded-xl text-range-600 hover:text-white duration-200 hover:bg-orange-500 mt-10 w-full justify-center items-center flex">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default userregistration;
