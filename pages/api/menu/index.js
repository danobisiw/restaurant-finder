import db from "../../../lib/dbConnect"
import Menu from "../../../models/menu.model"


export default async function handler(request, response) {
  if (request.method === "GET" && request.method === "POST") {
    response
      .status(405)
      .json({ error: "Only POST and GET methods are allowed" });
  }
  if (request.method === "GET") {
    await db.connect();

    const menus = await Menu.find({});

    await db.disconnect();

    response.status(200).json({ menus });
    return;
  } else if (request.method === "POST") {
    await db.connect();

    const menu = await Menu.create({
      ...request.body,
    });
    response.status(200).json({ menu });
    return;
  }

}