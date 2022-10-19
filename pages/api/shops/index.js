import Shop from "../../../models/shop.model";
import db from "../../../lib/dbConnect";
import bcrypt from "bcryptjs"

export default async function handler(request, response) {
    if (!["POST", "GET"].includes(request.method)) {
        return response.status(405).json({error: "Only POST and GET methods are allowed"});
    }
    if (request.method === "GET") {
        await db.connect();

        const shops = await Shop.find({});

        await db.disconnect();

        response.status(200).json({shops});
    } else if (request.method === "POST") {
        await db.connect();

        console.log(request.body);
        const {shopName, password} = request.body
        console.log(request.body)
        try {
            // console.log("creating");

            const usernameExists = await Shop.findOne({shopName});
            // console.log(usernameExists);;

            if (usernameExists) {
                response.status(409).json({error: "Shop name already exist"});
                await db.disconnect();
                return;
            }


            const hashedPassword = await bcrypt.hash(password, 12);


            const shop = await Shop.create({
                ... request.body,
                password: hashedPassword
            });

            response.status(200).json({payload: shop, success: true});
        } catch (error) {
            console.log(error)
            response.status(400).json({error, success: false});
        }
    }
}
