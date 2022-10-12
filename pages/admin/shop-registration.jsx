import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import isWindow from "../../utils/isWindow";

const Shopregistration = () => {
  const [data, setData] = useState({
    shopName: "",
    location: "",
    streetName: "",
    serviceType: "",
    email: "",
    contactNumber: "",
    contactManager: "",
    region: "",
    tin: "",
    gpsCode: "",
  });
  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {
      shopName,
      location,
      streetName,
      serviceType,
      email,
      contactNumber,
      contactManager,
      region,
      tin,
      gpsCode,
    } = data;

    if (
      shopName === "" &&
      location === "" &&
      streetName === "" &&
      serviceType === "" &&
      email === "" &&
      contactNumber === "" &&
      contactManager === "" &&
      region === "" &&
      tin === "" &&
      gpsCode === ""
    ) {
      setError("Please fill all blanks");
      return;
    }

    // console.log(data)

    try {
      await axios
        .post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/shops`, data)
        .then((response) => {
          if (response.data.success) {
            setError("");
            const item = JSON.stringify(response.data.payload);
            isWindow && sessionStorage.setItem("authdata", item);
            router.push("/admin/login");
          } else {
            setError(response.data.error);
          }
        });
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className="flex   justify-center mt-10 rounded-xl">
      <form
        className=" border-3 max-w-l w-6/12 p-5 rounded space-y-3 border-opacity-60 shadow-md bg-blue-50 "
        onSubmit={handleSubmit}
      >
        <div className="bg-gray-300 flex justify-center items-center h-16 rounded-lg w-full">
          SHOP REGISTRATION
        </div>
        <div> {error && <p className="text-red-500">{error}</p>}</div>
        <div className=" grid lg:grid-cols-2 gap-5 w-full items-center">
          <div>
            <label htmlFor="shopName" className="block text-l">
              Shop Name
            </label>
            <input
              type="shopName"
              id="shopName"
              name="shopName"
              className="border p-2 w-full outline-none rounded-lg focus:bg-gray-200"
              value={data.shopName}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="tin" className="block text-l">
              TIN Number
            </label>
            <input
              type="tin"
              id="tin"
              name="tin"
              className="border p-2 w-full outline-none rounded-lg focus:bg-gray-200"
              value={data.tin}
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
            <label htmlFor="region" className="block text-l">
              Region
            </label>
            <input
              type="region"
              id="region"
              name="region"
              className="border p-2 w-full outline-none rounded-lg"
              value={data.region}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="gpsCode" className="block text-l">
              GPS Code
            </label>
            <input
              type="gpsCode"
              id="gpsCode"
              name="gpsCode"
              className="border p-2 w-full outline-none rounded-lg focus:bg-gray-200"
              value={data.gpsCode}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="streetName" className="block text-l">
              Street Name
            </label>
            <input
              type="streetName"
              id="streetName"
              name="streetName"
              className="border p-2 w-full outline-none rounded-lg focus:bg-gray-200"
              value={data.streetName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="contactNumber" className="block text-l">
              Telephone Number
            </label>
            <input
              type="contactNumber"
              id="contactNumber"
              name="contactNumber"
              className="border p-2 w-full outline-none rounded-lg focus:bg-gray-200"
              value={data.contactNumber}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="serviceType" className="block text-l">
              Service Type
            </label>
            <select
              name="serviceType"
              id="serviceType"
              type="serviceType"
              className="border p-2 w-full outline-none rounded-lg focus:bg-gray-200"
              value={data.serviceType}
              onChange={handleChange}
            >
              <option value="selecttype">-----Select Service Type----</option>
              <option value="all service">All Service</option>
              <option value="eatin">eat in</option>
              <option value="pickup">pickup</option>
              <option value="delivery">delivery on</option>
            </select>
          </div>
          <div>
            <label htmlFor="email" className="block text-l">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="border p-2 w-full outline-none rounded-lg focus:bg-gray-200"
              value={data.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="contactManager" className="block text-l">
              Contact Manager
            </label>
            <input
              type="contactManager"
              id="contactManager"
              name="contactManager"
              className="border p-2 w-full outline-none rounded-lg focus:bg-gray-200"
              value={data.contactManager}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="flex justify-center items-center w-full">
          <button className="border-orange-500 border px-6 py-2 rounded text-range-600 hover:text-white duration-200 hover:bg-orange-500 mt-10 w-full justify-center items-center flex">
            Register Shop
          </button>
        </div>
      </form>
    </div>
  );
};

export default Shopregistration;
