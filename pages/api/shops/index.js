import Shop from "../../../models/shop.model";
import db from "../../../lib/dbConnect";

export default async function handler(request, response) {
  if (!["POST", "GET"].includes(request.method)) {
    return response
      .status(405)
      .json({ error: "Only POST and GET methods are allowed" });
  }
  if (request.method === "GET") {
    await db.connect();

    const shops = await Shop.find({});

    await db.disconnect();

    response.status(200).json({ shops });
  } else if (request.method === "POST") {
    await db.connect();

    // console.log(request.body);

    try {
      console.log("creating");

      const shop = await Shop.create({
        ...request.body,
      });

      response.status(200).json({ payload: shop, success: true });
    } catch (error) {
      response.status(400).json({ error, success: false });
    }
  }
}
