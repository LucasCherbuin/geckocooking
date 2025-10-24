import {  Post, prisma } from '@prisma/client'
import NextCrud, { PrismaAdapter } from '@premieroctet/next-crud'
import { Prisma } from '../prisma/schema.prisma'

const handler = async (req) => {
    const NextCrudHandler = await NextCrud({
        adapter: new PrismaAdapter({
            prismaClient: prismaClient,
        }),
    })

    return NextCrudHandler(Req)
}

export {handler as POST, handler as GET, handler as PUT, handler as DELETE }