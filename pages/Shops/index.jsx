import React from "react";
import { getShops } from "../../utils/getShops";

export async function getStaticProps() {
  const shops = await getShops();

  return {
    props: {
      shops,
    },
  };
}

const Shops = ({ shops }) => {
  return (
    <div>
      {shops.map((shop, idx) => (
        <p key={idx}>{shop.shopName}</p>
      ))}
    </div>
  );
};

export default Shops;
