import Shop from "../../../models/shop.model";
import db from "../../../lib/dbConnect";

export async function handler(request, response) {
  if (request.method === "GET") {
    const { shopId } = request.body;

    await db.connect();
    const shop = await Shop.findById(shopId);
    db.disconnect();

    if (!shop) {
      response
        .status(404)
        .json({ message: "Fetching shop, please try again later" });
      return;
    }
    response.status(200).json({ shop });
  }
}
