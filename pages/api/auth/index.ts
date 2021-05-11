import { PrismaClient } from ".prisma/client";
import NextAuth from "next-auth";
import Adapters from "next-auth/adapters";
import Providers from "next-auth/providers";

let prisma;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

const options = {
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  adapter: Adapters.Prisma.Adapter({ prisma }),
};

export default (req, res) => NextAuth(req, res, options);
