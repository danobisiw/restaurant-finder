import React, { useState } from "react";
import Image from "next/image";

const Menu = () => {
  const [size, setSize] = useState(0);
  const menu = {
    id: 1,
    menuImage: "/img/pizza.png",
    menuName: "FUFU PIZZA",
    price: 539,
    description:
      "Lorem20gfd gdgdfgfsdfdilfdjfpjf j kjfkdjg kdgjklfjgk flgjfg 'ssjg'sdgjj jtyu tdsfjdfd jfkdf dd fksdlfk;ds",
  };
  return (
    <div className="flex min-h-[calc(100vh-8)]">
      <div className="flex-1 flex items-center justify-center object-contain">
        <div className="w-80 h-64 relative mt-3">
          <Image src={menu.menuImage} layout="fill" alt="" />
        </div>
      </div>
      <div className="flex-1 p-5 ">
        <h1 className="border-b-2 text-5xl mr-5">{menu.menuName}</h1>
        <p className="text-4xl mb-10">GHC {menu.price}</p>
        <p className="text-2xl mt-2 border-b-3">MENU DESCRIPTION</p>
        <span className="text-lg mb-10">{menu.description}</span>
        {/* <p className="w-40 flex justify-between"></p>
        <h3 className="font-normal"></h3>
        <div className="w-40 flex justify-between">
          <div className="w-40 flex justify-between">
            <div className="w-40 flex justify-between"> */}
        {/* <Image src="/img/size.png" layout="fill" alt="" /> */}
        {/* <span className="absolute bg-teal-400 font-normal p-4 rounded-full mt-3 mr-12">
                Small
              </span>
            </div>
            <div className="w-40 flex justify-between "> */}
        {/* <Image src="/img/size.png" layout="fill" alt="" /> */}
        {/* <span className=" w-70 absolute bg-teal-400 font-normal p-4 rounded-full mt-3  mr-12">
                Medium
              </span>
            </div>
            <div className="w-90 flex justify-between"> */}
        {/* <Image src="/img/size.png" layout="fill" alt="" /> */}
        {/* <span className="absolute bg-teal-400 font-normal p-4 rounded-full mt-3">
                Family
              </span> */}
        <div className="mt-5 grid lg:grid-col">
          {/* <label for="additionalrequest" className="text-2xl mt-2 border-b-3">
            Additional Request
          </label> */}
          <textarea
            id="additionalrequest"
            name="additionalrequest"
            rows="3"
            cols="6"
            placeholder="Additional Request"
            className="border p-2 w-full outline-none resize-none mt-2"
          ></textarea>
        </div>
        <div className="flex justify-left">
          <button className="border-orange-500 border px-6 py-2 rounded text-range-600 hover:text-white duration-200 hover:bg-orange-500 mt-10 w-40">
            Click to Buy...
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
