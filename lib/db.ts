import {PrismaClient} from "@prisma/client"

declare global{
    var prisma: PrismaClient | undefined
}

export const  db = globalThis.prisma || new PrismaClient() 

if(process.env.NODE_ENV !== "production") globalThis.prisma = db

// its because next.js use hot reload, sehingga akan terus melakukan new prismaclient(), nah untuk mencegah itu selama proses development, dibuatlah globalThis.prisma