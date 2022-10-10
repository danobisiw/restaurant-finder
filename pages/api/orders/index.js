import Order from "../../../models/orders.model";
import db from "../../../lib/dbConnect";

export default async function handler(request, response) {
  if (request.method === "GET" && request.method === "POST") {
    response
      .status(405)
      .json({ error: "Only POST and GET methods are allowed" });
  }
  if (request.method === "GET") {
    await db.connect();

    const orders = await Order.find({});

    await db.disconnect();

    response.status(200).json({ orders });
    return;
  } else if (request.method === "POST") {
    await db.connect();

    const order = await Order.create({
      ...request.body,
    });
    response.status(200).json({ order });
    return;
  }
}
