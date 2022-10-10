import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const userRegistration = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    username: "",
    location: "",
    gpscode: "",
    telephoneNumber: "",
  });
  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {
      firstName,
      lastName,
      email,
      password,
      username,
      location,
      gpscode,
      telephoneNumber,
    } = data;

    if (
      firstName === "" &&
      lastName === "" &&
      email === "" &&
      password === "" &&
      username === "" &&
      location === "" &&
      gpscode === "" &&
      telephoneNumber === ""
    ) {
      setError("Please fill all blanks");
      return;
    }
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setError("Please Enter a valid Email");
      return;
    }
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/register`,
        data
      );
      router.push("/");
    } catch (error) {
      setError("Username already Taken");
    }
  };
  return (
    <div className="flex  min-h-[calc(100vh-100px)] justify-center items-center text-gray-700 my-2">
      <form
        onSubmit={handleSubmit}
        className=" border-3 max-w-l w-6/12 p-3 rounded border-opacity-60 shadow-md bg-blue-50 text-gray-700"
      >
        <div className="bg-gray-100 text-2xl h-20 justify-center flex items-center rounded-lg">
          USER REGISTRATION
        </div>
        <div>
        
          {error && <p className="text-red-500 flex items-center">{error}</p>}
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
              value={data.username}
              onChange={handleChange}
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
              value={data.email}
              onChange={handleChange}
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
              value={data.password}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="firstName" className="block text-l">
              First Name
            </label>
            <input
              type="firstName"
              id="firstName"
              name="firstName"
              className="border p-2 w-full outline-none rounded-lg focus:bg-gray-200"
              value={data.firstName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-l">
              Last Name
            </label>
            <input
              type="lastName"
              id="lastName"
              name="lastName"
              className="border p-2 w-full outline-none rounded-lg focus:bg-gray-200"
              value={data.lastName}
              onChange={handleChange}
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
              value={data.location}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="telephoneNumber" className="block text-l">
              Telephone Number
            </label>
            <input
              type="telephoneNumber"
              id="telephoneNumber"
              name="telephoneNumber"
              className="border p-2 w-full outline-none rounded-lg focus:bg-gray-200"
              value={data.telephoneNumber}
              onChange={handleChange}
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
              value={data.gpscode}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button
            className="border-orange-500 border px-6 py-2 rounded-xl text-range-600 hover:text-white duration-200 hover:bg-orange-500 mt-10 w-96 justify-center items-center flex"
            type="submit"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default userRegistration;
