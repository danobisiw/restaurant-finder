import db from "../../../lib/dbConnect";
import User from "../../../models/user"
import bcrypt from "bcryptjs";

async function handler(request, response) {
    if (request.method !== "POST") {
        response.status(405).json({ error: "only POST method is allowed" })
        return;
    }

    const {firstName, lastName, email, password} = request.body;

    await db.connect();

    const emailExists = await User.findOne({ email });
    if (emailExists) {
        response.status(409).json({ error: "Email already in use"})
        await db.disconnect();
        return;
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await User.create({
        firstName,
        lastName,
        email,
        password: hashedPassword,
    });

    response.status(201).json({ user });
}

export default handler;