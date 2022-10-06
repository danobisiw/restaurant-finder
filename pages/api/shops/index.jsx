import Shop from "../../../models/shop.model";
import db from "../../../lib/dbConnect";

export default async function handler(request, response) {
  if (request.method == "GET" || request.method == "POST") {
    response
      .status(405)
      .json({ error: "Only POST and GET methods are allowed" });
  }
  if(request.method==="GET"){
    await db.connect();

    const shops=await Shop.find({});

    await db.disconnect();

    response.status(200).json({shops});
return;
  }else if(request.method==="POST"){
    await db.connect();

    const shop=await Shop.create({
        ...request.body
    })
  }
}
