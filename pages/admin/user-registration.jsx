import React from "react";

const userregistration = () => {
  return (
    <div className="flex  min-h-[calc(100vh-100px)] justify-center items-center text-gray-700">
      <form className=" border-3 max-w-l w-4/12 p-4 rounded border-opacity-60 shadow-md bg-blue-50 text-gray-700">
        <div className="bg-gray-100  h-20 justify-center flex items-center rounded-lg">
          USER REGISTRATION
        </div>

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

        <div className="flex justify-center">
          <button className="border-orange-500 border px-6 py-2 rounded text-range-600 hover:text-white duration-200 hover:bg-orange-500 mt-10 w-full ">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default userregistration;
