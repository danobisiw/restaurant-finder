import axios from "axios";
import React, { useState } from "react";
import { useRouter } from "next/router";

const AddMenu = () => {
  const [data, setData] = useState({
    menuURL: "null",
    shop: "",  
    menuDescription: "",
    price: "",
    available: "",
    menuName: "",
  });
  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });

  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/menu`,
        data
      );
      router.push("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex  min-h-[calc(100vh-100px)] justify-center items-center text-gray-700 my-2">
      <form
        className=" border-3 max-w-l w-4/12 p-3 rounded border-opacity-60 shadow-md bg-blue-50 text-gray-700"
        onSubmit={handleSubmit}
      >
        <div className="bg-gray-100 text-2xl h-20 justify-center flex items-center rounded-lg">
          Add Menu
        </div>
        {error && <p className="text-center text-red-500">{error}</p>}
        <div className=" grid w-full items-center">
          <div className="text-gray-700">
            <label htmlfor="menuName" className="block text-l">
              Menu Name
            </label>
            <input
              type="menuName"
              id="menuName"
              name="menuName"
              className="border p-2 w-full resize-none rounded-lg focus:bg-gray-200 text-gray-700 outline-none "
              value={data.menuName}
              onChange={handleChange}
            />
          </div>

          <div className="text-gray-700">
            <label htmlfor="shop" className="block text-l">
              Shop
            </label>
            <input
              type="shop"
              id="shop"
              name="shop"
              className="border p-2 w-full  rounded-lg focus:bg-gray-200 outline-none"
              value={data.shop}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlfor="menuDescription" className="block text-l">
              Menu Description
            </label>
            <textarea
              name="menuDescription"
              cols="5"
              id="menuDescription"
              rows="5"
              className="border p-2 w-full rounded-lg focus:bg-gray-200 resize-none outline-none"
              value={data.menuDescription}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlfor="price" className="block text-l">
              Price
            </label>
            <input
              type="price"
              id="price"
              name="price"
              className="border p-2 w-full outline-none rounded-lg focus:bg-gray-200"
              value={data.price}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlfor="available" className="block text-l">
              Available On
            </label>
            <input
              type="available"
              id="available"
              name="available"
              className="border p-2 w-full outline-none rounded-lg focus:bg-gray-200"
              value={data.available}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlfor="menuURL" className="block text-l">
              Menu Image
            </label>
            <input
              type="file"
              id="menuURL"
              name="menupURL"
              className="border p-2 w-full outline-none rounded-lg focus:bg-gray-200"
              // value={data.menuURL}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button className="border-orange-500 border px-6 py-2 rounded-xl text-range-600 hover:text-white duration-200 hover:bg-orange-500 mt-10 w-96 justify-center items-center flex">
            Add Menu
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddMenu;
