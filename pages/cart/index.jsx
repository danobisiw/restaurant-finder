import React,{useState} from "react";
import Image from "next/image";


const cart = () => {

  return (
    <div className="flex p-5">
      <div className="flex-4">
        <table className="w-100 px-5">
          <thead>
            <tr className="item-center">
              <th className="w-70 mr-10">Menu Name</th>
              <th className="w-70">Description</th>
              <th className="w-70">Additonal Request</th>
              <th className="w-70">Price</th>
              <th className="w-70">Quantity</th>
              <th className="w-70">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr className="w-full justify-center">
              <td>
                <div className="relative items-center w-100 h-100">
                  <Image
                    src="/img/pizza.png"
                    layout="fill"
                    objectFit="cover"
                    alt=""
                    className="mt-20"
                  />
                  menuImage
                </div>
              </td>
              <td>
                <h1 className=" text-[18] mr-5">Fufu Pizza</h1>
              </td>
              <td className="font-normal">
                <span className="text-[18]">Add more goat meat</span>
              </td>
              <td className="font-normal">
                <span className="text-[18]">GHC 539</span>
              </td>
              <td className="font-normal">
                <span className="text-[18] justify-end">2</span>
              </td>
              <td className="text-base">
                <span className="text-[30]">GHC 1020</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex-1 ml-24">
        <div className="rounded-lg max-h-80 bg-gray-300 p-14 py-3 flex lg:flex-col text-white">
          dttrndtdt
        </div>
      </div>
    </div>
  );
};

export default cart;
