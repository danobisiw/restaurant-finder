import Menu from "../../../models/menu.model"
import db from "../../../lib/dbConnect";

export async function handler(request, response) {
  if (request.method === "GET") {
    const { menuId } = request.body;

    await db.connect();
    const menu = await Menu.findById(menuId);
    db.disconnect();

    if (!menu) {
      response
        .status(404)
        .json({ message: "Fetching menu, please try again later" });
      return;
    }
    response.status(200).json({ menu });
  }
}
