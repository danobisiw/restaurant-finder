import db from "../../../lib/dbConnect";
import Shop from "../../../models/shop.model";
import bcrypt from "bcryptjs";

async function shophandler(request, response) {
    if (request.method !== "POST") {
        response.status(405).json({error: "only POST method is allowed"});
        return;
    }

    const {email, password} = request.body;

    // console.log(req.body)

    await db.connect();

    const usernameExists = await Shop.findOne({email});
    // console.log(usernameExists);
    if (usernameExists) {

        response.status(409).json({error: "Shop name already exist"});
console.log(usernameExists)

        await db.disconnect();
        return;
    }


    // const shop = await Shop.create({
    //     ... request.body,
    //     password: hashedPassword
    // });

    // console.log(hashedPassword)

    // response.status(201).json({shop});
}

export default shophandler;
