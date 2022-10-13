import db from "../../../lib/dbConnect";
import User from "../../../models/user.model";
import Shop from "../../../models/shop.model"
import bcrypt from "bcrypt";

async function handler(request, response) {
  if (request.method !== "POST") {
    response.status(405).json({ error: "only POST method is allowed" });
    return;
  }

  const { username, password } = request.body;

  await db.connect();

  const usernameExists = await User.findOne({ username });
  console.log(usernameExists)
  if (usernameExists) {
    response.status(409).json({ error: "Username already in use" });
    await db.disconnect();
    return;
  }

  const hashedPassword = await bcrypt.hash(password, 12);
  const user = await User.create({
    ...request.body,
    password: hashedPassword,
  });

  response.status(201).json({ user });
}




export default handler;
