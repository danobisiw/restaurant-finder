import axios from "axios";

export const getOrders = async (id) => {
  const result = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/orders`
  );
  const orders = await result.data.order;

  if (id) {
    const order = orders.find((order) => order._id === id);
    return order;
  }
  return orders;
};
