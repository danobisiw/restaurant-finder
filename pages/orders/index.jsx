import React from "react";
import axios from "axios";
import { getMenus } from "../../utils/getMenus";
import Image from "next/image";
import { useRouter } from "next/router";

export const getServerSideProps = async () => {
  const result = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/menus`
  );
  return {
    props: {
      menus: result.data.menus,
    },
  };
};

const Orders = ({ menus }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      router.push("/menu/?${params}");
    } catch (error) {
      setError(error.message);
    }

    return (
      <div>
        <div className="flex-1"></div>
        <div className="flex-2 mr-1">
          {" "}
          {menus.map((menu) => (
            <div key={menu._id} menu={menu}>
              <Image src={menu.menuUrl} alt="" height="100" width="75" />
              <h3 className="text-bold">
                Order Confirmation For:{menu.menuId}
              </h3>

              <span className="text-lg">menu: {menu.menuDescription}</span>
              <span>Seller: {menu.seller}</span>
              <span>Price: {menu.price}</span>
              <span>Additional Info: {menu.additionalrequest}</span>
              <div className="flex justify-center items-center">
                <button className="border-orange-500 border px-6 py-2 rounded-xl text-range-600 hover:text-white duration-200 hover:bg-orange-500 mt-10 w-96 justify-center items-center flex">
                  Confirm
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
};

export default Orders;
