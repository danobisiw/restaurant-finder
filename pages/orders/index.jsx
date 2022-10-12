import React from "react";
import axios from "axios";
import { getMenus } from "../../utils/getMenus";
import Image from "next/image";

export const getServerSideProps = async () => {
  const result = await axios.get("http://localhost:3000/api/menus");
  return {
    props: {
      menus: result.data.menus,
    },
  };
};

const Orders = ({ menus }) => {
  return (
    <div>
      {menus.map((menu) => (
        <div key={menu._id} menu={menu}>
          <Image src={menu.menuUrl} alt="" height="100" width="75" />
          <h3 className="text-bold">Showing Details For:{menu.menuId}</h3>
          <div className="flex-2">
            <span className="text-lg">menu: {menu.menuDescription}</span>
            <span>Seller: {menu.seller}</span>
            <span>Price: {menu.price}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Orders;
