import db from "../../../lib/dbConnect";
import Orders from "../../../models/orders.model";

export default async function handler(request, response) {
    if (request.method === "GET") {
        await db.connect();

        const orders = await Orders.find({});

        await db.disconnect();

        response.status(200).json({orders});
    } else if (request.method === "POST") {
        await db.connect();

        console.log(request.body);

        const order = await Orders.create({
            ... request.body,
           
        });
        response.status(200).json({order});
        return;
    } else {
        response.status(405).json({error: "Only POST and GET methods are allowed"});
    }
}
