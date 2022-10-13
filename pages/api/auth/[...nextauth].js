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

                    let entity;

                    // find user
                    if (credentials.loginAs === "user") {
                        entity = await User.findOne({email: credentials.email});
                    } else if (credentials.loginAs === "Shop") {
                        console.log(credentials);
                        entity = await Shop.findOne({email: credentials.email});
                    }


                    // disconnect database
                    await db.disconnect();

                    // check for user's password
                    if (entity && bcrypt.compareSync(credentials.password, entity.password)) {
                        if (credentials.loginAd === "shop") {

                            return {
                                _id: entity._id,
                                username: entity.username,
                                firstName: entity.firstName,
                                lastName: entity.lastName,
                                location: entity.location,
                                email: entity.email,
                                telephoneNumber: entity.telephoneNumber,
                                gpscode: entity.gpscode
                            };
                        } else {
                            return {
                                _id: entity._id,
                                shopName: entity.shopName,
                                streetName: entity.streetName,
                                serviceType: entity.serviceType,
                                contactManager: entity.contactManager,
                                region: entity.region,
                                tin: entity.tin,
                                location: entity.location,
                                email: entity.email,
                                telephoneNumber: entity.telephoneNumber,
                                gpscode: entity.gpscode
                            };

                        }
                    }

                    throw new Error("Invalid email or password");
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
