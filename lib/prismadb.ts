import { PrismaClient } from "@prisma/client";

declare global {
    var prisma: PrismaClient | undefined
}

// use existing client running prisma or creat new
const client = globalThis.prisma || new PrismaClient()
// dont understand the following line
if (process.env.NODE_ENV !== 'production') globalThis.prisma = client

export default client