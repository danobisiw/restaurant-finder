import db from "../../../lib/dbConnect";
import Shop from "../../../models/shop.model";
import bcrypt from "bcrypt";

async function shophandler(request, response) {
    if (request.method !== "POST") {
        response.status(405).json({error: "only POST method is allowed"});
        return;
    }

    const {shopid, password} = request.body;

    await db.connect();

    const shopidExists = await Shop.findOne({shopid});
    console.log(shopidExists);
    if (shopidExists) {
        response.status(409).json({error: "Shop name already exist"});
        await db.disconnect();
        return;
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const shop = await Shop.create({
        ... request.body,
        password: hashedPassword
    });

    response.status(201).json({shop});
}

export default shophandler;
