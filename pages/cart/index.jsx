import React, { useState } from "react";
import Image from "next/image";

const cart = () => {
  return (
    <div className="flex p-5">
      <div className="flex-4">
        <table className="w-100 px-5">
          <thead>
            <tr className="item-center">
              <th className="w-70 mr-10">Menu Name</th>
              <th className="w-70 ml-3">Description</th>
              <th className="w-70">Additonal Request</th>
              <th className="w-70">Price</th>
              <th className="w-70">Quantity</th>
              <th className="w-70">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr className="w-full justify-center">
              <td>
                <div className="relative items-center justify-center">
                  <Image
                    src="/img/pizza.png"
                    layout="fill"
                    objectFit="cover"
                    alt=""
                    className="w-100 h-96"
                  />
                  hghfgh
                </div>
              </td>
              <td>
                <h1 className=" text-[18]">Fufu Pizza</h1>
              </td>
              <td className="font-normal">
                <span className="text-[18] mr-3 ml-3">Add more goat meat</span>
              </td>
              <td className="font-normal">
                <span className="text-[18] mr-3">GHC 539</span>
              </td>
              <td className="font-normal">
                <span className="text-[18] items-center flex">2</span>
              </td>
              <td className="text-base">
                <span className="text-[30] mr-3">GHC 1020</span>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr className="w-full justify-start">
              <td>
                <div className="relative items-center justify-center">
                  <Image
                    src="/img/pizza.png"
                    layout="fill"
                    objectFit="cover"
                    alt=""
                    className="w-100 h-96"
                  />
                  hghfgh
                </div>
              </td>
              <td>
                <h1 className=" text-[18]">Fufu Pizza</h1>
              </td>
              <td className="font-normal">
                <span className="text-[18] mr-3">Add more goat meat</span>
              </td>
              <td className="font-normal">
                <span className="text-[18] mr-3">GHC 539</span>
              </td>
              <td className="font-normal">
                <span className="text-[18] items-center flex">2</span>
              </td>
              <td className="text-base">
                <span className="text-[30] mr-3">GHC 1020</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex-2 ml-24 flex lg:flex-col w-96">
        <div className="rounded-lg max-h-80 bg-gray-300 p-14 py-3 flex lg:flex-col text-white justify-between shadow">
          <h2 className="text-xl flex items-center">CART TOTAL</h2>
          <div className="mr-">
            <b className="mr-5">SubTotal:</b>GHC 79.6
          </div>
          <div className="mr-2">
            <b className="mr-5">Discount: </b>GHC 0
          </div>
          <div className="mr-">
            <b className="mr-5">Total:</b>GHC 79.6
          </div>
          <button className="border-orange-500 border px-6 py-2 rounded-2xl text-range-600 hover:text-white duration-200 hover:bg-orange-500 mt-10 w-full ">
            CHECK OUT
          </button>
        </div>
      </div>
    </div>
  );
};

export default cart;