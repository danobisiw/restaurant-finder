import Menu from "../../../models/menu.model";
import db from "../../../lib/dbConnect";


export async function handler(request, response) {
    if (request.method === "GET") {
        const {menuId} = request.body;

        await db.connect();
        const menu = await Menu.findById(menuId);
        db.disconnect();

        if (! menu) {
            response.status(404).json({message: "Fetching menu failed, please try again later"});
            return;
        }
        // if (request.method === "DELETE") {
        // const deletedMenu = menus.find((menu) => menu._id === parse(menuId));
        // const index=menus.findIndex((menu)=>menu._id===parseInt(menuId))
        // menus.splice(index)
        // }
        response.status(200).json({menu});
    }
}
