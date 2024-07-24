import NextAuth, { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@next-auth/prisma-adapter"; 

import prisma from "@/libs/db"

export const authOptions : NextAuthOptions = {
  adapter : PrismaAdapter(prisma),
  pages : {
    signIn : '/sign-in'
  },
  providers: [
    GoogleProvider({
      clientId: process.env.CLIENT_ID || "",
      clientSecret: process.env.CLIENT_SECRET || ""
    })
  ],
  secret: process.env.JWT_SECRET || "test",
}

export default NextAuth(authOptions)
