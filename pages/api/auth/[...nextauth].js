import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import db from "../../../lib/dbConnect";
import User from "../../../models/user.model";
import bcrypt from "bcrypt";

export default NextAuth({
  providers: [
    CredentialsProvider({
      type: "credentials",
      // credentials: {
      //     email: {
      //         label: "Email Adress",
      //         placeholder: "Please enter your email address",
      //     }
      // },
      async authorize(credentials) {
        await db.connect();

        //find user
        const user = await User.findOne({
          username: credentials.username,
        });

        console.log(user);
        //disconnect database
        await db.disconnect();

        //check for user's password
        if (user && bcrypt.compareSync(credentials.password, user.password)) {
          return {
            _id: user._id,
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            location: user.location,
            email: user.email,
          };
        }

        throw new Error("Invalid username or password");
      },
    }),
  ],
  pages: {
    signIn: "/admin/login",
    error: "/admin/login",
  },
  jwt: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user._id) token._id = user._id;
      return token;
    },
    async session({ session, token }) {
      if (token._id) session._id = token._id;
      return session;
    },
  },
});
