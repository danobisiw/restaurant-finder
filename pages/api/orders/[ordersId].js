import Order from "../../../models/orders.model";
import db from "../../../lib/dbConnect";


export async function handler(request, response) {
    if (request.method === "GET") {
        const {orderId} = request.body;

        await db.connect();
        const order = await Order.findById(orderId);
        db.disconnect();

        if (! order) {
            response.status(404).json({message: "Fetching order failed, please try again later"});
            return;
        }
        // if (request.method === "DELETE") {
        // const deletedMenu = menus.find((order) => order._id === parse(menuId));
        // const index=menus.findIndex((order)=>order._id===parseInt(menuId))
        // menus.splice(index)
        // }
        response.status(200).json({order});
    }
}
