import React from "react";

const shopregistration = () => {
  return (
    <div className="flex   justify-center mt-10 rounded-xl">
      <form className=" border-3 max-w-l w-6/12 p-5 rounded space-y-3 border-opacity-60 shadow-md bg-blue-50 ">
        <div className="bg-gray-300 flex justify-center items-center h-16 rounded-lg w-full">
          SHOP REGISTRATION
        </div>
        <div className=" grid lg:grid-cols-2 gap-5 w-full items-center">
          <div>
            <label htmlFor="shopname" className="block text-l">
              Shop Name
            </label>
            <input
              type="shopname"
              id="shopname"
              name="shopname"
              className="border p-2 w-full outline-none rounded-lg focus:bg-gray-200"
            />
          </div>

          <div>
            <label htmlFor="businessregistration" className="block text-l">
              Business Registration Number
            </label>
            <input
              type="businessregistration"
              id="businessregistration"
              name="businessregistration"
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
            <label htmlFor="region" className="block text-l">
              Region
            </label>
            <input
              type="region"
              id="region"
              name="region"
              className="border p-2 w-full outline-none rounded-lg"
            />
          </div>
          <div>
            <label htmlFor="gpscode" className="block text-l">
              GPS Code
            </label>
            <input
              type="gpscode"
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
            <label htmlFor="service" className="block text-l">
              Service Type
            </label>
            <select
              name="service"
              id="service"
              type="service"
              className="border p-2 w-full outline-none rounded-lg focus:bg-gray-200"
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
            />
          </div>
          <div>
            <label htmlFor="website" className="block text-l">
              Website
            </label>
            <input
              type="website"
              id="website"
              name="website"
              className="border p-2 w-full outline-none rounded-lg focus:bg-gray-200"
            />
          </div>

          <div>
            <label htmlFor="frontdeskcontact" className="block text-l">
              Front Desk Contact
            </label>
            <input
              type="frontdesknumber"
              id="frontdesknumber"
              name="frontdesknumber"
              className="border p-2 w-full outline-none rounded-lg focus:bg-gray-200"
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

export default shopregistration;
