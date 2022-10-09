import axios from "axios";

export const getShops = async (id) => {
  const result = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/shops`
  );
  const shops = await result.data.shop;

  if (id) {
    const shop = shops.find((shop)=>shop._id === id);
    return shop;
  }
  return shops;
};
