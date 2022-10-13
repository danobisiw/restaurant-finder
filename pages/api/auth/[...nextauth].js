import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import db from "../../../lib/dbConnect";
import User from "../../../models/user.model";
import Shop from "../../../models/shop.model";
import bcrypt from "bcrypt";


export default NextAuth({
    providers: [
        CredentialsProvider(
            {
                async authorize(credentials) { // connect to database
                    await db.connect();

                    let user;

                    // find user
                    if (credentials.loginAs === "user") {
                        user = await User.findOne({username: credentials.username});
                    } else if (credentials.loginAs === "Shop") {
                        // console.log(credentials);
                        shop = await Shop.findOne({shopid: credentials.shopid});
                    }

                    // console.log(user);
                    // disconnect database
                    await db.disconnect();

                    // check for user's password
                    if (user && bcrypt.compareSync(credentials.password, user.password)) {
                        return {
                            _id: user._id,
                            username: user.username,
                            firstName: user.firstName,
                            lastName: user.lastName,
                            location: user.location,
                            email: user.email,
                            telephoneNumber: user.telephoneNumber,
                            gpscode: user.gpscode

                        };
                    }
                    throw new Error("Invalid username or password");
                }
            }
        ),
    ],
    pages: {
        signIn: "/login",
        error: "/login"

    },
    jwt: {
        strategy: "jwt"
    },
    callbacks: {
        async jwt(
            {token, user}
        ) {
            if (user._id) 
                token._id = user._id;
            


            return token;
        },
        async session(
            {session, token}
        ) {
            if (token._id) 
                session._id = token._id;
            


            return session;
        }
    }

})
